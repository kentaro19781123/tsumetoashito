import type { Metadata } from "next";
import { Suspense } from "react";
import { cssStyle } from "./page.css";
import { Footer } from "@/component/Footer";
import { FooterButton } from "@/component/FooterButton";
import { Header } from "@/component/Header";
import { Title } from "@/component/common/Title";
import { metaContact } from "@/const/menu";
import { metaText, ogpCommon } from "@/const/meta";

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
    {
      "@type": "ListItem",
      "item": "${metaText.canonical}${metaContact.link}",
      "name": "${metaContact.title}",
      "position": 2
    }
  ]
}`;

export default async function Contact() {
  return (
    <>
      <Suspense>
        <Header pageId="contact" />
      </Suspense>
      <main>
        <div className={cssStyle.section} id="contact">
          <div className={cssStyle.inner}>
            <Title text="お問合せ" />
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
