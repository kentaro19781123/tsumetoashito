import type { Metadata } from "next";
import { Suspense } from "react";
import { cssStyle } from "./page.css";
import { Footer } from "@/component/Footer";
import { FooterButton } from "@/component/FooterButton";
import { Header } from "@/component/Header";
import { Title } from "@/component/common/Title";
import { metaTerms } from "@/const/menu";
import { metaText, ogpCommon } from "@/const/meta";
import { client } from "@/libs/client";
import { termsType } from "@/types";

const getContents = async () => {
  const response = await client.get<termsType>({
    endpoint: "shopinfo",
    contentId: "4ssadc3g4",
  });
  return response;
};

export const metadata: Metadata = {
  title: `${metaTerms.title} | ${metaText.title}`,
  description: `${metaTerms.title} ${metaText.description}`,
  openGraph: {
    title: `${metaTerms.title} | ${metaText.title}`,
    description: `${metaTerms.title} ${metaText.description}`,
    url: `${metaTerms.link}`,
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
      "item": "${metaText.canonical}${metaTerms.link}",
      "name": "${metaTerms.title}",
      "position": 2
    }
  ]
}`;

export default async function Terms() {
  const { title, contentBlock } = await getContents();

  return (
    <>
      <Suspense>
        <Header pageId="contact" />
      </Suspense>
      <main>
        <div className={cssStyle.section}>
          <div className={cssStyle.inner}>
            <Title text={title} />
            <div
              className={`richEditor ${cssStyle.textWrap}`}
              dangerouslySetInnerHTML={{
                __html: contentBlock[0].text,
              }}
            />
          </div>
        </div>
      </main>
      <Suspense>
        <Footer pageId="terms" />
      </Suspense>
      <FooterButton pageId="terms" />
      <script
        dangerouslySetInnerHTML={{
          __html: jsonLd,
        }}
        type="application/ld+json"
      ></script>
    </>
  );
}
