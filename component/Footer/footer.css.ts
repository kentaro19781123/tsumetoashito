import { style } from "@vanilla-extract/css";
import { vars } from "@/app/styles/var.css";

export const section = style([
  {
    // borderTop: `1px solid ${vars.color.grayLight}`,
    padding: "32px 0",
  },
]);

export const inner = style({
  textAlign: "center",
  fontSize: vars.font.F12,
});

export const linkUl = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "24px",
});
export const linkLi = style({
  borderLeft: "1px solid #ccc",
  marginBottom: "8px",
  selectors: {
    "&:last-child": {
      borderRight: "1px solid #ccc",
    },
  },
});
export const link = style({
  padding: "0 8px",
  margin: "0 8px",
  cursor: "pointer",
  fontSize: `${vars.font.F12}`,
});
export const cssStyle = {
  section,
  inner,
  linkUl,
  linkLi,
  link,
};
