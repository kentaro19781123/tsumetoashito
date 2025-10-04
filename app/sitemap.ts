import type { MetadataRoute } from "next";
import { client } from "@/app/_libs/client";
import { treatmentType } from "@/types";

// microCMSから施術例のデータ取得
const getContents = async () => {
  const response = await client.get<treatmentType>({
    endpoint: "treatment",
  });
  return response.contents;
};

const basePageDate = [
  {
    url: "https://tsumetoashito.com/",
    lastModified: new Date(),
  },
  {
    url: "https://tsumetoashito.com/?pageId=about",
    lastModified: new Date(),
  },
  {
    url: "https://tsumetoashito.com/case/",
    lastModified: new Date(),
  },
  {
    url: "https://tsumetoashito.com/menu/",
    lastModified: new Date(),
  },
  {
    url: "https://tsumetoashito.com/shopinfo/",
  },
  {
    url: "https://tsumetoashito.com/terms/",
  },
  {
    url: "https://tsumetoashito.com/formedia/",
  },
  {
    url: "https://tsumetoashito.com/contact/",
  },
];

export const dynamic = "force-static";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await getContents();
  const caseData = data.map((item) => {
    return {
      url: `https://tsumetoashito.com/case/${item.id}/`,
      lastModified: new Date(item.updatedAt),
    };
  });

  return [...basePageDate, ...caseData];
}
