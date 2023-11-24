import { style, createVar } from "@vanilla-extract/css";
import { pcStyle } from "@/app/_styles/styles.css";

const textPosition = createVar();

const wrap = style([
  {
    textAlign: textPosition,
    lineHeight: 1.5,
    marginBottom: "16px",
    whiteSpace: "pre-wrap",
  },
  pcStyle({
    marginBottom: "32px",
  }),
]);

export const cssStyle = {
  textPosition,
  wrap,
};
