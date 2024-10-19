import { style } from "@vanilla-extract/css";
import { innerStyle, pcStyle } from "@/app/_styles/styles.css";
import { vars } from "@/app/_styles/var.css";

const section = style([
  {
    padding: "0 16px",
  },
  pcStyle({
    padding: "0",
  }),
]);

const inner = style([
  {
    ...innerStyle,
    padding: "16px",
    background: vars.color.primaryBg,
  },
  pcStyle({
    padding: "48px",
  }),
]);

const title = style([
  {
    fontSize: vars.font.F24,
    marginBottom: "16px",
    color: vars.color.primaryFont,
  },
  pcStyle({
    fontSize: vars.font.F38,
    marginBottom: "24px",
  }),
]);

const aboutContent = style([
  {},
  pcStyle({
    display: "flex",
    gap: "24px",
  }),
]);

const photoContent = style([
  {
    display: "flex",
    gap: "3px",
    marginTop: "16px",
    justifyContent: "center",
  },
  pcStyle({
    gap: "10px",
    marginTop: 0,
    flexShrink: 0,
  }),
]);
const photo = style([
  {
    width: "60%",
    fontSize: `${vars.font.F14}`,
  },
  pcStyle({
    width: "100%",
    maxWidth: "210px",
  }),
]);

// const photo = style([
//   {
//     width: "50%",
//     fontSize: `${vars.font.F10}`,
//   },
//   pcStyle({
//     maxWidth: "280px",
//   }),
// ]);

const photoImg = style({
  width: "100%",
});

export const cssStyle = {
  inner,
  section,
  title,
  aboutContent,
  photoContent,
  photo,
  photoImg,
};
