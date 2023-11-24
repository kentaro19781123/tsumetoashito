import { style, globalStyle } from "@vanilla-extract/css";
import { pcStyle } from "@/app/_styles/styles.css";
import { vars } from "@/app/_styles/var.css";

// const textPosition = createVar();

const wrap = style([
  {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    // marginBottom: "16px",
  },
  pcStyle({
    flexDirection: "column",
    // marginBottom: "32px",
  }),
]);

const buttonStyle = style([
  {
    display: "block",
    textDecoration: "none",
    color: vars.color.base,
    border: `1px solid ${vars.color.base}`,
    borderRadius: "4px",
    padding: "16px",
    textAlign: "center",
    width: "100%",
  },
  pcStyle({
    width: "100%",
  }),
]);

globalStyle(`${buttonStyle}::hover`, {
  opacity: "0.8",
});

export const cssStyle = {
  wrap,
  buttonStyle,
};
