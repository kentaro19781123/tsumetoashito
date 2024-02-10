import { style } from "@vanilla-extract/css";
import { innerStyle, pcStyle } from "@/app/styles/styles.css";
import { vars } from "@/app/styles/var.css";

const inner = style([
  {
    ...innerStyle,
    padding: "16px",
  },
  pcStyle({
    padding: 0,
  }),
]);

const section = style([
  {
    padding: vars.padding.secSP,
  },
  pcStyle({
    padding: vars.padding.secPC,
  }),
]);

const mapText = style([
  {
    marginTop: "16px",
  },
  pcStyle({}),
]);

const shopInfo = style([
  {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  pcStyle({}),
]);

const shopPhoto = style([
  {
    width: "100%",
  },
  pcStyle({
    width: "200px",
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
