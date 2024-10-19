import type { Metadata } from "next";
import { Suspense } from "react";
import { TermsContents } from "./contents";
import { Footer } from "@/app/_component/Footer";
import { FooterButton } from "@/app/_component/FooterButton";
import { Header } from "@/app/_component/Header";
import { metaTerms } from "@/app/_const/menu";
import { jsonLdBase, metaText, ogpCommon } from "@/app/_const/meta";
import { client } from "@/app/_libs/client";
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
  alternates: {
    canonical: `${metaTerms.link}`,
  },
  openGraph: {
    title: `${metaTerms.title} | ${metaText.title}`,
    description: `${metaTerms.title} ${metaText.description}`,
    url: `${metaTerms.link}`,
    ...ogpCommon,
  },
};

const jsonLdItems = [
  {
    "@type": "ListItem",
    item: `${metaText.canonical}${metaTerms.link}`,
    name: `${metaTerms.title}`,
    position: 2,
  },
];

const jsonLd = JSON.stringify({
  ...jsonLdBase,
  ...{ itemListElement: [...jsonLdBase.itemListElement, ...jsonLdItems] },
});

export default async function Terms() {
  const data = await getContents();

  return (
    <>
      <Suspense>
        <Header pageId="contact" />
      </Suspense>
      <main>
        <TermsContents data={data} />
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
