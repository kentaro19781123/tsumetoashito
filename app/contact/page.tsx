import type { Metadata } from "next";
import { Suspense } from "react";
import { cssStyle } from "./contact.css";
import { Footer } from "@/component/Footer";
import { FooterButton } from "@/component/FooterButton";
import { Header } from "@/component/Header";
import { Title } from "@/component/common/Title";
import { metaContact } from "@/const/menu";
import { jsonLdBase, metaText, ogpCommon } from "@/const/meta";

export const metadata: Metadata = {
  title: `${metaContact.title} | ${metaText.title}`,
  description: `${metaContact.title} ${metaText.description}`,
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
  const form = `<iframe scrolling="no" frameborder="no" src="https://docs.google.com/forms/d/e/1FAIpQLSe6M4-yh5SU6llauWtTiHbnR_iPMTUFBSqda5YCzpz7q6vmQg/viewform?embedded=true" width="640" height="2200" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>`;
  return (
    <>
      <Suspense>
        <Header pageId="contact" />
      </Suspense>
      <main>
        <div className={cssStyle.section} id="contact">
          <div className={cssStyle.inner}>
            <Title text="お問合せ" />

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
