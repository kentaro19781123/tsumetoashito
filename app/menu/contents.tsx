// Tailwind CSSリファクタ: vanilla-extract参照を削除
import { Title } from "@/app/_component/Title";
import { metaMenu } from "@/app/_const/menu";
import { jsonLdBase, metaText } from "@/app/_const/meta";
import { menuType } from "@/types";

type Props = {
  data: menuType["contents"];
};

export default async function MenuContents({ data }: Props) {
  const rubyReplace = (text: string) => {
    const regex = /\[*\]/g;
    if (regex.test(text)) {
      const rtText = text
        .replace("[", "<rt className={cssStyle.titleRuby}>")
        .replace("]", "</rt>");
      return `<ruby>${rtText}</ruby>`;
    } else {
      return `${text}`;
    }
  };

  const jsonLdItems = [
    {
      "@type": "ListItem",
      item: `${metaText.canonical}${metaMenu.link}`,
      name: `${metaMenu.title}`,
      position: 2,
    },
  ];

  const jsonLd = JSON.stringify({
    ...jsonLdBase,
    ...{ itemListElement: [...jsonLdBase.itemListElement, ...jsonLdItems] },
  });
  return (
    <>
      <main>
        <div className="pt-[60px] pb-0 md:pt-[74px] md:pb-0">
          <div className="w-full max-w-full mx-auto p-4 md:w-[1000px] md:max-w-[1000px]">
            <Title text={metaMenu.title} />
            {data.map((x) => (
              <section
                className="border-b border-gray-300 pb-8 mb-8 last:mb-0 last:border-b-0"
                key={x.title}
              >
                <div className="md:flex md:justify-between">
                  <h2 className="flex items-center">
                    <span className="inline-block text-[#e46ca3] text-[16px] flex-shrink-0 w-5">
                      ●
                    </span>
                    <span
                      className="text-[20px]"
                      dangerouslySetInnerHTML={{
                        __html: rubyReplace(x.title),
                      }}
                    />
                  </h2>
                  <div className="mt-2 text-right md:mt-0">
                    {x.caption && (
                      <p className="text-[12px] mb-2">{x.caption}</p>
                    )}
                    <p className="text-[18px] font-bold">{x.price}</p>
                  </div>
                </div>
                <div className="md:flex md:gap-4">
                  <div
                    className="mt-3 leading-[1.5] md:w-1/2 md:pl-5 richEditor"
                    dangerouslySetInnerHTML={{
                      __html: x.text,
                    }}
                  />
                  <div className="md:w-1/2">
                    {x.photo && (
                      <div className="mt-4 md:mt-0">
                        <img
                          alt={x.title}
                          className="w-full h-full mt-4 md:h-auto"
                          height="424"
                          src={x.photo.url}
                          width={x.photo.width}
                        />
                      </div>
                    )}
                    {x.photoCaption && (
                      <div
                        className="mt-4 md:mt-2 md:text-[14px] richEditor"
                        dangerouslySetInnerHTML={{
                          __html: x.photoCaption,
                        }}
                      />
                    )}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <script
        dangerouslySetInnerHTML={{
          __html: jsonLd,
        }}
        type="application/ld+json"
      ></script>
    </>
  );
}
