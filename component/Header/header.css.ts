import { style, createVar, globalStyle } from "@vanilla-extract/css";
import { innerStyle, pcStyle } from "@/app/styles/styles.css";
import { vars } from "@/app/styles/var.css";

const headerWrap = style([
  {
    borderBottom: `1px solid ${vars.color.grayLight}`,
    position: "fixed",
    top: "0",
    background: vars.color.white,
    zIndex: 999,
    width: "100%",
    transition: "top 0.2s ease",
  },
  pcStyle({
    borderTop: `3px solid ${vars.color.primary}`,
    boxShadow: "0px 4px 4px rgba(194,194,194,.3)",
    borderBottom: "none",
  }),
]);

globalStyle(`#top${headerWrap}`, {
  "@media": {
    "screen and (min-width: 769px)": {
      top: "-74px",
    },
  },
  top: "-61px",
});

globalStyle(`#top${headerWrap}[data-mvinview="false"]`, {
  top: 0,
});

const header = style({
  ...innerStyle,
  padding: "0 16px",
});

const headerMain = style([
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "60px",
    position: "relative",
  },
  pcStyle({
    height: "70px",
  }),
]);

const logoWrap = style([
  {
    width: "120px",
  },
  pcStyle({
    width: "150px",
  }),
]);

const logo = style({});

const logoImage = style({
  height: "auto",
  width: "100%",
});

const lineBtn = style([
  {
    width: "120px",
    position: "absolute",
    right: "40px",
    top: "11px",
  },
  pcStyle({
    display: "none",
  }),
]);

const pcMenu = style([
  {
    display: "none",
  },
  pcStyle({
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  }),
]);

const pcMenuUl = style({
  display: "flex",
});

const pcMenuLi = style({
  textAlign: "center",
  fontSize: vars.font.F14,
});

const pcMenuA = style({
  width: "auto",
  height: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  padding: "8px 16px",
  cursor: "pointer",
  ":hover": {
    color: vars.color.primary,
  },
});

const spMenu = style(
  pcStyle({
    display: "none",
    position: "relative",
  })
);

// positionが型エラーになるため const型アサート
// https://github.com/vanilla-extract-css/vanilla-extract/discussions/740
const spanProp = {
  content: "",
  display: "block",
  height: "3px",
  width: "25px",
  borderRadius: "3px",
  backgroundColor: vars.color.primary,
  position: "absolute",
} as const;

const menuBtn = style({
  position: "fixed",
  top: "0",
  right: "0",
  display: "flex",
  height: "60px",
  width: "60px",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 90,
  "::before": {
    ...spanProp,
    top: "18px",
    transition: "transform 0.4s ease",
  },
  "::after": {
    ...spanProp,
    bottom: "18px",
    transition: "transform 0.4s ease",
  },
  selectors: {
    '&[data-open="true"]::before': {
      top: "28px",
      transform: "rotate(45deg)",
    },
    '&[data-open="true"]::after': {
      bottom: "29px",
      transform: "rotate(-45deg)",
    },
  },
});

const menuBtnSpan = style({
  ...spanProp,
  top: "0",
  bottom: "0",
  margin: "auto",
  selectors: {
    '&[data-open="true"]': {
      opacity: 0,
    },
  },
});

const isOpenProp = createVar();

const spMenuItems = style({
  transition: "transform 0.4s ease",
  position: "fixed",
  width: "300px",
  height: "100vh",
  top: 0,
  right: 0,
  transform: isOpenProp,
  backgroundColor: vars.color.white,
  borderTop: `1px solid ${vars.color.grayLight}`,
});

const spMenuItemsUl = style({
  marginTop: "51px",
  borderTop: `1px dashed ${vars.color.grayLight}`,
});

const spMenuItemsLi = style({
  borderBottom: `1px dashed ${vars.color.grayLight}`,
});

const spMenuItemsA = style({
  color: `${vars.color.base}`,
  textDecoration: "none",
  padding: "16px",
  display: "block",
  background: "url('/img/icon_plus.png') 16px center no-repeat",
  backgroundSize: "10px",
  paddingLeft: "32px",
});

const displayProp = createVar();

const menuBg = style({
  transition: "transform 0.5s ease",
  position: "fixed",
  height: "100vh",
  width: "100%",
  background: "#000",
  opacity: 0.8,
  // top: "60px",
  top: 0,
  left: 0,
  display: displayProp,
});

export const cssStyle = {
  headerWrap,
  header,
  headerMain,
  logoWrap,
  logo,
  logoImage,
  lineBtn,
  pcMenu,
  pcMenuUl,
  pcMenuLi,
  pcMenuA,
  spMenu,
  menuBtn,
  menuBtnSpan,
  isOpenProp,
  spMenuItems,
  spMenuItemsUl,
  spMenuItemsLi,
  spMenuItemsA,
  displayProp,
  menuBg,
};
