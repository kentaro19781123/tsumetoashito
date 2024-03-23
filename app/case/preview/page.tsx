// import { Metadata } from "next";
// import { cssStyle } from "../page.css";
// import { ButtonBorder } from "@/component/common/ButtonBorder";
// import { Title } from "@/component/common/Title";
// import { metaCase } from "@/const/menu";
// import { jsonLdBase, metaText, ogpCommon } from "@/const/meta";
// import { client } from "@/libs/client";
// import { treatmentContentsType, treatmentType } from "@/types";
import { CasePreview } from "./preview";

// ページ
export default async function Page() {
  return <CasePreview />;
}
