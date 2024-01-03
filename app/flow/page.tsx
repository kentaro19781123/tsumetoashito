import { cssStyle } from "./page.css";
import { Footer } from "@/component/Footer";
import { Header } from "@/component/Header";
import { Title } from "@/component/common/Title";
import { client } from "@/libs/client";
import { reserveType } from "@/types";

const getContents = async () => {
  const response = await client.get<reserveType>({
    endpoint: "shopinfo",
    contentId: "rheo-e4tj7m1",
  });
  return response;
};

export default async function Flow() {
  const { title, contentBlock } = await getContents();
  return (
    <>
      <main>
        <Header pageId="flow" />
        <div className={cssStyle.section} id="flow">
          <div className={cssStyle.inner}>
            <Title text={title} />
            <div
              className="richEditor"
              dangerouslySetInnerHTML={{
                __html: contentBlock[0].calendar,
              }}
            />
          </div>
        </div>
        <Footer pageId="flow" />
      </main>
    </>
  );
}
