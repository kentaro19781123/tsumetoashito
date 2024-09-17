"use client";

import { useSearchParams } from "next/navigation";
import { Title } from "@/component/Title";

export const CasePreview: React.FC = async () => {
  const searchParams = useSearchParams();
  const draftKey = searchParams.get("draftkey") || "";
  const id = searchParams.get("id") || "";
  const contentId = process.env.NEXT_PUBLIC_CONTENT_ID_CASELIST;

  if (draftKey && id !== contentId) return;

  return <Title text="施術名リストはプレビューできません。" />;
};
