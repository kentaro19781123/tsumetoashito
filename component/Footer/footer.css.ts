import { style } from "@vanilla-extract/css";
import { vars } from "@/app/styles/var.css";

export const section = style([
  {
    borderTop: `1px solid ${vars.color.grayLight}`,
    padding: "16px 0 80px",
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
  marginBottom: "16px",
});

export const linkLi = style({
  borderLeft: `1px solid ${vars.color.primary}`,
  marginBottom: "8px",
  selectors: {
    "&:first-child": {
      borderLeft: "none",
    },
  },
});
export const link = style({
  padding: "0 4px",
  margin: "0 4px",
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
