import React from "react";
import { cssStyle } from "./shop-info.css";
import { IconTitleBox } from "@/app/_component/common/IconTitleBox";

export const ShopInfo: React.FC = () => {
  return (
    <section className={cssStyle.section}>
      <div className={cssStyle.inner}>
        <IconTitleBox
          titleArray={[
            {
              text: "SHOPINFO",
              subText: "店舗情報",
            },
          ]}
          icon="icon_title.jpg"
          buttonText="more"
          url="./"
        />
      </div>
    </section>
  );
};
