"use client";

import { useSearchParams } from "next/navigation";
import { SWRResponse } from "swr";
import useSWRImmutable from "swr/immutable";
import { ReserveContents } from "./contents";
import { fetcher } from "@/app/_libs/client";
import { reserveType } from "@/types";

export const ReservePreview: React.FC = () => {
  const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT_SHOPINFO || "";
  const searchParams = useSearchParams();
  const draftKey = searchParams.get("draftkey") || "";
  const id = searchParams.get("id") || "";
  const contentId = process.env.NEXT_PUBLIC_CONTENT_ID_RESERVE;

  const { data, error }: SWRResponse<reserveType, unknown> = useSWRImmutable(
    [endpoint, id, { draftKey }],
    ([url, articleId, queries]) => fetcher(url, articleId, queries)
  );

  if (error) return <p>指定されたデータは存在しません。</p>;
  if (!data) return <p>Loading...</p>;

  const { title, contentBlock } = data;

  return (
    id === contentId && (
      <ReserveContents contentBlock={contentBlock} title={title} />
    )
  );
};
