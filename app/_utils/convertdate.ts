import dayjs from "dayjs";

export const ConvertDate = (convertDate: string) => {
  const publishedAt = dayjs(convertDate).format("YYYY/MM/DD");
  return publishedAt;
};
