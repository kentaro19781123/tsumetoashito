import { MenuContents } from "./contents";
import { client } from "@/app/_libs/client";
import { menuType } from "@/types";

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
