import React from "react";
import { cssStyle } from "./access.css";
import { IconTitleBox } from "@/component/common/IconTitleBox";

export const Access: React.FC = () => {
  return (
    <section className={cssStyle.section}>
      <div className={cssStyle.inner}>
        <IconTitleBox
          // titleArray={[
          //   {
          //     text: "ACCESS",
          //     subText: "アクセス",
          //   },
          // ]}
          text="ACCESS"
          subText="アクセス"
          icon="icon_title.jpg"
          buttonText="more"
          url="./"
        />
      </div>
    </section>
  );
};
