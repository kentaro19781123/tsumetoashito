type propertyType = { [key: string]: string | number };

// https://vanilla-extract.style/documentation/api/style/
export const pcStyle = (property: propertyType) => ({
  "@media": {
    "screen and (min-width: 769px)": property,
  },
});

const innerStyleSP = {
  width: "100%",
  maxWidth: "100%",
  margin: "0 auto",
};

const innerStylePC = {
  // width: "90%",
  // maxWidth: "1000px",
  width: "1000px",
  maxWidth: "1000px",
};

export const innerStyle = {
  ...innerStyleSP,
  ...pcStyle(innerStylePC),
};

export const topIconMenu = {
  width: "250px",
};
