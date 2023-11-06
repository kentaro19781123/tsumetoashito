import React from "react";
import { cssStyle } from "./icon-title-box.css";

type Props = {
  text: string;
  subText: string;
};

export const IconTitle: React.FC<Props> = ({ text, subText }) => {
  return (
    <h2 className={cssStyle.title}>
      <span className={cssStyle.mainTitle}>{text}</span>
      <span className={cssStyle.subTitle}>{subText}</span>
    </h2>
  );
};
