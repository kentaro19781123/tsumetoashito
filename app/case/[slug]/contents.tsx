import { ButtonBorder } from "@/app/_component/ButtonBorder";
import { Title } from "@/app/_component/Title";
import { metaCase } from "@/app/_const/menu";
import type { treatmentContentsType } from "@/types";

type Props = {
  data: treatmentContentsType;
};

// ページ
export const CaseContents: React.FC<Props> = ({ data }) => {
  return (
    <main>
      <div className="pt-[60px] pb-0 md:pt-[74px] md:pb-0">
        <div className="w-full max-w-full mx-auto p-4 md:w-[1000px] md:max-w-[1000px]">
          <Title text={metaCase.title} />
          <Title Tag="h2" level={2} text={data.treatmentTitle} />
          {data.treatmentImages?.length > 0 && (
            <div className="my-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              {data.treatmentImages.map((photo, index) => (
                <img
                  alt={`${data.treatmentTitle} ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-md"
                  height={photo.height}
                  key={photo.url}
                  src={photo.url}
                  width={photo.width}
                />
              ))}
            </div>
          )}
          <div
            className="richEditor"
            dangerouslySetInnerHTML={{
              __html: data.treatmentText,
            }}
          ></div>

          <div className="flex justify-center mt-20">
            <ButtonBorder
              buttonText="一覧へ戻る"
              url={`../?pageId=${data.treatmentCategory}`}
            />
          </div>
        </div>
      </div>
    </main>
  );
};
