import React from "react";
import { cssStyle } from "./menu.css";
import { IconTitleBox } from "@/component/common/IconTitleBox";

export const Menu: React.FC = () => {
  return (
    <section className={cssStyle.section}>
      <div className={cssStyle.inner}>
        <IconTitleBox
          // titleArray={[
          //   {
          //     text: "MENU・PRICE",
          //     subText: "メニュー料金",
          //   },
          // ]}
          text="MENU・PRICE"
          subText="メニュー料金"
          icon="icon_title.jpg"
          buttonText="more"
          url="./"
        />
      </div>
    </section>
  );
};
