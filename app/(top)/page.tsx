import type { Metadata } from "next";
import { Suspense } from "react";
import { About } from "@/app/(top)/_component/About";
import { Case } from "@/app/(top)/_component/Case";
import { Mv } from "@/app/(top)/_component/Mv";
import { Reserve } from "@/app/(top)/_component/Reserve";
import { Footer } from "@/app/_component/Footer";
import { FooterButton } from "@/app/_component/FooterButton";
import { Header } from "@/app/_component/Header";
import { metaText, ogpCommon, jsonLdBase } from "@/app/_const/meta";

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

const jsonLd = JSON.stringify(jsonLdBase);

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
