import { style } from "@vanilla-extract/css";
import { pcStyle } from "@/app/styles/styles.css";
import { vars } from "@/app/styles/var.css";

const section = style([
  {
    paddingTop: "48px",
  },
  pcStyle({
    padding: vars.padding.secPC,
  }),
]);

const inner = style({
  padding: "0 16px",
});

const buttonWrap = style([
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "20px",
  },
  pcStyle({
    padding: vars.padding.secPC,
  }),
]);

const button = style([
  {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "16px",
  },
  pcStyle({}),
]);
const buttonText = style({
  marginBottom: "8px",
});
const buttonLink = style({});

export const cssStyle = {
  section,
  inner,
  buttonWrap,
  button,
  buttonText,
  buttonLink,
};
