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
};

export type treatmentType = {
  contents: treatmentContentsType[];
} & MicroCMSContentId &
  MicroCMSDate;

export type treatmentContentsType = {
  treatmentTitle: string;
  treatmentCategory: string;
  treatmentPhoto: MicroCMSImage;
  treatmentText: string;
};

export type treatmentCategoryType = {
  contentBlock: categoryContentType[];
};

type categoryContentType = {
  fieldId: "treatmentList";
  categoryList: categoryItem[];
};

type categoryItem = {
  fieldId: "category";
  categoryItem: string;
};

export type menuType = {
  contents: menuContentsType[];
} & MicroCMSContentId &
  MicroCMSDate;

type menuContentsType = {
  title: string;
  price: string;
  caption: string;
  text: string;
  photoTitle: string;
  photo: MicroCMSImage;
};

export type shopInfoType = {
  contentBlock: shopInfoContentType[];
  title: string;
} & MicroCMSContentId &
  MicroCMSDate;

type shopInfoContentType = {
  fieldId: "shop";
  shopAddress: string;
  shopMapUrl: string;
};

export type reserveType = {
  contentBlock: reserveContentType[];
  title: string;
};

type reserveContentType = {
  fieldId: "reserve";
  calendar: string;
};
