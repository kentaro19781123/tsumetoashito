import type React from "react";
import { client } from "@/app/_libs/client";
import type { aboutType } from "@/types";
import { AboutContents } from "./contents";

const getContents = async () => {
  const response = await client.get<aboutType>({
    endpoint: process.env.NEXT_PUBLIC_API_ENDPOINT_SHOPINFO || "",
    contentId: process.env.NEXT_PUBLIC_CONTENT_ID_ABOUT,
  });
  return response;
};

export const About: React.FC = async () => {
  const data = await getContents();
  return <AboutContents data={data} />;
};
