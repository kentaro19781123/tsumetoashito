import type {
  MicroCMSImage,
  MicroCMSDate,
  MicroCMSContentId,
} from "microcms-js-sdk";

export type newsType = {
  title: string;
  contentBlock: newscontentType[];
};

type newscontentType = {
  fieldId: "newItem";
  newsTitle: string;
  newsDate: string;
  newsLink: string;
};

export type aboutType = {
  title: string;
  contentBlock: aboutcontentType[];
} & MicroCMSContentId &
  MicroCMSDate;

type aboutcontentType = {
  fieldId: "about";
  aboutText: string;
  photoLeft: MicroCMSImage;
  captionLeft: string;
  photoRight: MicroCMSImage;
  captionRight: string;
};

export type treatmentType = {
  contents: treatmentContentsType[];
} & MicroCMSDate;

export type treatmentContentsType = {
  treatmentTitle: string;
  treatmentCategory: string;
  treatmentPhoto: MicroCMSImage;
  treatmentText: string;
} & MicroCMSContentId;

export type treatmentCategoryType = {
  contentBlock: categoryContentType[];
};

type categoryContentType = {
  fieldId: "treatmentList";
  categoryList: categoryItem[];
};

export type categoryItem = {
  fieldId: "category";
  categoryItem: string;
  categoryKana?: string;
  categoryPhoto?: MicroCMSImage;
};

export type menuType = {
  contents: menuContentsType[];
} & MicroCMSContentId &
  MicroCMSDate;

export type menuContentsType = {
  title: string;
  price: string;
  caption: string;
  text: string;
  photo: MicroCMSImage;
  photoCaption: string;
};

export type shopInfoType = {
  contentBlock: shopInfoContentType[];
  title: string;
} & MicroCMSContentId &
  MicroCMSDate;

type shopInfoContentType = {
  fieldId: "shop";
  shopAddress: string;
  shopPhoto: MicroCMSImage;
  shopMapUrl: string;
};

export type reserveType = {
  contentBlock: reserveContentType[];
  title: string;
};

export type reserveContentType = {
  fieldId: "reserve";
  text: string;
  button: reserveButtonType[];
};

type reserveButtonType = {
  fieldId: "reserveBtn";
  type: string[];
  text: string;
  link: string;
};

export type termsType = {
  contentBlock: termsContentType[];
  title: string;
};

type termsContentType = {
  fieldId: "terms";
  text: string;
};
