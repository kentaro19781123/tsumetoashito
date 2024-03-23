import { cssStyle } from "./reserve.css";
import { ReserveLine } from "@/component/common/ReserveButton/ReserveLine";
import { ReserveMail } from "@/component/common/ReserveButton/ReserveMail";
import { Title } from "@/component/common/Title";
import { reserveContentType } from "@/types";

type Props = {
  contentBlock: reserveContentType[];
  title: string;
};

export const ReserveContents: React.FC<Props> = ({ title, contentBlock }) => {
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
