import { style, globalStyle, composeStyles } from "@vanilla-extract/css";
import { innerStyle, pcStyle } from "@/app/styles/styles.css";
import { vars } from "@/app/styles/var.css";

/* index */
const section = style([
  {
    padding: vars.padding.secSP,
    borderBottom: "1px solid #ccc",
    marginBottom: "24px",
  },
  pcStyle({
    padding: vars.padding.secPC,
    marginBottom: "0",
  }),
]);

const inner = style({
  ...innerStyle,
});

// globalStyle(`${inner} h2`, {
//   paddingLeft: "16px",
// });

globalStyle(
  `${inner} h2`,
  pcStyle({
    paddingLeft: 0,
  })
);

/* slider */
const swiper = style([
  {
    padding: "0 16px",
  },
  pcStyle({
    padding: 0,
  }),
]);

const swiperSlide = style([
  {
    width: "150px !important",
  },
  pcStyle({
    width: "180px !important",
  }),
]);

export const swiperSlideNoEvent = composeStyles(
  swiperSlide,
  style([
    // { display: "none !important" },
    pcStyle({
      pointerEvents: "none",
      display: "block !important",
    }),
  ])
);

const swiperButton = style({
  color: vars.color.base,
});

const ButtonWrap = style([
  {
    width: "80%",
    margin: "16px auto 0",
  },
  pcStyle({
    margin: "24px auto 0",
  }),
]);

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

const dialogMoreButtonWrap = style([
  {
    width: "60%",
    margin: "16px auto 24px",
  },
  pcStyle({
    margin: "24px auto",
  }),
]);

const circle = style([
  {
    width: "150px",
    height: "150px",
    borderRadius: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    // backgroundColor: "#eee",
    background: "url('/img/case_bg.png')  no-repeat",
    backgroundSize: "180px",
    cursor: "pointer",
    padding: "16px",
  },
  pcStyle({
    width: "180px",
    height: "180px",
  }),
]);
const swiperImgWrap = style([
  {
    borderRadius: "35px",
    border: "5px solid #fff",
    overflow: "hidden",
    width: "70px",
    height: "70px",
    marginBottom: "4px",
  },
  pcStyle({
    borderRadius: "40px",
    width: "80px",
    height: "80px",
    marginBottom: "8px",
  }),
]);

const swiperImg = style({
  width: "100%",
  height: "auto",
});

const swiperItem = style([
  {
    whiteSpace: "pre-wrap",
    textAlign: "center",
    // fontWeight: "normal",
    fontSize: `${vars.font.F16}`,
  },
]);

const swiperItemKana = style([
  {
    fontSize: `${vars.font.F10}`,
    marginTop: "4px",
  },
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
  section,
  inner,
  swiper,
  swiperSlide,
  swiperSlideNoEvent,
  swiperButton,
  ButtonWrap,
  dialog,
  dialogMoreButtonWrap,
  circle,
  swiperImgWrap,
  swiperImg,
  swiperItem,
  swiperItemKana,
  container,
  containerItem,
  itemTitle,
  itemImage,
  closeButton,
};

/* */

// const section = css`
/* background: #d1eae6; */
/* padding: 48px 0;
  border-bottom: 1px solid #ccc; */

/* .swiper-button-prev,
  .swiper-button-next {
    color: ${Color.base};
  } */
/* .swiper-button-prev.swiper-button-disabled,
  .swiper-button-next.swiper-button-disabled {
    color: ${Color.grayLight};
  } */
/* .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: ${Font.F24};
  } */

/* figure {
    text-align: center;
  } */
// `;
