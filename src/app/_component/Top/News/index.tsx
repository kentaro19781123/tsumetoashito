import React from "react";
import { cssStyle } from "./news.css";
// import { TextBox } from "@/app/_component/common/TextBox";
import { Title } from "@/app/_component/common/Title";
import { newsList } from "@/app/_const/news";

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
                  <a href={x.link} className={cssStyle.newsA}>
                    {x.title}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};
