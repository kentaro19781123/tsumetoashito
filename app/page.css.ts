import { style } from "@vanilla-extract/css";
import { pcStyle } from "@/app/styles/styles.css";

export const main = style(
  pcStyle({
    paddingTop: "16px",
  })
);

export const menuWrap = style([
  {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  pcStyle({
    paddingTop: "16px",
    flexDirection: "row",
    justifyContent: "center",
    gap: "16px",
  }),
]);

export const cssStyle = {
  main,
  menuWrap,
};
