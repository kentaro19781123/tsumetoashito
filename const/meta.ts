export const metaText = {
  title: "爪と足と 爪甲鉤彎症の経験者が開いたフットケアサロン",
  description:
    "浜松市中央区上島にある、爪甲鉤彎症（そうこうこうわんしょう）を経験したフスフレーガーによるフットケアサロンです。爪甲鉤彎症、爪切り、足裏ケアもご相談ください。",
  canonical: "https://tsumetoashito.com/",
};

export const ogpCommon = {
  type: "website",
  locale: "ja",
  siteName: metaText.title,
  images: [
    {
      url: `${metaText.canonical}/img/og.png`,
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
