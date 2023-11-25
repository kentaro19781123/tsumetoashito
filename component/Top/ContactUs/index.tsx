import React from "react";
import { cssStyle } from "./contact-us.css";
import { IconTitleBox } from "@/component/common/IconTitleBox";

export const ContactUs: React.FC = () => {
  return (
    <section className={cssStyle.section}>
      <div className={cssStyle.inner}>
        <IconTitleBox
          // titleArray={[
          //   {
          //     text: "SHOPINFO",
          //     subText: "店舗情報",
          //   },
          // ]}
          text="Contact Us"
          subText="お問合せ"
          icon="icon_title.jpg"
          buttonText="more"
          url="./"
        />
      </div>
    </section>
  );
};
