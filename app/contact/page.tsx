import type { Metadata } from "next";
import { Suspense } from "react";
// vanilla-extractからTailwind CSSへ移行
import { Footer } from "@/app/_component/Footer";
import { FooterButton } from "@/app/_component/FooterButton";
import { Header } from "@/app/_component/Header";
import { Title } from "@/app/_component/Title";
import { metaContact } from "@/app/_const/menu";
import { jsonLdBase, metaText, ogpCommon } from "@/app/_const/meta";

export const metadata: Metadata = {
  title: `${metaContact.title} | ${metaText.title}`,
  description: `${metaContact.title} ${metaText.description}`,
  alternates: {
    canonical: `${metaContact.link}`,
  },
  openGraph: {
    title: `${metaContact.title} | ${metaText.title}`,
    description: `${metaContact.title} ${metaText.description}`,
    url: `${metaContact.link}`,
    ...ogpCommon,
  },
};

const jsonLdItems = [
  {
    "@type": "ListItem",
    item: `${metaText.canonical}${metaContact.link}`,
    name: `${metaContact.title}`,
    position: 2,
  },
];

const jsonLd = JSON.stringify({
  ...jsonLdBase,
  ...{ itemListElement: [...jsonLdBase.itemListElement, ...jsonLdItems] },
});

export default async function Contact() {
  const form = `<iframe frameborder="no" src="https://docs.google.com/forms/d/e/1FAIpQLSe6M4-yh5SU6llauWtTiHbnR_iPMTUFBSqda5YCzpz7q6vmQg/viewform?embedded=true" width="640" height="2400" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>`;
  return (
    <>
      <Suspense>
        <Header pageId="contact" />
      </Suspense>
      <main>
        <div className="py-6 md:py-12" id="contact">
          <div className="px-4 md:px-8">
            <Title text="お問合せ" />

            <div
              className="text-center [&>iframe]:w-full mb-6"
              dangerouslySetInnerHTML={{
                __html: form,
              }}
            />
          </div>
        </div>
      </main>
      <Suspense>
        <Footer pageId="contact" />
      </Suspense>
      <FooterButton pageId="contact" />
      <script
        dangerouslySetInnerHTML={{
          __html: jsonLd,
        }}
        type="application/ld+json"
      ></script>
    </>
  );
}
