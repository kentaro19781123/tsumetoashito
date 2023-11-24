import { globalStyle, style } from "@vanilla-extract/css";
import { innerStyle, pcStyle } from "@/app/_styles/styles.css";
import { vars } from "@/app/_styles/var.css";

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

const newsUl = style({});

const newsLi = style([
  // display: "flex",
  // lineHeight: 1.5,
  // ":before": {
  //   content: "・",
  //   display: "block",
  //   width: "1em",
  // },
  {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    lineHeight: 1.5,
  },
  pcStyle({
    display: "flex",
    flexDirection: "row",
    gap: "16px",
  }),
]);

globalStyle(`${newsLi} + li`, {
  paddingTop: "16px",
});

const newsA = style(
  {
    display: "block",
    ":hover": {
      textDecoration: "underline",
    },
  }
  // {
  //   display: "flex",
  //   flexDirection: "column",
  //   gap: "4px",
  //   ":hover": {},
  // },
  // pcStyle({
  //   display: "flex",
  //   flexDirection: "row",
  //   gap: "16px",
  // }),
);

export const cssStyle = {
  inner,
  section,
  newsUl,
  newsLi,
  newsA,
};
