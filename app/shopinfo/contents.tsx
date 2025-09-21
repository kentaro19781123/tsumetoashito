// Tailwind CSSリファクタ: vanilla-extract参照を削除
import { Title } from "@/app/_component/Title";
import { shopInfoType } from "@/types";

type Props = {
  data: shopInfoType;
};

export const ShopInfoContents: React.FC<Props> = ({ data }) => {
  const { title, contentBlock } = data;
  const zoomMap = contentBlock[0].shopMapUrl.replace("4f13.1", "4f100");

  return (
    <>
      <div className="pt-[60px] pb-0 md:pt-[74px] md:pb-0" id="shopInfo">
        <div className="w-full max-w-full mx-auto p-4 md:w-[1000px] md:max-w-[1000px]">
          <Title text={title} />
          <div
            className="richEditor"
            dangerouslySetInnerHTML={{
              __html: zoomMap,
            }}
          />
          <div className="md:flex md:gap-8 mt-8">
            <div
              className="richEditor text-base md:w-1/2 md:pl-5"
              dangerouslySetInnerHTML={{
                __html: contentBlock[0].shopAddress,
              }}
            />
            {contentBlock[0].shopPhoto && (
              <div className="mt-4 md:mt-0 md:w-1/2">
                <img
                  alt="店舗写真"
                  className="w-full h-full mt-4 md:h-auto"
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
