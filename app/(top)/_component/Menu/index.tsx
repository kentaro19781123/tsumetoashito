import { client } from "@/app/_libs/client";
import type { menuType } from "@/types";
import { MenuContents } from "./contents";

const getContents = async () => {
  const response = await client.get<menuType>({
    endpoint: "menu",
  });
  return response.contents;
};

export const Menu: React.FC = async () => {
  const data = await getContents();

  return <MenuContents data={data} />;
};
