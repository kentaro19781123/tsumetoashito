import { cssStyle } from "./page.css";
import { Title } from "@/component/common/Title";
import { metaMenu } from "@/const/menu";
import { jsonLdBase, metaText } from "@/const/meta";
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
        <div className={cssStyle.section}>
          <div className={cssStyle.inner}>
            <Title text={metaMenu.title} />
            {data.map((x) => (
              <section className={cssStyle.menuItem} key={x.title}>
                <div className={cssStyle.titleArea}>
                  <h2 className={cssStyle.titleWrap}>
                    <span className={cssStyle.titleCircle}>●</span>
                    <span
                      className={cssStyle.title}
                      dangerouslySetInnerHTML={{
                        __html: rubyReplace(x.title),
                      }}
                    />
                  </h2>
                  <div className={cssStyle.priceArea}>
                    {x.caption && (
                      <p className={cssStyle.priceCaution}>{x.caption}</p>
                    )}
                    <p className={cssStyle.price}>{x.price}</p>
                  </div>
                </div>
                <div className={cssStyle.contentArea}>
                  <div
                    className={`${cssStyle.contentText} richEditor`}
                    dangerouslySetInnerHTML={{
                      __html: x.text,
                    }}
                  />
                  <div className={cssStyle.imageAreaWrap}>
                    {x.photo && (
                      <div className={cssStyle.imageArea}>
                        <img
                          alt={x.title}
                          className={cssStyle.menuImage}
                          height="424"
                          src={x.photo.url}
                          width={x.photo.width}
                        />
                      </div>
                    )}
                    {x.photoCaption && (
                      <div
                        className={`${cssStyle.photoCaption} richEditor`}
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
