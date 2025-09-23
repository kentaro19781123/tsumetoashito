// Tailwind CSSリファクタ: vanilla-extract参照を削除
import { Slide } from "@/app/(top)/_component/Case/slide";
import { Inner } from "@/app/_component/Inner";
import { Title } from "@/app/_component/Title";
import { metaCase } from "@/app/_const/menu";
import { client } from "@/app/_libs/client";
import { treatmentContentsType, treatmentCategoryType } from "@/types";

const getTreatmentContents = async () => {
  const response = await client.getList<treatmentContentsType>({
    endpoint: "treatment",
  });
  return response.contents;
};

const getCategoryContents = async () => {
  const response = await client.get<treatmentCategoryType>({
    endpoint: "shopinfo",
    contentId: "7zu-0755dx",
    queries: { fields: "contentBlock" },
  });
  return response.contentBlock[0].categoryList;
};

export const Case: React.FC = async () => {
  const treatmentData = await getTreatmentContents();
  const categoryData = await getCategoryContents();

  return (
    <section className="pt-12">
      <Inner className="p-0!">
        <div className="px-4">
          <Title text={metaCase.title} />
        </div>
        <Slide category={categoryData} items={treatmentData} />
      </Inner>
    </section>
  );
};
