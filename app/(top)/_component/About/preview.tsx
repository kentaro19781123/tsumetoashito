"use client";

import { useSearchParams } from "next/navigation";
import type { SWRResponse } from "swr";
import useSWRImmutable from "swr/immutable";
import { fetcher } from "@/app/_libs/client";
import type { aboutType } from "@/types";
import { AboutContents } from "./contents";

export const AboutPreview: React.FC = () => {
  const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT_SHOPINFO || "";
  const searchParams = useSearchParams();
  const draftKey = searchParams.get("draftkey") || "";
  const id = searchParams.get("id") || "";
  const contentId = process.env.NEXT_PUBLIC_CONTENT_ID_ABOUT;

  const { data, error }: SWRResponse<aboutType, unknown> = useSWRImmutable(
    [endpoint, id, { draftKey }],
    ([url, articleId, queries]) => fetcher(url, articleId, queries),
  );

  if (error) return <p>指定されたデータは存在しません。</p>;
  if (!data) return <p>Loading...</p>;

  return id === contentId && <AboutContents data={data} />;
};
