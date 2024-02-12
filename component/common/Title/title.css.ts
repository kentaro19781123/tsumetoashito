import { style } from "@vanilla-extract/css";
import { pcStyle } from "@/app/styles/styles.css";
import { vars } from "@/app/styles/var.css";

const h1 = style([
  {
    fontSize: vars.font.F24,
    marginBottom: "24px",
    marginLeft: "-16px",
    background: "url('/img/icon_plus.png') left center no-repeat",
    backgroundSize: "25px",
    paddingLeft: "30px",
  },
  pcStyle({
    fontSize: vars.font.F28,
    marginBottom: "24px",
  }),
]);

const h2 = style([
  {
    fontSize: vars.font.F20,
    marginBottom: "8px",
    background: "url('/img/icon_plus.png') left center no-repeat",
    backgroundSize: "16px",
    paddingLeft: "20px",
  },
  pcStyle({
    fontSize: vars.font.F24,
    marginBottom: "24px",
  }),
]);

export const cssStyle = {
  h1,
  h2,
};
