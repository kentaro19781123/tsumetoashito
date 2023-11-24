import React from "react";
import { cssStyle } from "./reserved.css";
import { IconTitleBox } from "@/app/_component/common/IconTitleBox";

export const Reserved: React.FC = () => {
  return (
    <section className={cssStyle.section}>
      <div className={cssStyle.inner}>
        <IconTitleBox
          // titleArray={[
          //   {
          //     text: "RESERVED",
          //     subText: "ご予約・問合せ",
          //   },
          // ]}
          text="RESERVED"
          subText="ご予約"
          icon="icon_title.jpg"
          buttonText="more"
          url="./"
        />
      </div>
    </section>
  );
};
