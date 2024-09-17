import { cssStyle } from "./page.css";
import { Title } from "@/component/Title";
import { termsType } from "@/types";

type Props = {
  data: termsType;
};

export const TermsContents: React.FC<Props> = ({ data }) => {
  const { title, contentBlock } = data;

  return (
    <>
      <div className={cssStyle.section}>
        <div className={cssStyle.inner}>
          <Title text={title} />
          <div
            className={`richEditor ${cssStyle.textWrap}`}
            dangerouslySetInnerHTML={{
              __html: contentBlock[0].text,
            }}
          />
        </div>
      </div>
    </>
  );
};
