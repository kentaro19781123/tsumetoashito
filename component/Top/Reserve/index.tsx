import { ReserveContents } from "./contents";
// import { cssStyle } from "./reserve.css";
// import { ReserveLine } from "@/component/common/ReserveButton/ReserveLine";
// import { ReserveMail } from "@/component/common/ReserveButton/ReserveMail";
// import { Title } from "@/component/common/Title";
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
