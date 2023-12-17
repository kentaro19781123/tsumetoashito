import React from "react";
import { cssStyle } from "./contact-us.css";
import { IconTitleBox } from "@/component/common/IconTitleBox";
import { metaContact } from "@/const/menu";

export const ContactUs: React.FC = () => {
  return (
    <section className={cssStyle.section}>
      <div className={cssStyle.inner}>
        <IconTitleBox
          text="CONTACT"
          subText="お問合せ"
          icon="icon3.png"
          buttonText="more"
          url={metaContact.link}
        />
      </div>
    </section>
  );
};
