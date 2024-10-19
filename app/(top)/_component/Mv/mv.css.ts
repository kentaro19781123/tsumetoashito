import { style } from "@vanilla-extract/css";
import { innerStyle, pcStyle } from "@/app/_styles/styles.css";
import { vars } from "@/app/_styles/var.css";

const mvWrap = style([
  {
    ...innerStyle,
    background: "url('/img/sp_mv_bg.webp') no-repeat",
    backgroundSize: "100% auto",
    position: "relative",
    marginBottom: "24px",
    borderTop: `3px solid ${vars.color.primary}`,
  },
  pcStyle({
    background: "url('/img/pc_mv_bg.webp') no-repeat",
    backgroundSize: "cover",
  }),
]);

const logoWrap = style([
  {
    width: "55%",
    padding: "13% 0 0 8%",
  },
  pcStyle({
    width: "450px",
    margin: "80px 0 0 70px",
    padding: "0",
  }),
]);

const image = style({
  width: "100%",
  height: "auto",
});

const read = style([
  {
    width: "91%",
    margin: "0 auto",
    paddingTop: "34%",
  },
  pcStyle({
    width: "650px",
    paddingTop: "230px",
  }),
]);

const mvBg = style({
  height: "4895px",
  position: "absolute",
  top: "0",
  zIndex: "-1",
  width: "100%",
});

const bgImage = style({
  objectFit: "cover",
  height: "489px",
  width: "100%",
});

const bubble1 = style([
  {
    width: "93%",
    padding: "5% 0 0 4%",
  },
  pcStyle({
    width: "540px",
    padding: "0",
    margin: "30px 0 0 70px",
  }),
]);

const bubble2 = style([
  {
    width: "96%",
    padding: "3% 0 0 4%",
  },
  pcStyle({
    width: "600px",
    padding: "0",
    margin: "0 0 0 370px",
  }),
]);

const bubble3 = style([
  {
    width: "97%",
    padding: "4% 0 0 2.5%",
  },
  pcStyle({
    width: "610px",
    padding: "0",
    margin: "10px 0 0 170px",
  }),
]);

export const cssStyle = {
  mvWrap,
  logoWrap,
  image,
  read,
  mvBg,
  bgImage,
  bubble1,
  bubble2,
  bubble3,
};
