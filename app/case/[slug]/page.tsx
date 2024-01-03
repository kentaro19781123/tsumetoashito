import { Metadata } from "next";
import { cssStyle } from "../page.css";
import { Footer } from "@/component/Footer";
import { Header } from "@/component/Header";
import { client } from "@/libs/client";
import { treatmentContentsType, treatmentType } from "@/types";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const data = await getCategoryContents(slug);
  return {
    title: data.treatmentTitle,
    description: data.treatmentText,
  };
}

const getContents = async () => {
  const response = await client.get<treatmentType>({
    endpoint: "treatment",
  });
  return response.contents;
};

const getCategoryContents = async (slug: string) => {
  const response = await client.get<treatmentContentsType>({
    endpoint: "treatment",
    contentId: slug,
  });
  return response;
};

export async function generateStaticParams() {
  const data = await getContents();
  return data.map((item) => ({
    slug: item.id,
  }));
}
export default async function Page({ params }: Props) {
  const { slug } = params;

  const data = await getCategoryContents(slug);
  return (
    <>
      <main>
        <Header pageId="case" />
        <div className={cssStyle.section}>
          <div className={cssStyle.inner}>
            <div>{data.treatmentTitle}</div>
          </div>
        </div>
        <Footer pageId="case" />
      </main>
    </>
  );
}
