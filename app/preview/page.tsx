import type { Metadata } from "next";
import { Suspense } from "react";
// import { Footer } from "@/component/Footer";
// import { FooterButton } from "@/component/FooterButton";
import { ShopInfoPreview } from "@/app/shopinfo/preview";
import { TermsPreview } from "@/app/terms/preview";
// import { Header } from "@/component/Header";
import { AboutPreview } from "@/component/Top/About/preview";
// import { Case } from "@/component/Top/Case";
// import { Mv } from "@/component/Top/Mv";
// import { Reserve } from "@/component/Top/Reserve";
import { CasePreview } from "@/component/Top/Case/preview";
import { ReservePreview } from "@/component/Top/Reserve/preview";
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

// const jsonLd = JSON.stringify(jsonLdBase);

export default function Home() {
  return (
    <>
      {/* <Suspense>
        <Header pageId="top" />
      </Suspense> */}
      <main>
        {/* <Mv /> */}
        <Suspense>
          <AboutPreview />
          <ReservePreview />
          <ShopInfoPreview />
          <TermsPreview />
          <CasePreview />
        </Suspense>
        {/* <Case /> */}
      </main>
      {/* <Suspense>
        <Footer pageId="top" />
      </Suspense> */}
      {/* <FooterButton pageId="top" /> */}
      {/* <script
        dangerouslySetInnerHTML={{
          __html: jsonLd,
        }}
        type="application/ld+json"
      ></script> */}
    </>
  );
}
