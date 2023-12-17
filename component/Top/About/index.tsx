import React from "react";
import { cssStyle } from "./about.css";
// import { TextBox } from "@/component/common/TextBox";
import { Title } from "@/component/common/Title";
import { client } from "@/libs/client";
import { aboutType } from "@/types";

const getContents = async () => {
  const response = await client.get<aboutType>({
    endpoint: "shopinfo",
    contentId: "wf7x4le9bp3m",
  });
  return response;
};

export const About: React.FC = async () => {
  const data = await getContents();
  return (
    <section className={cssStyle.section} id="about">
      <div className={cssStyle.inner}>
        <Title text={data.title} />
        <div
          className="richEditor"
          dangerouslySetInnerHTML={{
            __html: data.contentBlock[0].aboutText,
          }}
        />
        {/* <ButtonBox button={["ボタン", "ボタン"]} /> */}
      </div>
    </section>
  );
};
