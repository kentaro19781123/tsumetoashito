import { style, globalStyle } from "@vanilla-extract/css";
import { pcStyle } from "@/app/styles/styles.css";
import { vars } from "@/app/styles/var.css";

// const textPosition = createVar();

const titleWrap = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

globalStyle(`${titleWrap} h2 + h2`, {
  marginLeft: "1em",
  position: "relative",
});

globalStyle(`${titleWrap} h2 + h2::before`, {
  content: "・",
  display: "block",
  position: "absolute",
  left: "-1em",
  top: "8px",
  width: "1em",
});

const iconWrap = style({
  textAlign: "center",
});

const title = style({
  textAlign: "center",
});

const mainTitle = style([
  {
    fontSize: vars.font.F24,
    fontWeight: "normal",
    // fontFamily: "Josefin Sans",
    display: "block",
  },
  pcStyle({
    fontSize: vars.font.F38,
  }),
]);

const subTitle = style({
  fontSize: vars.font.F14,
});

const buttonWrap = style([
  {
    width: "60%",
    margin: "0 auto 16px",
  },
  pcStyle({
    width: "300px",
    margin: "0 auto 32px",
  }),
]);

export const cssStyle = {
  titleWrap,
  iconWrap,
  title,
  mainTitle,
  subTitle,
  buttonWrap,
};
