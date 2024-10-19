import { style } from "@vanilla-extract/css";
import { pcStyle } from "@/app/_styles/styles.css";
import { vars } from "@/app/_styles/var.css";

const wrap = style([
  {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
  },
  pcStyle({
    flexDirection: "column",
  }),
]);

const buttonStyle = style([
  {
    display: "block",
    textDecoration: "none",
    color: vars.color.base,
    border: `1px solid ${vars.color.base}`,
    borderRadius: "4px",
    padding: "12px 16px",
    textAlign: "center",
    width: "100%",
    selectors: {
      "&:hover": {
        border: `1px solid ${vars.color.primary}`,
        color: vars.color.primary,
      },
    },
  },
  pcStyle({
    width: "100%",
  }),
]);

export const cssStyle = {
  wrap,
  buttonStyle,
};
