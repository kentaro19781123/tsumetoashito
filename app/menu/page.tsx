import type { Metadata } from "next";
import { Suspense } from "react";
import { cssStyle } from "./page.css";
import { Footer } from "@/component/Footer";
import { FooterButton } from "@/component/FooterButton";
import { Header } from "@/component/Header";
import { Title } from "@/component/common/Title";
import { metaMenu } from "@/const/menu";
import { metaText } from "@/const/meta";
import { client } from "@/libs/client";
import { menuType } from "@/types";

const getContents = async () => {
  const response = await client.get<menuType>({
    endpoint: "menu",
  });
  return response.contents;
};

export const metadata: Metadata = {
  title: `${metaMenu.title} | ${metaText.title}`,
  description: `${metaMenu.title} ${metaText.description}`,
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
      return `${text}`;
    }
  };
  return (
    <>
      <Suspense>
        <Header pageId="menu" />
      </Suspense>
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
      <Suspense>
        <Footer pageId="menu" />
      </Suspense>
      <FooterButton pageId="menu" />
    </>
  );
}
