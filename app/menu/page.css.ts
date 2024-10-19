import { style } from "@vanilla-extract/css";
import { innerStyle, pcStyle } from "@/app/_styles/styles.css";
import { vars } from "@/app/_styles/var.css";

const section = style([
  {
    padding: vars.padding.secSP,
  },
  pcStyle({
    padding: vars.padding.secPC,
  }),
]);

const inner = style([
  {
    ...innerStyle,
    padding: "16px",
  },
  pcStyle({}),
]);

const menuItem = style([
  {
    borderBottom: "1px solid #ccc",
    paddingBottom: "32px",
    marginBottom: "32px",
    ":last-child": {
      marginBottom: "0",
      borderBottom: "none",
    },
  },
  pcStyle({}),
]);

const titleArea = style([
  {},
  pcStyle({
    display: "flex",
    justifyContent: "space-between",
  }),
]);

const title = style([
  {
    fontSize: vars.font.F20,
    // background: "url('/img/icon_plus.png') left center no-repeat",
    // backgroundSize: "16px",
    // paddingLeft: "20px",
  },
  pcStyle({}),
]);

const titleWrap = style([
  {
    display: "flex",
    alignItems: "center",
  },
  pcStyle({}),
]);

const titleCircle = style([
  {
    display: "inline-block",
    color: vars.color.primary,
    fontSize: vars.font.F16,
    flexShrink: "0",
    width: "20px",
  },
  pcStyle({}),
]);

const titleRuby = style([
  {
    transform: "translateY(-.5em)",
  },
  pcStyle({}),
]);

const priceArea = style([
  {
    marginTop: "8px",
    textAlign: "right",
  },
  pcStyle({
    marginTop: "0",
  }),
]);

const priceCaution = style([
  {
    fontSize: vars.font.F12,
    marginBottom: "8px",
  },
  pcStyle({}),
]);

const price = style([
  {
    fontSize: vars.font.F18,
    fontWeight: "bold",
  },
  pcStyle({}),
]);

const contentArea = style([
  {},
  pcStyle({
    display: "flex",
    gap: "16px",
  }),
]);
const contentText = style([
  {
    marginTop: "12px",
    lineHeight: "1.5",
  },
  pcStyle({
    width: "50%",
    paddingLeft: "20px",
  }),
]);

const imageAreaWrap = style([
  {},
  pcStyle({
    width: "50%",
  }),
]);

const imageArea = style([
  {
    marginTop: "16px",
  },
  pcStyle({
    marginTop: "0",
  }),
]);

const menuImage = style([
  {
    width: "100%",
    height: "100%",
    marginTop: "16px",
  },
  pcStyle({
    width: "100%",
    height: "auto",
  }),
]);

const photoCaption = style([
  {
    marginTop: "16px",
  },
  pcStyle({
    marginTop: "8px",
    fontSize: vars.font.F14,
  }),
]);

export const cssStyle = {
  inner,
  section,
  titleArea,
  titleWrap,
  title,
  titleCircle,
  titleRuby,
  priceArea,
  priceCaution,
  price,
  contentArea,
  contentText,
  menuItem,
  imageAreaWrap,
  imageArea,
  menuImage,
  photoCaption,
};
