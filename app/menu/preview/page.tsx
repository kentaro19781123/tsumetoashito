import type { Metadata } from "next";
import { Suspense } from "react";
import { MenuPreview } from "./preview";
import { metaMenu } from "@/app/_const/menu";
import { metaText, ogpCommon } from "@/app/_const/meta";

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
      <Suspense>
        <MenuPreview />
      </Suspense>
    </>
  );
}
