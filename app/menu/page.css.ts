import { style } from "@vanilla-extract/css";
import { innerStyle, pcStyle } from "@/app/styles/styles.css";
import { vars } from "@/app/styles/var.css";

export const inner = style([
  {
    ...innerStyle,
    padding: "16px",
  },
  pcStyle({
    padding: 0,
  }),
]);

export const section = style([
  {
    borderBottom: "1px solid #ccc",
    padding: vars.padding.secSP,
  },
  pcStyle({
    padding: vars.padding.secPC,
  }),
]);

export const menuItem = style([
  {
    borderBottom: "1px solid #ccc",
    padding: vars.padding.secSP,
    ":first-child": {
      paddingTop: "0",
    },
    ":last-child": {
      paddingBottom: "0",
      borderBottom: "none",
    },
  },
  pcStyle({
    padding: vars.padding.secPC,
  }),
]);

// export const menuItem = style({});
// globalStyle(`${menuItem} + ${menuItem}`, {
//   paddingTop: "48px",
// });

export const titleArea = style([
  {},
  pcStyle({
    display: "flex",
    justifyContent: "space-between",
  }),
]);

export const title = style([
  {
    fontWeight: "normal",
  },
  pcStyle({}),
]);

export const titleCircle = style([
  {
    fontSize: vars.font.F18,
  },
  pcStyle({}),
]);

export const titleRuby = style([
  {
    transform: "translateY(-.5em)",
  },
  pcStyle({}),
]);

export const priceArea = style([
  {
    marginTop: "8px",
    textAlign: "right",
  },
  pcStyle({
    marginTop: "0",
  }),
]);

export const priceCaution = style([
  {
    fontSize: vars.font.F12,
    marginBottom: "8px",
  },
  pcStyle({}),
]);

export const price = style([
  {
    fontSize: vars.font.F18,
    fontWeight: "bold",
  },
  pcStyle({}),
]);

export const contentArea = style([
  {
    marginTop: "8px",
    border: `1px solid ${vars.color.grayLight}`,
    // backgroundColor: vars.color.gray,
    padding: "16px",
    lineHeight: "1.5",
    // borderRadius: "4px",
  },
  pcStyle({}),
]);

export const imageArea = style([
  {
    marginTop: "16px",
  },
  pcStyle({}),
]);
export const menuImage = style([
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
  menuItem,
  imageArea,
  menuImage,
};
