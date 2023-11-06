import { style, globalStyle } from "@vanilla-extract/css";
import { innerStyle, pcStyle } from "@/app/_styles/styles.css";
import { vars } from "@/app/_styles/var.css";

/* index */
const section = style([
  {
    padding: "16px 0",
    borderBottom: "1px solid #ccc",
  },
  pcStyle({
    padding: "48px 0",
  }),
]);

const inner = style({
  ...innerStyle,
});

globalStyle(`${inner} h2`, {
  paddingLeft: "16px",
});

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
    height: "150px !important",
  },
  pcStyle({
    width: "200px !important",
    height: "200px !important",
  }),
]);

const swiperButton = style({
  color: vars.color.base,
});

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
    width: "60%",
    height: "80%",
  }),
]);

const swiperItem = style([
  {
    cursor: "pointer",
    width: "150px",
    height: "150px",
    borderRadius: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "pre-wrap",
    textAlign: "center",
    backgroundColor: "#eee",
  },
  pcStyle({
    width: "200px",
    height: "200px",
  }),
]);

const container = style({
  width: "100%",
  height: "100%",
  overflow: "auto",
  lineHeight: "1.5",
  padding: "0 16px",
  boxSizing: "border-box",
});

globalStyle(`${container} img`, {
  maxWidth: "100%",
  height: "auto",
});

globalStyle(`${container} p + p`, {
  marginTop: "16px",
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
  swiperButton,
  dialog,
  swiperItem,
  container,
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
