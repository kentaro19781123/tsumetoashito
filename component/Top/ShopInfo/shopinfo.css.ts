import { style } from "@vanilla-extract/css";
import { topIconMenu, pcStyle } from "@/app/styles/styles.css";
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
  ...topIconMenu,
});

export const cssStyle = {
  section,
  inner,
};
