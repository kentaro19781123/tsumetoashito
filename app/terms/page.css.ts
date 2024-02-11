import { style } from "@vanilla-extract/css";
import { innerStyle, pcStyle } from "@/app/styles/styles.css";
import { vars } from "@/app/styles/var.css";

const inner = style([
  {
    ...innerStyle,
    padding: "16px",
  },
  pcStyle({
    // padding: 0,
  }),
]);

const section = style([
  {
    padding: vars.padding.secSP,
  },
  pcStyle({
    padding: vars.padding.secPC,
  }),
]);

const textWrap = style([
  {
    margin: "0 0 24px",
  },
  pcStyle({}),
]);

export const cssStyle = {
  inner,
  section,
  textWrap,
};
