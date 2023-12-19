import { cssStyle } from "./page.css";
import { Footer } from "@/component/Footer";
import { Header } from "@/component/Header";
import { Title } from "@/component/common/Title";

export default async function Contact() {
  return (
    <>
      <main>
        <Header pageId="shopInfo" />
        <div className={cssStyle.section} id="shopInfo">
          <div className={cssStyle.inner}>
            <Title text="お問合せ" />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
