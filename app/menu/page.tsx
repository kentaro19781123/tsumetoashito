import Image from "next/image";
import { cssStyle } from "./page.css";
import { Footer } from "@/component/Footer";
import { Header } from "@/component/Header";
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
            {data.map((x) => (
              <section className={cssStyle.menuItem} key={x.title}>
                <div className={cssStyle.titleArea}>
                  <h2
                    className={cssStyle.title}
                    dangerouslySetInnerHTML={{
                      __html: rubyReplace(x.title),
                    }}
                  />
                  <div className={cssStyle.priceArea}>
                    {x.caption && (
                      <p className={cssStyle.priceCaution}>{x.caption}</p>
                    )}
                    <p className={cssStyle.price}>{x.price}</p>
                  </div>
                </div>
                <div
                  className={`${cssStyle.contentArea} richEditor`}
                  dangerouslySetInnerHTML={{
                    __html: x.text,
                  }}
                />
                {x.photo && (
                  <div className={cssStyle.imageArea}>
                    {x.photoTitle && (
                      <h3 className={cssStyle.title}>{x.photoTitle}</h3>
                    )}
                    <Image
                      src="/img/flow.jpg"
                      alt="ケアの流れ"
                      width="852"
                      height="424"
                      className={cssStyle.menuImage}
                    />
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
