import { style } from "@vanilla-extract/css";
import { pcStyle } from "@/app/_styles/styles.css";
import { vars } from "@/app/_styles/var.css";

const wrap = style([{}, pcStyle({})]);

const button = style([
  {
    minHeight: "36px",
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
    padding: "6px 0px 3px;",
    justifyContent: "center",
    gap: "4px",
  },
  pcStyle({
    minHeight: "60px",
  }),
]);

const line = style([
  {
    backgroundColor: vars.color.green,
  },
  pcStyle({}),
]);

const mail = style([
  {
    backgroundColor: vars.color.orange,
  },
  pcStyle({}),
]);

const iconLine = style([
  {
    width: "25px",
  },
  pcStyle({
    width: "40px",
  }),
]);

const iconMail = style([
  {
    width: "25px",
  },
  pcStyle({}),
]);

const icon = style([
  {
    width: "100%",
  },
]);

const text = style([
  {
    fontSize: vars.font.F14,
    color: vars.color.white,
    fontWeight: "bold",
    paddingBottom: "2px",
  },
  pcStyle({
    fontSize: vars.font.F24,
  }),
]);

export const cssStyle = {
  wrap,
  button,
  line,
  mail,
  iconLine,
  iconMail,
  icon,
  text,
};
