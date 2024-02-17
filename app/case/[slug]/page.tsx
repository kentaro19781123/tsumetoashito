import { Metadata } from "next";
import { Suspense } from "react";
import { cssStyle } from "./page.css";
import { Footer } from "@/component/Footer";
import { FooterButton } from "@/component/FooterButton";
import { Header } from "@/component/Header";
import { ButtonBorder } from "@/component/common/ButtonBorder";
import { Title } from "@/component/common/Title";
import { metaCase } from "@/const/menu";
import { jsonLdBase, metaText, ogpCommon } from "@/const/meta";
import { client } from "@/libs/client";
import { treatmentContentsType, treatmentType } from "@/types";

type Props = {
  params: {
    slug: string;
  };
};

// metaタグ生成
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const data = await getCategoryContents(slug);
  return {
    title: `${data.treatmentTitle} | ${metaText.title}`,
    description: `${data.treatmentTitle}${metaText.description}`,
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
  const { slug } = params;

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
        <div className={cssStyle.section}>
          <div className={cssStyle.inner}>
            <Title text={metaCase.title} />
            <Title Tag="h2" level={2} text={data.treatmentTitle} />
            <div className={cssStyle.photoWrap}>
              <img
                alt={data.treatmentTitle}
                className={cssStyle.photo}
                src={data.treatmentPhoto.url}
              />
            </div>
            <div
              className="richEditor"
              dangerouslySetInnerHTML={{
                __html: data.treatmentText,
              }}
            ></div>

            <div className={cssStyle.buttonWrap}>
              <ButtonBorder
                buttonText="一覧へ戻る"
                url={`../?pageId=${data.treatmentCategory}`}
              />
            </div>
          </div>
        </div>
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
