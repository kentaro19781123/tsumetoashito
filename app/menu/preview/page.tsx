import type { Metadata } from "next";
import { Suspense } from "react";
import { MenuPreview } from "./preview";
// import { Footer } from "@/component/Footer";
// import { FooterButton } from "@/component/FooterButton";
// import { Header } from "@/component/Header";
import { metaMenu } from "@/const/menu";
import { metaText, ogpCommon } from "@/const/meta";

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
  return (
    <>
      {/* <Suspense>
        <Header pageId="menu" />
      </Suspense> */}
      <Suspense>
        <MenuPreview />
      </Suspense>

      {/* <Suspense>
        <Footer pageId="menu" />
      </Suspense>
      <FooterButton pageId="menu" /> */}
    </>
  );
}
