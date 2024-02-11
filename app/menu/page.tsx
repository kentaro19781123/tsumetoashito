import { cssStyle } from "./page.css";
import { Footer } from "@/component/Footer";
import { FooterButton } from "@/component/FooterButton";
import { Header } from "@/component/Header";
import { Title } from "@/component/common/Title";
import { metaMenu } from "@/const/menu";
import { client } from "@/libs/client";
import { menuType } from "@/types";

const getContents = async () => {
  const response = await client.get<menuType>({
    endpoint: "menu",
  });
  return response.contents;
};

export default async function Menu() {
  const data = await getContents();
  const rubyReplace = (text: string) => {
    const regex = /\[*\]/g;
    if (regex.test(text)) {
      const rtText = text
        .replace("[", "<rt className={cssStyle.titleRuby}>")
        .replace("]", "</rt>");
      return `<ruby>${rtText}</ruby>`;
    } else {
      return `<span>${text}</span>`;
    }
  };
  return (
    <>
      <main>
        <Header pageId="menu" />
        <div className={cssStyle.section}>
          <div className={cssStyle.inner}>
            <Title text={metaMenu.title} />
            {data.map((x) => (
              <section className={cssStyle.menuItem} key={x.title}>
                <div className={cssStyle.titleArea}>
                  <div>
                    <h2
                      className={cssStyle.title}
                      dangerouslySetInnerHTML={{
                        __html: rubyReplace(x.title),
                      }}
                    />
                  </div>
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
                        {/* {x.photoTitle && (
                      <h3 className={cssStyle.title}>{x.photoTitle}</h3>
                    )} */}
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
        <Footer pageId="menu" />
        <FooterButton pageId="menu" />
      </main>
    </>
  );
}
