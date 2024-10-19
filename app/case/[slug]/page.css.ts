import { style } from "@vanilla-extract/css";
import { innerStyle, pcStyle } from "@/app/_styles/styles.css";
import { vars } from "@/app/_styles/var.css";

const inner = style([
  {
    ...innerStyle,
    padding: "16px",
  },
  pcStyle({}),
]);

const section = style([
  {
    padding: vars.padding.secSP,
  },
  pcStyle({
    padding: vars.padding.secPC,
  }),
]);

const caseSection = style([
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

const photoWrap = style([
  {
    marginBottom: "16px",
    width: "100%",
  },
  pcStyle({
    maxWidth: "500px",
  }),
]);

const photo = style({
  width: "100%",
});

const text = style({
  lineHeight: "1.5",
});

const buttonWrap = style({
  margin: "80px auto 0",
  width: "300px",
});

export const cssStyle = {
  inner,
  section,
  caseSection,
  photoWrap,
  photo,
  text,
  buttonWrap,
};
