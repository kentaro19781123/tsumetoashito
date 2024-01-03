import { Metadata } from "next";
import { cssStyle } from "./page.css";
import { Footer } from "@/component/Footer";
import { Header } from "@/component/Header";
import { ButtonBorder } from "@/component/common/ButtonBorder";
import { Title } from "@/component/common/Title";
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
    title: data.treatmentTitle,
    description: data.treatmentText,
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
  return (
    <>
      <main>
        <Header pageId="case" />
        <div className={cssStyle.section}>
          <div className={cssStyle.inner}>
            <Title text={data.treatmentTitle} />
            <div className={cssStyle.photoWrap}>
              <img
                src={data.treatmentPhoto.url}
                alt={data.treatmentTitle}
                className={cssStyle.photo}
              />
            </div>
            <div
              className={cssStyle.text}
              dangerouslySetInnerHTML={{
                __html: data.treatmentText,
              }}
            ></div>

            <div className={cssStyle.buttonWrap}>
              <ButtonBorder buttonText="一覧へ戻る" url="../" />
            </div>
          </div>
        </div>
        <Footer pageId="case" />
      </main>
    </>
  );
}
