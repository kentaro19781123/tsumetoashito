import Image from "next/image";
import { cssStyle } from "./page.css";
import { Footer } from "@/component/Footer";
import { Header } from "@/component/Header";
// import { Title } from "@/component/common/Title";
// import { About } from "@/component/Top/About";
// import { Access } from "@/component/Top/Access";
// import { ContactUs } from "@/component/Top/ContactUs";
// import { Gallery } from "@/component/Top/Gallery";
// import { Menu } from "@/component/Top/Menu";
// import { Mv } from "@/component/Top/Mv";
// import { News } from "@/component/Top/News";
// import { Reserved } from "@/component/Top/Reserved";

export default function Home() {
  return (
    <>
      <main>
        <Header pageId="menu" />
        <div className={cssStyle.section}>
          <div className={cssStyle.inner}>
            <section className={cssStyle.menuItem}>
              <div className={cssStyle.titleArea}>
                <h2 className={cssStyle.title}>
                  <ruby>
                    甲甲甲甲甲
                    <rt className={cssStyle.titleRuby}>
                      そうこうこうわんしょう
                    </rt>
                  </ruby>
                  ケアコース
                </h2>
                <div className={cssStyle.priceArea}>
                  <p className={cssStyle.priceCaution}>注釈注釈注釈</p>
                  <p className={cssStyle.price}>◯◯◯◯円 〜 ◯◯◯◯円</p>
                </div>
              </div>
              <div className={cssStyle.contentArea}>
                <p>あああああああああああああああああああああああ</p>
                <p>あああああああああああああああああああああああ</p>
                <p></p>
                <p>あああああああああああああああああああああああ</p>
              </div>
              <div className={cssStyle.imageArea}>
                <h3 className={cssStyle.title}>ケアの流れ</h3>
                <Image
                  src="/img/flow.jpg"
                  alt="ケアの流れ"
                  width="852"
                  height="424"
                  className={cssStyle.menuImage}
                />
              </div>
            </section>

            <section className={cssStyle.menuItem}>
              <div className={cssStyle.titleArea}>
                <h2 className={cssStyle.title}>
                  <ruby>
                    甲甲甲甲甲
                    <rt className={cssStyle.titleRuby}>
                      そうこうこうわんしょう
                    </rt>
                  </ruby>
                  ケアコース
                </h2>
                <div className={cssStyle.priceArea}>
                  <p className={cssStyle.priceCaution}>注釈注釈注釈</p>
                  <p className={cssStyle.price}>◯◯◯◯円 〜 ◯◯◯◯円</p>
                </div>
              </div>
              <div className={cssStyle.contentArea}>
                <p>あああああああああああああああああああああああ</p>
                <p>あああああああああああああああああああああああ</p>
                <p></p>
                <p>あああああああああああああああああああああああ</p>
              </div>
            </section>
            <section className={cssStyle.menuItem}>
              <div className={cssStyle.titleArea}>
                <h2 className={cssStyle.title}>
                  <ruby>甲甲甲甲甲</ruby>
                  ケアコース
                </h2>
                <div className={cssStyle.priceArea}>
                  <p className={cssStyle.priceCaution}>注釈注釈注釈</p>
                  <p className={cssStyle.price}>◯◯◯◯円 〜 ◯◯◯◯円</p>
                </div>
              </div>
              <div className={cssStyle.contentArea}>
                <p>あああああああああああああああああああああああ</p>
                <p>あああああああああああああああああああああああ</p>
                <p></p>
                <p>あああああああああああああああああああああああ</p>
              </div>
            </section>
            {/* <Title text="メニュー" /> */}
            {/* {newsList && (
          <ul className={cssStyle.newsUl}>
            {newsList.map((x) => (
              <li key={x.title} className={cssStyle.newsLi}>
                <div>{x.date}</div>
                <div>
                  <a href={x.link} className={cssStyle.newsA}>
                    {x.title}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )} */}
          </div>
        </div>
        {/* <Mv />
        <News /> */}
        {/* <About /> */}
        {/* <Gallery /> */}
        {/* <Menu /> */}
        {/* <Reserved /> */}
        {/* <Access /> */}
        {/* <ContactUs /> */}
        <Footer />
      </main>
    </>
  );
}
