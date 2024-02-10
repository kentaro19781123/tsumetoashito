// import { cssStyle } from "./page.css";
import { Footer } from "@/component/Footer";
import { FooterButton } from "@/component/FooterButton";
import { Header } from "@/component/Header";
import { About } from "@/component/Top/About";
// import { ContactUs } from "@/component/Top/ContactUs";
import { Case } from "@/component/Top/Case";
// import { Menu } from "@/component/Top/Menu";
import { Mv } from "@/component/Top/Mv";
import { Reserve } from "@/component/Top/Reserve";
// import { News } from "@/component/Top/News";
// import { Reserve } from "@/component/Top/Reserved";
// import { ShopInfo } from "@/component/Top/ShopInfo";

export default function Home() {
  return (
    <>
      <main>
        <Header pageId="top" />
        <Mv />
        {/* <News /> */}
        <About />
        <Case />
        <Reserve />
        {/* <div className={cssStyle.menuWrap}>
          <Menu />
          <ShopInfo />
          <Reserve />
          <ContactUs />
        </div> */}
        <Footer pageId="top" />
        <FooterButton pageId="top" />
      </main>
    </>
  );
}
