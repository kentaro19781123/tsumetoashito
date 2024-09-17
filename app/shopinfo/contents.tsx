import { cssStyle } from "./page.css";
import { Title } from "@/component/Title";
import { shopInfoType } from "@/types";

type Props = {
  data: shopInfoType;
};

export const ShopInfoContents: React.FC<Props> = ({ data }) => {
  const { title, contentBlock } = data;
  const zoomMap = contentBlock[0].shopMapUrl.replace("4f13.1", "4f100");

  return (
    <>
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
    </>
  );
};
