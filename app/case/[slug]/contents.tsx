// Tailwind CSSリファクタ: vanilla-extract参照を削除
import { ButtonBorder } from "@/app/_component/ButtonBorder";
import { Title } from "@/app/_component/Title";
import { metaCase } from "@/app/_const/menu";
import { treatmentContentsType } from "@/types";

type Props = {
  data: treatmentContentsType;
};

// ページ
export const CaseContents: React.FC<Props> = ({ data }) => {
  return (
    <>
      <main>
        <div className="pt-[60px] pb-0 md:pt-[74px] md:pb-0">
          <div className="w-full max-w-full mx-auto p-4 md:w-[1000px] md:max-w-[1000px]">
            <Title text={metaCase.title} />
            <Title Tag="h2" level={2} text={data.treatmentTitle} />
            <div className="flex justify-center items-center my-8">
              <img
                alt={data.treatmentTitle}
                className="w-full max-w-md h-auto rounded-lg shadow-md"
                src={data.treatmentPhoto.url}
              />
            </div>
            <div
              className="richEditor"
              dangerouslySetInnerHTML={{
                __html: data.treatmentText,
              }}
            ></div>

            <div className="flex justify-center mt-8">
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
