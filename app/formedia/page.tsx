import type { Metadata } from "next";
import { Suspense } from "react";
// Tailwind CSSへ移行のため、vanilla-extractのimportを削除
import { Footer } from "@/app/_component/Footer";
import { FooterButton } from "@/app/_component/FooterButton";
import { Header } from "@/app/_component/Header";
import { Title } from "@/app/_component/Title";
import { metaForMedia } from "@/app/_const/menu";
import { jsonLdBase, metaText, ogpCommon } from "@/app/_const/meta";
import { Section } from "../_component/Section";
import { Inner } from "../_component/Inner";

export const metadata: Metadata = {
  title: `${metaForMedia.title} | ${metaText.title}`,
  description: `${metaForMedia.title} ${metaText.description}`,
  alternates: {
    canonical: `${metaForMedia.link}`,
  },
  openGraph: {
    title: `${metaForMedia.title} | ${metaText.title}`,
    description: `${metaForMedia.title} ${metaText.description}`,
    url: `${metaForMedia.link}`,
    ...ogpCommon,
  },
};

const jsonLdItems = [
  {
    "@type": "ListItem",
    item: `${metaText.canonical}${metaForMedia.link}`,
    name: `${metaForMedia.title}`,
    position: 2,
  },
];

const jsonLd = JSON.stringify({
  ...jsonLdBase,
  ...{ itemListElement: [...jsonLdBase.itemListElement, ...jsonLdItems] },
});

export default async function ForMedia() {
  const form = `<iframe class='w-full' frameborder="no" src="https://docs.google.com/forms/d/e/1FAIpQLSerqz4ykWtyDzhWczEdWCvw--nqjnBGi_c77eO23KUOSkVLzQ/viewform?embedded=true" width="640" height="1000" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>`;
  return (
    <>
      <Suspense>
        <Header pageId="forMedia" />
      </Suspense>
      <main>
        <Section id="forMedia">
          <Inner className="max-w-3xl mx-auto p-4">
            <Title text="お問合せ（メディア関係の方）" />

            <div
              className="text-center"
              dangerouslySetInnerHTML={{
                __html: form,
              }}
            />
          </Inner>
        </Section>
      </main>
      <Suspense>
        <Footer pageId="forMedia" />
      </Suspense>
      <FooterButton pageId="forMedia" />
      <script
        dangerouslySetInnerHTML={{
          __html: jsonLd,
        }}
        type="application/ld+json"
      ></script>
    </>
  );
}
