import { cssStyle } from "./gallery.css";
import { Slide } from "@/component/Top/Gallery/Slide";
import { Title } from "@/component/common/Title";
// import { galleryItems } from "@/const/galleryItems";
import { client } from "@/libs/client";
import { treatmentContentsType, treatmentCategoryType } from "@/types";

const getTreatmentContents = async () => {
  const response = await client.getList<treatmentContentsType>({
    customRequestInit: {
      cache: "no-store", // キャッシュを利用せずに常に新しいデータを取得する
    },
    endpoint: "treatment",
  });
  return response.contents;
};

const getCategoryContents = async () => {
  const response = await client.get<treatmentCategoryType>({
    customRequestInit: {
      cache: "no-store", // キャッシュを利用せずに常に新しいデータを取得する
    },
    endpoint: "shopinfo",
    contentId: "7zu-0755dx",
    queries: { fields: "contentBlock" },
  });
  return response.contentBlock[0].categoryList;
};

export const Gallery: React.FC = async () => {
  const treatmentData = await getTreatmentContents();
  const categoryData = await getCategoryContents();
  const categoryArray = categoryData.map((x) => x.categoryItem);

  return (
    <section className={cssStyle.section}>
      <div className={cssStyle.inner}>
        <Title text="施術例" />
        <Slide items={treatmentData} category={categoryArray} />
      </div>
    </section>
  );
};
