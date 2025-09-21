import type { Metadata } from "next";
import React, { Suspense } from "react";
import { CategoryContents } from "./categoryContents";
// Tailwind CSSリファクタ: vanilla-extract参照を削除
import { Footer } from "@/app/_component/Footer";
import { FooterButton } from "@/app/_component/FooterButton";
import { Header } from "@/app/_component/Header";
import { Title } from "@/app/_component/Title";
import { metaCase } from "@/app/_const/menu";
import { jsonLdBase, metaText, ogpCommon } from "@/app/_const/meta";
import { client } from "@/app/_libs/client";
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
  alternates: {
    canonical: `${metaCase.link}`,
  },
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
        <div className="pt-[60px] pb-0 md:pt-[74px] md:pb-0">
          <div className="w-full max-w-full mx-auto p-4 md:w-[1000px] md:max-w-[1000px]">
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
