import { style } from "@vanilla-extract/css";
import { pcStyle } from "@/app/_styles/styles.css";
import { vars } from "@/app/_styles/var.css";

export const title = style([
  {
    fontSize: vars.font.F32,
    fontWeight: "normal",
    fontFamily: "Josefin Sans",
    marginBottom: "32px",
  },
  pcStyle({
    fontSize: vars.font.F38,
    marginBottom: "16px",
  }),
]);

export const cssStyle = {
  title,
};
