import type { Metadata } from "next";
import { Suspense } from "react";
import { ShopInfoContents } from "./contents";
import { Footer } from "@/app/_component/Footer";
import { FooterButton } from "@/app/_component/FooterButton";
import { Header } from "@/app/_component/Header";
import { metaShopInfo } from "@/app/_const/menu";
import { jsonLdBase, metaText, ogpCommon } from "@/app/_const/meta";
import { client } from "@/app/_libs/client";
import { shopInfoType } from "@/types";

const getContents = async () => {
  const response = await client.get<shopInfoType>({
    endpoint: "shopinfo",
    contentId: "6aabm9kpl1",
  });
  return response;
};

export const metadata: Metadata = {
  title: `${metaShopInfo.title} | ${metaText.title}`,
  description: `${metaShopInfo.title} ${metaText.description}`,
  alternates: {
    canonical: `${metaShopInfo.link}`,
  },
  openGraph: {
    title: `${metaShopInfo.title} | ${metaText.title}`,
    description: `${metaShopInfo.title} ${metaText.description}`,
    url: `${metaShopInfo.link}`,
    ...ogpCommon,
  },
};

const jsonLdItems = [
  {
    "@type": "ListItem",
    item: `${metaText.canonical}${metaShopInfo.link}`,
    name: `${metaShopInfo.title}`,
    position: 2,
  },
];

const jsonLd = JSON.stringify({
  ...jsonLdBase,
  ...{ itemListElement: [...jsonLdBase.itemListElement, ...jsonLdItems] },
});

export default async function ShopInfo() {
  const data = await getContents();

  return (
    <>
      <Suspense>
        <Header pageId="shopInfo" />
      </Suspense>
      <main>
        <ShopInfoContents data={data} />
      </main>
      <Suspense>
        <Footer pageId="shopinfo" />
      </Suspense>
      <FooterButton pageId="shopinfo" />
      <script
        dangerouslySetInnerHTML={{
          __html: jsonLd,
        }}
        type="application/ld+json"
      ></script>
    </>
  );
}
