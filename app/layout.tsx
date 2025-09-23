import { Provider } from "jotai";
import "./globals.css";
import { Metadata } from "next";
import { metaText } from "@/app/_const/meta";

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export const metadata: Metadata = {
  metadataBase: new URL(`${metaText.canonical}`),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
