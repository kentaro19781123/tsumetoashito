import React from "react";
import { CategoryContents } from "./categoryContents";
import { cssStyle } from "./page.css";
import { Footer } from "@/component/Footer";
import { FooterButton } from "@/component/FooterButton";
import { Header } from "@/component/Header";
import { Title } from "@/component/common/Title";
import { metaCase } from "@/const/menu";
import { client } from "@/libs/client";
import { treatmentCategoryType, treatmentType } from "@/types";

const getContents = async () => {
  const response = await client.get<treatmentType>({
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

export default async function GalleryList() {
  const data = await getContents();
  const categoryData = await getCategoryContents();
  const categoryArray = categoryData.map((x) => x.categoryItem);

  // const itemsCategory = data.map((x) => x.treatmentCategory);
  // const itemsCategoryFix = Array.from(new Set(itemsCategory));
  const itemsArray = categoryArray
    .map((categoryName) =>
      data.filter((x) => x.treatmentCategory === categoryName)
    )
    .filter((x) => x.length != 0);

  return (
    <>
      <main>
        <Header pageId="case" />
        <div className={cssStyle.section}>
          <div className={cssStyle.inner}>
            <Title text={metaCase.title} />
            <CategoryContents itemsArray={itemsArray} />
          </div>
        </div>
        <Footer pageId="case" />
        <FooterButton pageId="case" />
      </main>
    </>
  );
}
