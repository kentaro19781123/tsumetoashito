export const metaText = {
  title: "爪と足と 爪甲鉤彎症の経験者が開いたフットケアサロン",
  description: "descriptiondescriptiondescriptiondescription",
  canonical: "https://tsumetoashito.com/",
};

export const ogpCommon = {
  type: "website",
  locale: "ja",
  siteName: metaText.title,
  images: [
    {
      url: `${metaText.canonical}img/og.png`,
      width: 960,
      height: 504,
    },
  ],
};

export const jsonLdBase = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      item: metaText.canonical,
      name: metaText.title,
      position: 1,
    },
  ],
};
