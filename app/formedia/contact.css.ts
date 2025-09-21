// vanilla-extract用CSSは不要になった
// import { style, globalStyle } from "@vanilla-extract/css";
// import { innerStyle, pcStyle } from "@/app/_styles/styles.css";
// import { vars } from "@/app/_styles/var.css";

// const inner = style([
//   {
//     ...innerStyle,
//     padding: "16px",
//   },
//   pcStyle({}),
// ]);

// const section = style([
//   {
//     padding: vars.padding.secSP,
//   },
//   pcStyle({
//     padding: vars.padding.secPC,
//   }),
// ]);

// const formBox = style([
//   {
//     textAlign: "center",
//   },
//   pcStyle({}),
// ]);

// globalStyle(`${formBox} iframe`, {
//   width: "100%",
// });

// export const cssStyle = {
//   inner,
//   section,
//   formBox,
// };
