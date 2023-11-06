import React from "react";
import { cssStyle } from "./about.css";
import { TextBox } from "@/app/_component/common/TextBox";
import { Title } from "@/app/_component/common/Title";

export const About: React.FC = () => {
  return (
    <section className={cssStyle.section}>
      <div className={cssStyle.inner}>
        <Title text="当店について" />
        <TextBox
          text={`テキストテキストテキストテキストテキストテキストテキスト\nテキストテキストテキストテキストテキス\n\nテキストテキストテキストテキストテキストテキストテキスト`}
        />
        <div className="kentaro">ああああああ</div>
        {/* <ButtonBox button={["ボタン", "ボタン"]} /> */}
      </div>
    </section>
  );
};
