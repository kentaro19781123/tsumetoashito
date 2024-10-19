"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { SWRResponse } from "swr";
import useSWRImmutable from "swr/immutable";
import { CaseContents } from "../[slug]/contents";
import { fetcher } from "@/app/_libs/client";
import { treatmentContentsType } from "@/types";

export const CasePreview: React.FC = () => {
  const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT_TREATMENT || "";
  const searchParams = useSearchParams();
  const draftKey = searchParams.get("draftkey") || "";
  const contentId = searchParams.get("id") || "";

  const { data, error }: SWRResponse<treatmentContentsType, unknown> =
    useSWRImmutable(
      [endpoint, contentId, { draftKey }],
      ([url, articleId, queries]) => fetcher(url, articleId, queries)
    );

  if (error) return <p>指定されたデータは存在しません。</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <>
      <Suspense>
        <CaseContents data={data} />
      </Suspense>
    </>
  );
};
