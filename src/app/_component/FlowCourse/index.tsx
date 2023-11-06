import React from "react";
import { cssStyle } from "./flow-course.css";
import { IconTitleBox } from "@/app/_component/common/IconTitleBox";

export const FlowCourse: React.FC = () => {
  return (
    <section className={cssStyle.section}>
      <div className={cssStyle.inner}>
        <IconTitleBox
          titleArray={[
            {
              text: "FLOW",
              subText: "ケア流れ",
            },
            {
              text: "COURSE",
              subText: "コース紹介",
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
