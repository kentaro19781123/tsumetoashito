import { globalStyle, style } from "@vanilla-extract/css";
import { pcStyle } from "@/app/styles/styles.css";
// import { vars } from "@/app/styles/var.css";

const section = style([
  {
    background: "rgba(255,255,255,0.8)",
    padding: "10px 0",
    display: "flex",
    justifyContent: "center",
    boxShadow: "0px -2px 4px rgba(194,194,194,.3)",
    position: "fixed",
    zIndex: 2,
    width: "100%",
    transition: "bottom 0.2s ease",
    selectors: {
      '&[data-mvinview="false"]': {
        bottom: 0,
      },
      '&[data-mvinview="true"]': {
        bottom: 0,
      },
      '&[data-id="top"][data-mvinview="true"]': {
        bottom: "-61px",
      },
    },
  },
]);

globalStyle(`${section}[data-id="top"][data-mvinview="true"]`, {
  "@media": {
    "screen and (min-width: 769px)": {
      bottom: "-80px",
    },
  },
});

const buttonLink = style([
  {
    width: "130px",
    selectors: {
      "& + &": {
        marginLeft: "16px",
      },
    },
  },
  pcStyle({
    width: "230px",
  }),
]);

export const cssStyle = {
  section,
  buttonLink,
};
