import { style } from "@vanilla-extract/css";
import { innerStyle, pcStyle } from "@/app/styles/styles.css";
import { vars } from "@/app/styles/var.css";

export const inner = style([
  {
    ...innerStyle,
    padding: "16px",
    border: `1px solid ${vars.color.grayLight}`,
  },
  pcStyle({
    padding: "48px",
  }),
]);

export const section = style([
  {
    borderBottom: "1px solid #ccc",
    padding: "16px",
  },
  pcStyle({
    padding: vars.padding.secPC,
  }),
]);

export const aboutContent = style([
  {},
  pcStyle({
    display: "flex",
    gap: "24px",
  }),
]);

export const photoContent = style([
  {
    display: "flex",
    gap: "8px",
    marginTop: "16px",
  },
  pcStyle({
    marginTop: 0,
  }),
]);
export const photo = style([
  {
    width: "50%",
    fontSize: `${vars.font.F12}`,
  },
  pcStyle({
    maxWidth: "280px",
  }),
]);

export const photoImg = style({
  width: "100%",
});
export const cssStyle = {
  inner,
  section,
  aboutContent,
  photoContent,
  photo,
  photoImg,
};
