// vanilla-extractからTailwind CSSへ移行
import { Title } from "@/app/_component/Title";
import { termsType } from "@/types";

type Props = {
  data: termsType;
};

export const TermsContents: React.FC<Props> = ({ data }) => {
  const { title, contentBlock } = data;

  return (
    <>
      <div className="py-6 md:py-12">
        <div className="px-4 md:px-8">
          <Title text={title} />
          <div
            className="richEditor mb-6"
            dangerouslySetInnerHTML={{
              __html: contentBlock[0].text,
            }}
          />
        </div>
      </div>
    </>
  );
};
