import { Suspense } from "react";
import { ShopInfoPreview } from "@/app/shopinfo/preview";
import { TermsPreview } from "@/app/terms/preview";
import { AboutPreview } from "@/component/Top/About/preview";
import { CasePreview } from "@/component/Top/Case/preview";
import { ReservePreview } from "@/component/Top/Reserve/preview";

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
