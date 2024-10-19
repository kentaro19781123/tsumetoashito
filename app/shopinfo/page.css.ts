import { style } from "@vanilla-extract/css";
import { innerStyle, pcStyle } from "@/app/_styles/styles.css";
import { vars } from "@/app/_styles/var.css";

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

const shopInfo = style([
  {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  pcStyle({
    flexDirection: "row",
    marginTop: "16px",
  }),
]);

const mapText = style([
  {
    marginTop: "16px",
  },
  pcStyle({
    width: "50%",
    marginTop: "0",
  }),
]);

const shopPhoto = style([
  {
    width: "100%",
  },
  pcStyle({
    width: "50%",
  }),
]);

const shopPhotoImage = style([
  {
    width: "100%",
    height: "auto",
  },
  pcStyle({}),
]);

export const cssStyle = {
  inner,
  section,
  mapText,
  shopInfo,
  shopPhoto,
  shopPhotoImage,
};
