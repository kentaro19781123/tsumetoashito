import { style } from "@vanilla-extract/css";
import { innerStyle, pcStyle } from "@/app/styles/styles.css";
import { vars } from "@/app/styles/var.css";

export const section = style([
  {
    padding: vars.padding.secSP,
  },
  pcStyle({
    padding: vars.padding.secPC,
  }),
]);

export const inner = style({
  ...innerStyle,
});

export const cssStyle = {
  section,
  inner,
};
