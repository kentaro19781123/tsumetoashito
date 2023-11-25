import { cssStyle } from "./page.css";
import { Footer } from "@/component/Footer";
import { Header } from "@/component/Header";
import { About } from "@/component/Top/About";
import { Access } from "@/component/Top/Access";
import { ContactUs } from "@/component/Top/ContactUs";
import { Gallery } from "@/component/Top/Gallery";
import { Menu } from "@/component/Top/Menu";
import { Mv } from "@/component/Top/Mv";
import { News } from "@/component/Top/News";
import { Reserved } from "@/component/Top/Reserved";

export default function Home() {
  return (
    <>
      <main>
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
