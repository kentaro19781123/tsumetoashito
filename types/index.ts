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
  contentBlock: category[];
};

type category = {
  fieldId: "treatmentList";
  categoryList: categoryItem[];
};

type categoryItem = {
  fieldId: "category";
  categoryItem: string;
};

export type menuType = {
  contents: menuItemType[];
} & MicroCMSContentId &
  MicroCMSDate;

export type shopInfoType = {
  contentBlock: shopInfoItemType[];
  title: string;
} & MicroCMSContentId &
  MicroCMSDate;

type shopInfoItemType = {
  fieldId: string;
  shopAddress: string;
  shopMapUrl: string;
};

type menuItemType = {
  title: string;
  price: string;
  caption: string;
  text: string;
  photo: MicroCMSImage;
};
