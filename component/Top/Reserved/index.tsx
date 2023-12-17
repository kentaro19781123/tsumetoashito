import React from "react";
import { cssStyle } from "./reserved.css";
import { IconTitleBox } from "@/component/common/IconTitleBox";
import { metaReserve } from "@/const/menu";

export const Reserve: React.FC = () => {
  return (
    <section className={cssStyle.section}>
      <div className={cssStyle.inner}>
        <IconTitleBox
          text="RESERVED"
          subText="ご予約"
          icon="icon2.png"
          buttonText="more"
          url={metaReserve.link}
        />
      </div>
    </section>
  );
};
