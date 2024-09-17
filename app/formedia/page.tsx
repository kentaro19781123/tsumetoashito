import type { Metadata } from "next";
import { Suspense } from "react";
import { cssStyle } from "./contact.css";
import { Footer } from "@/component/Footer";
import { FooterButton } from "@/component/FooterButton";
import { Header } from "@/component/Header";
import { Title } from "@/component/Title";
import { metaForMedia } from "@/const/menu";
import { jsonLdBase, metaText, ogpCommon } from "@/const/meta";

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
  const form = `<iframe frameborder="no" src="https://docs.google.com/forms/d/e/1FAIpQLSerqz4ykWtyDzhWczEdWCvw--nqjnBGi_c77eO23KUOSkVLzQ/viewform?embedded=true" width="640" height="1000" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>`;
  return (
    <>
      <Suspense>
        <Header pageId="forMedia" />
      </Suspense>
      <main>
        <div className={cssStyle.section} id="forMedia">
          <div className={cssStyle.inner}>
            <Title text="お問合せ（メディア関係の方）" />

            <div
              className={cssStyle.formBox}
              dangerouslySetInnerHTML={{
                __html: form,
              }}
            />
          </div>
        </div>
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
