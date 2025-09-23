import { Metadata } from "next";
import { Suspense } from "react";
// Tailwind CSSリファクタ: vanilla-extract参照を削除
import { ButtonBorder } from "@/app/_component/ButtonBorder";
import { Footer } from "@/app/_component/Footer";
import { FooterButton } from "@/app/_component/FooterButton";
import { Header } from "@/app/_component/Header";
import { Title } from "@/app/_component/Title";
import { metaCase } from "@/app/_const/menu";
import { jsonLdBase, metaText, ogpCommon } from "@/app/_const/meta";
import { client } from "@/app/_libs/client";
import { treatmentContentsType, treatmentType } from "@/types";
import { Section } from "@/app/_component/Section";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

// metaタグ生成
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = await getCategoryContents(slug);
  return {
    title: `${data.treatmentTitle} | ${metaText.title}`,
    description: `${data.treatmentTitle}${metaText.description}`,
    alternates: {
      canonical: `${metaCase.link}${data.id}/`,
    },
    openGraph: {
      title: `${data.treatmentTitle} | ${metaText.title}`,
      description: `${data.treatmentTitle}${metaText.description}`,
      url: `${metaCase.link}${data.id}/`,
      ...ogpCommon,
    },
  };
}

// microCMSから施術例のデータ取得
const getContents = async () => {
  const response = await client.get<treatmentType>({
    endpoint: "treatment",
  });
  return response.contents;
};

// microCMSから個別の施術例のデータ取得
const getCategoryContents = async (slug: string) => {
  const response = await client.get<treatmentContentsType>({
    endpoint: "treatment",
    contentId: slug,
  });
  return response;
};

// 動的ページ生成用のパス作成
export async function generateStaticParams() {
  const data = await getContents();
  return data.map((item) => ({
    slug: item.id,
  }));
}

// ページ
export default async function Page({ params }: Props) {
  const { slug } = await params;

  // APIにコンテンツID（slug）を渡してデータ取得
  const data = await getCategoryContents(slug);

  const jsonLdItems = [
    {
      "@type": "ListItem",
      item: `${metaText.canonical}${metaCase.link}`,
      name: `${metaCase.title}`,
      position: 2,
    },
    {
      "@type": "ListItem",
      item: `${metaText.canonical}${metaCase.link}${data.id}`,
      name: `${data.treatmentTitle}`,
      position: 3,
    },
  ];

  const jsonLd = JSON.stringify({
    ...jsonLdBase,
    ...{ itemListElement: [...jsonLdBase.itemListElement, ...jsonLdItems] },
  });

  return (
    <>
      <Suspense>
        <Header pageId="case" />
      </Suspense>
      <main>
        <Section>
          <div className="w-full max-w-full mx-auto p-4 md:w-[1000px] md:max-w-[1000px]">
            <Title text={metaCase.title} />
            <Title Tag="h2" level={2} text={data.treatmentTitle} />
            <div className="mb-4 md:max-w-[500px] w-full">
              <img
                alt={data.treatmentTitle}
                className="w-full"
                src={data.treatmentPhoto.url}
              />
            </div>
            <div
              className="richEditor"
              dangerouslySetInnerHTML={{
                __html: data.treatmentText,
              }}
            ></div>

            <div className="mt-20 w-[300px] mx-auto">
              <ButtonBorder
                buttonText="一覧へ戻る"
                url={`../?pageId=${data.treatmentCategory}`}
              />
            </div>
          </div>
        </Section>
      </main>
      <Suspense>
        <Footer pageId="case" />
      </Suspense>
      <FooterButton pageId="case" />
      <script
        dangerouslySetInnerHTML={{
          __html: jsonLd,
        }}
        type="application/ld+json"
      ></script>
    </>
  );
}
