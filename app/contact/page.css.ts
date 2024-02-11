import { style } from "@vanilla-extract/css";
import { innerStyle, pcStyle } from "@/app/styles/styles.css";
import { vars } from "@/app/styles/var.css";

export const inner = style([
  {
    ...innerStyle,
    padding: "16px",
  },
  pcStyle({
    // padding: 0,
  }),
]);

export const section = style([
  {
    // borderBottom: "1px solid #ccc",
    padding: vars.padding.secSP,
  },
  pcStyle({
    padding: vars.padding.secPC,
  }),
]);

export const cssStyle = {
  inner,
  section,
};
