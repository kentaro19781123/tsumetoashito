import { Suspense } from "react";
import { cssStyle } from "./page.css";
import { Footer } from "@/component/Footer";
import { FooterButton } from "@/component/FooterButton";
import { Header } from "@/component/Header";
import { Title } from "@/component/common/Title";

export default async function Contact() {
  return (
    <>
      <main>
        <Suspense>
          <Header pageId="contact" />
        </Suspense>
        <div className={cssStyle.section} id="contact">
          <div className={cssStyle.inner}>
            <Title text="お問合せ" />
          </div>
        </div>
        <Footer pageId="contact" />
        <FooterButton pageId="contact" />
      </main>
    </>
  );
}
