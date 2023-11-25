import Link from "next/link";
import React from "react";
import { cssStyle } from "./button-border.css";

type Props = {
  buttonText: string;
  url: string;
};

export const ButtonBorder: React.FC<Props> = ({ buttonText, url }) => {
  return (
    <div className={cssStyle.wrap}>
      <Link href={url} className={cssStyle.buttonStyle}>
        {buttonText}
      </Link>
    </div>
  );
};
