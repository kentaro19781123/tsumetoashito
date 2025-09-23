// vanilla-extractからTailwind CSSへ移行
import { Inner } from "../_component/Inner";
import { Section } from "../_component/Section";
import { Title } from "@/app/_component/Title";
import { termsType } from "@/types";

type Props = {
  data: termsType;
};

export const TermsContents: React.FC<Props> = ({ data }) => {
  const { title, contentBlock } = data;

  return (
    <>
      <Section>
        <Inner>
          <Title text={title} />
          <div
            className="richEditor mb-6"
            dangerouslySetInnerHTML={{
              __html: contentBlock[0].text,
            }}
          />
        </Inner>
      </Section>
    </>
  );
};
