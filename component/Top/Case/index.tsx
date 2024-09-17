import { cssStyle } from "./case.css";
import { Slide } from "@/component/Top/Case/Slide";
import { Title } from "@/component/Title";
import { metaCase } from "@/const/menu";
import { client } from "@/libs/client";
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
    <section className={cssStyle.section}>
      <div className={cssStyle.inner}>
        <div className={cssStyle.titleWrap}>
          <Title text={metaCase.title} />
        </div>
        <Slide category={categoryData} items={treatmentData} />
      </div>
    </section>
  );
};
