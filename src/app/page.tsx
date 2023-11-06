import { Gallery } from "./_component/Gallery";
import { ShopInfo } from "./_component/ShopInfo";
import { cssStyle } from "./page.css";
import { About } from "@/app/_component/About";
import { FlowCourse } from "@/app/_component/FlowCourse";
import { Header } from "@/app/_component/Header";
import { Mv } from "@/app/_component/Mv";
import { Reserved } from "@/app/_component/Reserved";

export default function Home() {
  return (
    <>
      <main className={cssStyle.main}>
        <Header />
        <Mv />
        <About />
        <Gallery />
        <FlowCourse />
        <ShopInfo />
        <Reserved />
      </main>
    </>
  );
}
