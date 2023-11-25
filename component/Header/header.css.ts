import { style, createVar } from "@vanilla-extract/css";
import { innerStyle, pcStyle } from "@/app/styles/styles.css";
import { vars } from "@/app/styles/var.css";

const headerWrap = style({
  borderBottom: `1px solid ${vars.color.grayLight}`,
  position: "sticky",
  top: 0,
  background: vars.color.white,
  zIndex: 999,
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

const logoWrap = style({
  width: "200px",
});

const logo = style({
  fontWeight: "normal",
  width: "110px",
  height: "60px",
  fontSize: "18px",
});

const logoImage = style({
  height: "60px",
  width: "auto",
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
    opacity: 0.8,
    background: vars.color.grayLight,
  },
});

const spMenu = style(
  pcStyle({
    display: "none",
    position: "relative",
  })
);

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
});

// positionが型エラーになるため const型アサート
// https://github.com/vanilla-extract-css/vanilla-extract/discussions/740
const spanProp = {
  content: "",
  display: "block",
  height: "3px",
  width: "25px",
  borderRadius: "3px",
  backgroundColor: vars.color.base,
  position: "absolute",
} as const;

const menuBtnSpan = style({
  ...spanProp,
  "::before": {
    ...spanProp,
    bottom: "8px",
  },
  "::after": {
    ...spanProp,
    top: "8px",
  },
});

const isOpenProp = createVar();

const spMenuItems = style({
  transition: "transform 0.4s ease",
  position: "fixed",
  width: "300px",
  height: "100vh",
  top: "60px",
  right: 0,
  transform: isOpenProp,
  backgroundColor: vars.color.white,
  borderTop: `1px solid ${vars.color.grayLight}`,
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
  top: "60px",
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
  spMenuItemsLi,
  spMenuItemsA,
  displayProp,
  menuBg,
};
