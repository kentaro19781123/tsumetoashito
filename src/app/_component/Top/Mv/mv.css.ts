import { style } from "@vanilla-extract/css";
import { innerStyle } from "@/app/_styles/styles.css";

export const mvWrap = style({
  ...innerStyle,
});

export const image = style({
  width: "100%",
  height: "auto",
});

export const cssStyle = {
  mvWrap,
  image,
};
