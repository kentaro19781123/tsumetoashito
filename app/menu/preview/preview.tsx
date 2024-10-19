"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { SWRResponse } from "swr";
import useSWRImmutable from "swr/immutable";
import { fetcher } from "@/app/_libs/client";
import MenuContents from "@/app/menu/contents";
import { menuContentsType } from "@/types";

export const MenuPreview: React.FC = () => {
  const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT_MENU || "";
  const searchParams = useSearchParams();
  const draftKey = searchParams.get("draftkey") || "";
  const contentId = searchParams.get("id") || "";

  const { data, error }: SWRResponse<menuContentsType, unknown> =
    useSWRImmutable(
      [endpoint, contentId, { draftKey }],
      ([url, articleId, queries]) => fetcher(url, articleId, queries)
    );

  if (error) return <p>指定されたデータは存在しません。</p>;
  if (!data) return <p>Loading...</p>;

  const dataArray = [data];

  return (
    <>
      <Suspense>
        <MenuContents data={dataArray} />
      </Suspense>
    </>
  );
};
