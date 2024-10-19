import type { Metadata } from "next";
import { Suspense } from "react";
import MenuContents from "./contents";
import { Footer } from "@/app/_component/Footer";
import { FooterButton } from "@/app/_component/FooterButton";
import { Header } from "@/app/_component/Header";
import { metaMenu } from "@/app/_const/menu";
import { metaText, ogpCommon } from "@/app/_const/meta";
import { client } from "@/app/_libs/client";
import { menuType } from "@/types";

const getContents = async () => {
  const response = await client.get<menuType>({
    endpoint: "menu",
  });
  return response.contents;
};

export const metadata: Metadata = {
  title: `${metaMenu.title} | ${metaText.title}`,
  description: `${metaMenu.title} ${metaText.description}`,
  alternates: {
    canonical: `${metaMenu.link}`,
  },
  openGraph: {
    title: `${metaMenu.title} | ${metaText.title}`,
    description: `${metaMenu.title} ${metaText.description}`,
    url: `${metaMenu.link}`,
    ...ogpCommon,
  },
};

export default async function Menu() {
  const data = await getContents();

  return (
    <>
      <Suspense>
        <Header pageId="menu" />
      </Suspense>
      <MenuContents data={data} />
      <Suspense>
        <Footer pageId="menu" />
      </Suspense>
      <FooterButton pageId="menu" />
    </>
  );
}
