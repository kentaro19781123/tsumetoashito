import { cssStyle } from "./page.css";
import { ButtonBorder } from "@/component/common/ButtonBorder";
import { Title } from "@/component/common/Title";
import { metaCase } from "@/const/menu";
import { treatmentContentsType } from "@/types";

type Props = {
  data: treatmentContentsType;
};

// ページ
export const CaseContents: React.FC<Props> = ({ data }) => {
  return (
    <>
      <main>
        <div className={cssStyle.section}>
          <div className={cssStyle.inner}>
            <Title text={metaCase.title} />
            <Title Tag="h2" level={2} text={data.treatmentTitle} />
            <div className={cssStyle.photoWrap}>
              <img
                alt={data.treatmentTitle}
                className={cssStyle.photo}
                src={data.treatmentPhoto.url}
              />
            </div>
            <div
              className="richEditor"
              dangerouslySetInnerHTML={{
                __html: data.treatmentText,
              }}
            ></div>

            <div className={cssStyle.buttonWrap}>
              <ButtonBorder
                buttonText="一覧へ戻る"
                url={`../?pageId=${data.treatmentCategory}`}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
