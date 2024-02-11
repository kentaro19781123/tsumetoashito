import { style } from "@vanilla-extract/css";
import { pcStyle } from "@/app/styles/styles.css";
import { vars } from "@/app/styles/var.css";

const section = style([
  {
    borderTop: `1px solid ${vars.color.grayLight}`,
    padding: "16px 0 80px",
  },
  pcStyle({
    paddingBottom: "90px",
  }),
]);

const linkUl = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "16px",
});

const linkLi = style({
  borderLeft: `1px solid ${vars.color.primary}`,
  marginBottom: "8px",
  selectors: {
    "&:first-child": {
      borderLeft: "none",
    },
  },
});

const link = style([
  {
    padding: "0 4px",
    margin: "0 4px",
    cursor: "pointer",
    fontSize: `${vars.font.F12}`,
    selectors: {
      "&:hover": {
        color: vars.color.primary,
      },
    },
  },
  pcStyle({
    padding: "0 8px",
    margin: "0 8px",
    fontSize: vars.font.F14,
  }),
]);

const copy = style([
  {
    textAlign: "center",
    fontSize: vars.font.F12,
  },
]);

export const cssStyle = {
  section,
  linkUl,
  linkLi,
  link,
  copy,
};
