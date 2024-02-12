import { style } from "@vanilla-extract/css";
import { innerStyle, pcStyle } from "@/app/styles/styles.css";

const section = style([
  {
    padding: "48px 0",
  },
  pcStyle({}),
]);

const inner = style({
  ...innerStyle,
  padding: "0 16px",
});

const buttonWrap = style([
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "20px",
  },
  pcStyle({
    padding: "24px 0 72px",
    flexDirection: "row",
    gap: "90px",
  }),
]);

const button = style([
  {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "16px",
  },
  pcStyle({}),
]);

const buttonText = style([
  {
    marginBottom: "8px",
  },
  pcStyle({
    marginBottom: "16px",
  }),
]);

const buttonLink = style([
  {
    width: "130px",
  },
  pcStyle({
    width: "230px",
  }),
]);

export const cssStyle = {
  section,
  inner,
  buttonWrap,
  button,
  buttonText,
  buttonLink,
};
