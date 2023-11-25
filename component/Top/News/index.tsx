import Link from "next/link";
import React from "react";
import { cssStyle } from "./news.css";
// import { TextBox } from "@/component/common/TextBox";
import { Title } from "@/component/common/Title";
import { newsList } from "@/const/news";

export const News: React.FC = () => {
  return (
    <section className={cssStyle.section}>
      <div className={cssStyle.inner}>
        <Title text="お知らせ" />
        {newsList && (
          <ul className={cssStyle.newsUl}>
            {newsList.map((x) => (
              <li key={x.title} className={cssStyle.newsLi}>
                <div>{x.date}</div>
                <div>
                  <Link href={x.link} className={cssStyle.newsA}>
                    {x.title}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};
