import { style, createVar, globalStyle } from "@vanilla-extract/css";
import { innerStyle, pcStyle } from "@/app/styles/styles.css";
import { vars } from "@/app/styles/var.css";

const headerWrap = style([
  {
    borderBottom: `1px solid ${vars.color.grayLight}`,
    // position: "sticky",
    position: "fixed",
    top: "0",
    background: vars.color.white,
    zIndex: 999,
    width: "100%",
    transition: "top 0.2s ease",
    // selectors: {
    //   '&[data-mvinview="false"]': {
    //     top: 0,
    //   },
    // },
  },
  pcStyle({
    position: "sticky",
  }),
]);

globalStyle(`#top${headerWrap}`, {
  top: "-60px",
});
globalStyle(`#top${headerWrap}[data-mvinview="false"]`, {
  top: 0,
});

const header = style({
  ...innerStyle,
  display: "flex",
  flexDirection: "column",
});

const headerMain = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  order: 2,
});

const logoWrap = style([
  {
    width: "200px",
    // display: "none",
    selectors: {
      '&[data-mvInView="false"]': {
        // display: "block",
      },
    },
  },
  pcStyle({
    display: "block",
  }),
]);

const logo = style({
  fontWeight: "normal",
  width: "110px",
  height: "60px",
  fontSize: "18px",
  margin: 0,
});

const logoImage = style({
  height: "auto",
  width: "108px",
});

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
  gap: "4px",
});

const pcMenuLi = style({
  textAlign: "center",
  fontSize: vars.font.F14,
});

const pcMenuA = style({
  width: "120px",
  height: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: vars.color.base,
  textDecoration: "none",
  padding: "8px",
  cursor: "pointer",
  ":hover": {
    // opacity: 0.8,
    // background: vars.color.grayLight,
    background: "rgba(0,0,0,.3)",
    border: `1px solid ${vars.color.white}`,
    color: vars.color.white,
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
  // "::before": {
  //   ...spanProp,
  //   bottom: "8px",
  // },
  // "::after": {
  //   ...spanProp,
  //   top: "8px",
  // },
});

const isOpenProp = createVar();

const spMenuItems = style({
  transition: "transform 0.4s ease",
  position: "fixed",
  width: "300px",
  height: "100vh",
  // top: "60px",
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
