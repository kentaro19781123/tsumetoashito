import React from "react";
import { cssStyle } from "./about.css";
import { TextBox } from "@/component/common/TextBox";
import { Title } from "@/component/common/Title";

export const About: React.FC = () => {
  return (
    <section className={cssStyle.section} id="about">
      <div className={cssStyle.inner}>
        <Title text="当サロンについて" />
        <TextBox
          text={`テキストテキストテキストテキストテキストテキストテキスト\nテキストテキストテキストテキストテキス\n\nテキストテキストテキストテキストテキストテキストテキスト`}
        />
        <div className="kentaro">ああああああ</div>
        {/* <ButtonBox button={["ボタン", "ボタン"]} /> */}
      </div>
    </section>
  );
};
