import { globalStyle, style } from "@vanilla-extract/css";
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

const buttonLink = style({});
globalStyle(`${buttonLink} + ${buttonLink}`, {
  marginLeft: "8px",
});

export const cssStyle = {
  section,
  buttonLink,
};
