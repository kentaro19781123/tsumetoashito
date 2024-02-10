import { cssStyle } from "./reserve.css";
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

export const Reserve: React.FC = async () => {
  const { title, contentBlock } = await getContents();

  return (
    <section className={cssStyle.section}>
      <Title text={title} />
      <div className={cssStyle.inner}>
        <div
          className="richEditor"
          dangerouslySetInnerHTML={{
            __html: contentBlock[0].text,
          }}
        />
        <div className={cssStyle.buttonWrap}>
          {contentBlock[0].button.map((item) => (
            <div className={cssStyle.button} key={item.text}>
              <div className={cssStyle.buttonText}>
                <div
                  className="richEditor"
                  dangerouslySetInnerHTML={{
                    __html: item.text,
                  }}
                />
              </div>
              <div className={cssStyle.buttonLink}>
                <a href={item.link}>
                  <img
                    alt={item.type[0]}
                    src={`/img/${item.type[0]}_btn.png`}
                    width="110"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
