import React from "react";
import { cssStyle } from "./title.css";

type Props = {
  text: string;
};

export const Title: React.FC<Props> = ({ text }) => {
  return <h2 className={cssStyle.title}>{text}</h2>;
};
