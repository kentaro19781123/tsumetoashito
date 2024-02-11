import { style } from "@vanilla-extract/css";
import { innerStyle, pcStyle } from "@/app/styles/styles.css";
import { vars } from "@/app/styles/var.css";

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
  pcStyle({
    // padding: 0,
  }),
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
  pcStyle({
    // padding: vars.padding.secPC,
  }),
]);

// const menuItem = style({});
// globalStyle(`${menuItem} + ${menuItem}`, {
//   paddingTop: "48px",
// });

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
    background: "url('/img/icon_plus.png') left center no-repeat",
    backgroundSize: "16px",
    paddingLeft: "20px",
  },
  pcStyle({}),
]);

const titleCircle = style([
  {
    fontSize: vars.font.F18,
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
    // border: `1px solid ${vars.color.grayLight}`,
    // backgroundColor: vars.color.gray,
    // padding: "16px",
    lineHeight: "1.5",
    // borderRadius: "4px",
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
