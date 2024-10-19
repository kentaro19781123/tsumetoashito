import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    // primary: "#cc6699",
    primary: "#e46ca3",
    primaryBg: "#ffe7f2",
    primaryFont: "#ff6699",
    primaryHover: "#cc6699",
    secondary: "#4a4e5a",
    base: "#333",
    gray: "#e9e9e9",
    grayLight: "#c3c3c3",
    white: "#fff",
    green: "#06c755",
    orange: "#ff9231",
  },
  font: {
    base: "16px",
    F10: "10px",
    F12: "12px",
    F14: "14px",
    F16: "16px",
    F18: "18px",
    F20: "20px",
    F24: "24px",
    F28: "28px",
    F32: "32px",
    F38: "38px",
  },
  padding: {
    secSP: "60px 0 0",
    secPC: "74px 0",
  },
});
