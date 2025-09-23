// Tailwind CSSリファクタ: vanilla-extract参照を削除
import { Title } from "@/app/_component/Title";
import { shopInfoType } from "@/types";
import { Section } from "../_component/Section";
import { Inner } from "../_component/Inner";

type Props = {
  data: shopInfoType;
};

export const ShopInfoContents: React.FC<Props> = ({ data }) => {
  const { title, contentBlock } = data;
  const zoomMap = contentBlock[0].shopMapUrl.replace("4f13.1", "4f100");

  return (
    <>
      <Section id="shopInfo">
        <Inner>
          <Title text={title} />
          <div
            className="richEditor"
            dangerouslySetInnerHTML={{
              __html: zoomMap,
            }}
          />
          <div className="md:flex md:gap-8 mt-4">
            <div
              className="richEditor text-base md:w-1/2"
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
        </Inner>
      </Section>
    </>
  );
};
