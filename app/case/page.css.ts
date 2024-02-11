import { globalStyle, style } from "@vanilla-extract/css";
import { innerStyle, pcStyle } from "@/app/styles/styles.css";
import { vars } from "@/app/styles/var.css";

export const inner = style([
  {
    ...innerStyle,
    padding: "16px",
  },
  pcStyle({
    // padding: 0,
  }),
]);

export const section = style([
  {
    padding: vars.padding.secSP,
  },
  pcStyle({
    padding: vars.padding.secPC,
  }),
]);

export const caseSection = style([
  {
    paddingBottom: "32px",
    marginBottom: "32px",
    borderBottom: "1px solid #ccc",
    ":last-child": {
      borderBottom: "none",
    },
  },
  pcStyle({}),
]);

export const caseContent = style([
  {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
  },
  pcStyle({
    gap: "32px",
  }),
]);

export const caseItem = style([
  {
    width: "calc((100% - 16px) / 2)",
    cursor: "pointer",
    marginBottom: "16px",
    ":hover": {
      opacity: 0.8,
      // background: vars.color.grayLight,
      // background: "rgba(0,0,0,.1)",
    },
  },
  pcStyle({
    minWidth: "200px",
    width: "calc((100% - (32px * 3)) / 4)",
    marginBottom: "0",
  }),
]);

export const casePhotoWrap = style([{}, pcStyle({})]);

export const casePhoto = style([
  {
    width: "100%",
    height: "100%",
  },
  pcStyle({}),
]);

export const caseDetail = style([
  {
    marginTop: "8px",
  },
  pcStyle({}),
]);

globalStyle(`${caseDetail} strong`, {
  fontWeight: "normal",
});

export const caseDetailTitle = style([
  {
    marginTop: "8px",
    fontSize: vars.font.F16,
    fontWeight: "normal",
  },
  pcStyle({}),
]);

// モーダル用（後で共通化する）
const dialog = style([
  {
    border: "none",
    overflow: "visible",
    borderRadius: "initial",
    appearance: "none",
    width: "90%",
    height: "80%",
    padding: "16px 0",
    margin: "auto",
    "::backdrop": {
      background: "#000",
      opacity: 0.8,
    },
  },
  pcStyle({
    width: "500px",
    height: "80%",
  }),
]);

const container = style({
  width: "100%",
  height: "100%",
  lineHeight: "1.5",
  padding: "0 16px",
  boxSizing: "border-box",
  overflow: "scroll",
});

globalStyle(`${container} img`, {
  maxWidth: "100%",
  height: "auto",
});

globalStyle(`${container} p + p`, {
  marginTop: "16px",
});

const containerItem = style({});
globalStyle(`${containerItem} + ${containerItem}`, {
  marginTop: "24px",
  paddingTop: "24px",
  borderTop: "1px solid #ccc",
});

const itemTitle = style({
  fontSize: vars.font.F18,
  marginBottom: "16px",
});

const itemImage = style({
  marginBottom: "16px",
});

const closeButtonPseudo = {
  content: "",
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "3px",
  height: "20px",
  background: vars.color.white,
} as const;

const closeButton = style({
  display: "block",
  cursor: "pointer",
  position: "absolute",
  top: "-23px",
  right: "0",
  width: "20px",
  height: "20px",
  "::before": {
    ...closeButtonPseudo,
    transform: "translate(-50%, -50%) rotate(45deg)",
  },
  "::after": {
    ...closeButtonPseudo,
    transform: "translate(-50%, -50%) rotate(-45deg)",
  },
});

export const cssStyle = {
  inner,
  section,
  caseSection,
  caseItem,
  casePhotoWrap,
  casePhoto,
  caseDetail,
  caseDetailTitle,
  caseContent,
  // 以下、共通化する
  dialog,
  container,
  containerItem,
  itemTitle,
  itemImage,
  closeButton,
};
