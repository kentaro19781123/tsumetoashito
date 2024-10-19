import React from "react";
import { AboutContents } from "./contents";
import { client } from "@/app/_libs/client";
import { aboutType } from "@/types";

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
