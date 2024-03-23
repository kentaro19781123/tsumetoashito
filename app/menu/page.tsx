import type { Metadata } from "next";
import { Suspense } from "react";
import MenuContents from "./contents";
import { Footer } from "@/component/Footer";
import { FooterButton } from "@/component/FooterButton";
import { Header } from "@/component/Header";
import { metaMenu } from "@/const/menu";
import { metaText, ogpCommon } from "@/const/meta";
import { client } from "@/libs/client";
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
