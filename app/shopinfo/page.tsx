import { cssStyle } from "./page.css";
import { Footer } from "@/component/Footer";
import { FooterButton } from "@/component/FooterButton";
import { Header } from "@/component/Header";
import { Title } from "@/component/common/Title";
import { client } from "@/libs/client";
import { shopInfoType } from "@/types";

const getContents = async () => {
  const response = await client.get<shopInfoType>({
    endpoint: "shopinfo",
    contentId: "6aabm9kpl1",
  });
  return response;
};

export default async function ShopInfo() {
  const { title, contentBlock } = await getContents();
  const zoomMap = contentBlock[0].shopMapUrl.replace("4f13.1", "4f100");

  return (
    <>
      <main>
        <Header pageId="shopInfo" />
        <div className={cssStyle.section} id="shopInfo">
          <div className={cssStyle.inner}>
            <Title text={title} />
            <div
              className="richEditor"
              dangerouslySetInnerHTML={{
                __html: zoomMap,
              }}
            />
            <div className={cssStyle.shopInfo}>
              <div
                className={`richEditor ${cssStyle.mapText}`}
                dangerouslySetInnerHTML={{
                  __html: contentBlock[0].shopAddress,
                }}
              />
              {contentBlock[0].shopPhoto && (
                <div className={cssStyle.shopPhoto}>
                  <img
                    alt="店舗写真"
                    className={cssStyle.shopPhotoImage}
                    height="424"
                    src={contentBlock[0].shopPhoto.url}
                    width={contentBlock[0].shopPhoto.width}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <Footer pageId="shopinfo" />
        <FooterButton pageId="shopinfo" />
      </main>
    </>
  );
}
