import { cssStyle } from "./reserve.css";
import { ReserveLine } from "@/component/common/ReserveButton/ReserveLine";
import { ReserveMail } from "@/component/common/ReserveButton/ReserveMail";
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
      <div className={cssStyle.inner}>
        <Title text={title} />
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
                {item.type[0] === "line" ? <ReserveLine /> : <ReserveMail />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
