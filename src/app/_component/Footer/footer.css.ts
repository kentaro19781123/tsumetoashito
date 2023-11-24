import { style } from "@vanilla-extract/css";
import { vars } from "@/app/_styles/var.css";

export const section = style([
  {
    borderTop: `1px solid ${vars.color.grayLight}`,
    padding: "32px 0",
  },
]);

export const inner = style({
  textAlign: "center",
  fontSize: vars.font.F12,
});

export const cssStyle = {
  section,
  inner,
};
