import type { Metadata } from "next";
import { Suspense } from "react";
import { Footer } from "@/component/Footer";
import { FooterButton } from "@/component/FooterButton";
import { Header } from "@/component/Header";
import { About } from "@/component/Top/About";
import { Case } from "@/component/Top/Case";
import { Mv } from "@/component/Top/Mv";
import { Reserve } from "@/component/Top/Reserve";
import { metaText } from "@/const/meta";

export const metadata: Metadata = {
  title: metaText.title,
  description: metaText.description,
};

export default function Home() {
  return (
    <>
      <main>
        <Suspense>
          <Header pageId="top" />
        </Suspense>
        <Mv />
        <About />
        <Case />
        <Reserve />
        <Footer pageId="top" />
        <FooterButton pageId="top" />
      </main>
    </>
  );
}
