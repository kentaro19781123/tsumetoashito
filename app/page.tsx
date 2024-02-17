import type { Metadata } from "next";
import { Suspense } from "react";
import { Footer } from "@/component/Footer";
import { FooterButton } from "@/component/FooterButton";
import { Header } from "@/component/Header";
import { About } from "@/component/Top/About";
import { Case } from "@/component/Top/Case";
import { Mv } from "@/component/Top/Mv";
import { Reserve } from "@/component/Top/Reserve";
import { metaText, ogpCommon } from "@/const/meta";

export const metadata: Metadata = {
  title: metaText.title,
  description: metaText.description,
  openGraph: {
    title: metaText.title,
    description: metaText.description,
    url: "/",
    ...ogpCommon,
  },
};

const jsonLd = `{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "item": "${metaText.canonical}",
      "name": "${metaText.title}",
      "position": 1
    },
  ]
}`;

export default function Home() {
  return (
    <>
      <Suspense>
        <Header pageId="top" />
      </Suspense>
      <main>
        <Mv />
        <About />
        <Case />
        <Reserve />
      </main>
      <Suspense>
        <Footer pageId="top" />
      </Suspense>
      <FooterButton pageId="top" />
      <script
        dangerouslySetInnerHTML={{
          __html: jsonLd,
        }}
        type="application/ld+json"
      ></script>
    </>
  );
}
