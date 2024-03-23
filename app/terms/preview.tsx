"use client";

import { useSearchParams } from "next/navigation";
import { SWRResponse } from "swr";
import useSWRImmutable from "swr/immutable";
import { TermsContents } from "./contents";
import { fetcher } from "@/libs/client";
import { termsType } from "@/types";

export const TermsPreview: React.FC = () => {
  const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT_SHOPINFO || "";
  const searchParams = useSearchParams();
  const draftKey = searchParams.get("draftkey") || "";
  const id = searchParams.get("id") || "";
  const contentId = process.env.NEXT_PUBLIC_CONTENT_ID_TERMS;

  const { data, error }: SWRResponse<termsType, unknown> = useSWRImmutable(
    [endpoint, id, { draftKey }],
    ([url, articleId, queries]) => fetcher(url, articleId, queries)
  );

  if (error) return <p>指定されたデータは存在しません。</p>;
  if (!data) return <p>Loading...</p>;

  return id === contentId && <TermsContents data={data} />;
};
