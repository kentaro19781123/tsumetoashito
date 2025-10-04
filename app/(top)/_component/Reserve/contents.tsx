import { Inner } from "@/app/_component/Inner";
import { ReserveLine } from "@/app/_component/ReserveButton/ReserveLine";
import { ReserveMail } from "@/app/_component/ReserveButton/ReserveMail";
import { Title } from "@/app/_component/Title";
import { reserveContentType } from "@/types";

type Props = {
  contentBlock: reserveContentType[];
  title: string;
};

export const ReserveContents: React.FC<Props> = ({ title, contentBlock }) => {
  return (
    <section className="py-12">
      <Inner className="py-0">
        <Title text={title} />
        <div
          className="richEditor"
          dangerouslySetInnerHTML={{
            __html: contentBlock[0].text,
          }}
        />
        <div className="flex flex-col items-center justify-center mt-5 md:flex-row md:gap-[90px] md:py-6 md:pb-18">
          {contentBlock[0].button.map((item) => (
            <div className="flex flex-col items-center mb-4" key={item.text}>
              <div className="mb-2 md:mb-4">
                <div
                  className="richEditor"
                  dangerouslySetInnerHTML={{
                    __html: item.text,
                  }}
                />
              </div>
              <div className="w-[130px] md:w-[230px]">
                {item.type[0] === "line" ? <ReserveLine /> : <ReserveMail />}
              </div>
            </div>
          ))}
        </div>
      </Inner>
    </section>
  );
};
