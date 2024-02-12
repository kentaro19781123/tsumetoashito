import { globalStyle, style } from "@vanilla-extract/css";
import { innerStyle, pcStyle } from "@/app/styles/styles.css";
import { vars } from "@/app/styles/var.css";

const inner = style([
  {
    ...innerStyle,
    padding: "16px",
  },
  pcStyle({}),
]);

const section = style([
  {
    padding: vars.padding.secSP,
  },
  pcStyle({
    padding: vars.padding.secPC,
  }),
]);

const caseSection = style([
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

const caseContent = style([
  {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
  },
  pcStyle({
    gap: "32px",
  }),
]);

const caseItem = style([
  {
    width: "calc((100% - 16px) / 2)",
    cursor: "pointer",
    marginBottom: "16px",
    ":hover": {
      opacity: 0.8,
    },
  },
  pcStyle({
    minWidth: "200px",
    width: "calc((100% - (32px * 3)) / 4)",
    marginBottom: "0",
  }),
]);

const casePhotoWrap = style([{}, pcStyle({})]);

const casePhoto = style([
  {
    width: "100%",
    height: "100%",
  },
  pcStyle({}),
]);

const caseDetail = style([
  {
    marginTop: "8px",
  },
  pcStyle({}),
]);

globalStyle(`${caseDetail} strong`, {
  fontWeight: "normal",
});

const caseDetailTitle = style([
  {
    marginTop: "8px",
    fontSize: vars.font.F16,
    fontWeight: "normal",
  },
  pcStyle({}),
]);

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
};
