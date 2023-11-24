import { cssStyle } from "./page.css";
import { Footer } from "@/app/_component/Footer";
import { Header } from "@/app/_component/Header";
import { About } from "@/app/_component/Top/About";
import { Access } from "@/app/_component/Top/Access";
import { ContactUs } from "@/app/_component/Top/ContactUs";
import { Gallery } from "@/app/_component/Top/Gallery";
import { Menu } from "@/app/_component/Top/Menu";
import { Mv } from "@/app/_component/Top/Mv";
import { News } from "@/app/_component/Top/News";
import { Reserved } from "@/app/_component/Top/Reserved";

export default function Home() {
  return (
    <>
      <main className={cssStyle.main}>
        <Header pageId="top" />
        <Mv />
        <News />
        <About />
        <Gallery />
        <Menu />
        <Reserved />
        <Access />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}
