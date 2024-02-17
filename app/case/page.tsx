import type { Metadata } from "next";
import React, { Suspense } from "react";
import { CategoryContents } from "./categoryContents";
import { cssStyle } from "./page.css";
import { Footer } from "@/component/Footer";
import { FooterButton } from "@/component/FooterButton";
import { Header } from "@/component/Header";
import { Title } from "@/component/common/Title";
import { metaCase } from "@/const/menu";
import { jsonLdBase, metaText, ogpCommon } from "@/const/meta";
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

export const metadata: Metadata = {
  title: `${metaCase.title} | ${metaText.title}`,
  description: `${metaCase.title} ${metaText.description}`,
  openGraph: {
    title: `${metaCase.title} | ${metaText.title}`,
    description: `${metaCase.title} ${metaText.description}`,
    url: `${metaCase.link}`,
    ...ogpCommon,
  },
};

const jsonLdItems = [
  {
    "@type": "ListItem",
    item: `${metaText.canonical}${metaCase.link}`,
    name: `${metaCase.title}`,
    position: 2,
  },
];

const jsonLd = JSON.stringify({
  ...jsonLdBase,
  ...{ itemListElement: [...jsonLdBase.itemListElement, ...jsonLdItems] },
});

export default async function GalleryList() {
  const data = await getContents();
  const categoryData = await getCategoryContents();
  const categoryArray = categoryData.map((x) => x.categoryItem);

  const itemsArray = categoryArray
    .map((categoryName) =>
      data.filter((x) => x.treatmentCategory === categoryName)
    )
    .filter((x) => x.length != 0);

  return (
    <>
      <Suspense>
        <Header pageId="case" />
      </Suspense>
      <main>
        <div className={cssStyle.section}>
          <div className={cssStyle.inner}>
            <Title text={metaCase.title} />
            <CategoryContents itemsArray={itemsArray} />
          </div>
        </div>
      </main>
      <Suspense>
        <Footer pageId="case" />
      </Suspense>
      <FooterButton pageId="case" />
      <script
        dangerouslySetInnerHTML={{
          __html: jsonLd,
        }}
        type="application/ld+json"
      ></script>
    </>
  );
}
