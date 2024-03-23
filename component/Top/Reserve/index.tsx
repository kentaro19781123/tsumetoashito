import { ReserveContents } from "./contents";
import { client } from "@/libs/client";
import { reserveType } from "@/types";

const getContents = async () => {
  const response = await client.get<reserveType>({
    endpoint: "shopinfo",
    contentId: "rheo-e4tj7m1",
  });
  return response;
};

export const Reserve: React.FC = async () => {
  const { title, contentBlock } = await getContents();

  return <ReserveContents contentBlock={contentBlock} title={title} />;
};
