import { style } from "@vanilla-extract/css";
import { innerStyle, pcStyle } from "@/app/styles/styles.css";
import { vars } from "@/app/styles/var.css";

export const inner = style([
  {
    ...innerStyle,
    padding: "16px",
    border: `1px solid ${vars.color.grayLight}`,
  },
  pcStyle({
    padding: "48px",
  }),
]);

export const section = style([
  {
    borderBottom: "1px solid #ccc",
    padding: "16px",
  },
  pcStyle({
    padding: vars.padding.secPC,
  }),
]);

export const cssStyle = {
  inner,
  section,
};
