import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    primary: "#3f3f9d",
    secondary: "#4a4e5a",
    base: "#333",
    gray: "#e9e9e9",
    grayLight: "#c3c3c3",
    white: "#fff",
  },
  font: {
    base: "16px",
    F12: "12px",
    F14: "14px",
    F18: "18px",
    F24: "24px",
    F32: "32px",
    F38: "38px",
  },
  padding: {
    secSP: "24px 0",
    secPC: "48px 0",
  },
});
