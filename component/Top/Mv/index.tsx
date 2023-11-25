import Image from "next/image";
import React from "react";
import { cssStyle } from "./mv.css";

export const Mv: React.FC = () => {
  return (
    <div className={cssStyle.mvWrap}>
      <Image
        alt="mv"
        src="/img/mv.jpg"
        width={1100}
        height={724}
        loading="eager"
        className={cssStyle.image}
      />
    </div>
  );
};
