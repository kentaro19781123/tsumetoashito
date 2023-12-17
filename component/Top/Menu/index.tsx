import React from "react";
import { cssStyle } from "./menu.css";
import { IconTitleBox } from "@/component/common/IconTitleBox";
import { metaMenu } from "@/const/menu";

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
          text="MENU"
          subText="メニュー"
          icon="icon1.png"
          buttonText="more"
          url={metaMenu.link}
        />
      </div>
    </section>
  );
};
