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

export const caseSection = style([
  {
    paddingBottom: "40px",
    marginBottom: "40px",
    borderBottom: "1px solid #ccc",
    ":last-child": {
      borderBottom: "none",
    },
  },
  pcStyle({}),
]);

export const photo = style({
  // fontSize: `${vars.font.F18}`,
  marginBottom: "16px",
});

export const text = style({
  lineHeight: "1.5",
});

export const buttonWrap = style({
  margin: "80px auto 0",
  width: "300px",
});

export const cssStyle = {
  inner,
  section,
  caseSection,
  photo,
  text,
  buttonWrap,
};
