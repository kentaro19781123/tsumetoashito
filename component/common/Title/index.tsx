import React from "react";
import { cssStyle } from "./title.css";

type Props = {
  Tag?: "h1" | "h2";
  level?: 1 | 2;
  text: string;
};

export const Title: React.FC<Props> = ({ Tag = "h1", level = 1, text }) => {
  return <Tag className={level === 1 ? cssStyle.h1 : cssStyle.h2}>{text}</Tag>;
};
