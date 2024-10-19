import { Suspense } from "react";
import { AboutPreview } from "@/app/(top)/_component/About/preview";
import { CasePreview } from "@/app/(top)/_component/Case/preview";
import { ReservePreview } from "@/app/(top)/_component/Reserve/preview";
import { ShopInfoPreview } from "@/app/shopinfo/preview";
import { TermsPreview } from "@/app/terms/preview";

export default function Home() {
  return (
    <>
      <main>
        <Suspense>
          <AboutPreview />
          <ReservePreview />
          <ShopInfoPreview />
          <TermsPreview />
          <CasePreview />
        </Suspense>
      </main>
    </>
  );
}
