"use client";

import { useSearchParams } from "next/navigation";
import type { SWRResponse } from "swr";
import useSWRImmutable from "swr/immutable";
import { fetcher } from "@/app/_libs/client";
import type { shopInfoType } from "@/types";
import { ShopInfoContents } from "./contents";

export const ShopInfoPreview: React.FC = () => {
  const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT_SHOPINFO || "";
  const searchParams = useSearchParams();
  const draftKey = searchParams.get("draftkey") || "";
  const id = searchParams.get("id") || "";
  const contentId = process.env.NEXT_PUBLIC_CONTENT_ID_SHOPINFO;

  const { data, error }: SWRResponse<shopInfoType, unknown> = useSWRImmutable(
    [endpoint, id, { draftKey }],
    ([url, articleId, queries]) => fetcher(url, articleId, queries),
  );

  if (error) return <p>指定されたデータは存在しません。</p>;
  if (!data) return <p>Loading...</p>;

  return id === contentId && <ShopInfoContents data={data} />;
};
