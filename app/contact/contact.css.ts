import { style } from "@vanilla-extract/css";
import { innerStyle, pcStyle } from "@/app/styles/styles.css";
import { vars } from "@/app/styles/var.css";

const inner = style([
  {
    ...innerStyle,
    padding: "16px",
  },
  pcStyle({}),
]);

const section = style([
  {
    padding: vars.padding.secSP,
  },
  pcStyle({
    padding: vars.padding.secPC,
  }),
]);

const formBox = style([
  {
    textAlign: "center",
  },
  pcStyle({}),
]);

export const cssStyle = {
  inner,
  section,
  formBox,
};
