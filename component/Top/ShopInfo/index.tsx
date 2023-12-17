import React from "react";
import { cssStyle } from "./shopinfo.css";
import { IconTitleBox } from "@/component/common/IconTitleBox";
import { metaShopInfo } from "@/const/menu";

export const ShopInfo: React.FC = () => {
  return (
    <section className={cssStyle.section}>
      <div className={cssStyle.inner}>
        <IconTitleBox
          text="SHOP INFO"
          subText="店舗情報"
          icon="icon4.png"
          buttonText="more"
          url={metaShopInfo.link}
        />
      </div>
    </section>
  );
};
