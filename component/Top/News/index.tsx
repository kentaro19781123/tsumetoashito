import Link from "next/link";
import React from "react";
import { cssStyle } from "./news.css";
// import { TextBox } from "@/component/common/TextBox";
import { Title } from "@/component/common/Title";
// import { newsList } from "@/const/news";
import { client } from "@/libs/client";
import { newsType } from "@/types";
import { ConvertDate } from "@/utils/convertdate";

const getContents = async () => {
  const response = await client.get<newsType>({
    endpoint: "shopinfo",
    contentId: "rwrk90-xc7e",
  });
  return response;
};

export const News: React.FC = async () => {
  const data = await getContents();
  return (
    <section className={cssStyle.section}>
      <div className={cssStyle.inner}>
        <Title text={data.title} />
        {data.contentBlock.length > 0 && (
          <ul className={cssStyle.newsUl}>
            {data.contentBlock.map((x, index) => (
              <li key={index} className={cssStyle.newsLi}>
                <div>{ConvertDate(x.newsDate)}</div>
                <div>
                  {x.newsLink ? (
                    <Link href={x.newsLink} className={cssStyle.newsA}>
                      {x.newsTitle}
                    </Link>
                  ) : (
                    <p>{x.newsTitle}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};
