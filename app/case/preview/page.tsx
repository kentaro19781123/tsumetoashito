import { Suspense } from "react";
import { CasePreview } from "./preview";

// ページ
export default async function Page() {
  return (
  <Suspense>
    <CasePreview />
  </Suspense>
  )
}
