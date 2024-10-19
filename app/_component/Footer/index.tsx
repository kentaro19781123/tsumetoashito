"use client";

import Link from "next/link";
import React from "react";
import { cssStyle } from "./footer.css";
import { menuList } from "@/app/_const/menu";
import { anchorScroll } from "@/app/_utils/anchorScroll";

type Props = {
  pageId: string;
};

export const Footer: React.FC<Props> = ({ pageId }) => {
  return (
    <section className={cssStyle.section}>
      {menuList && (
        <ul className={cssStyle.linkUl}>
          {menuList.map((x) => (
            <li className={cssStyle.linkLi} key={x.title}>
              {pageId === "top" && x.title === "サロンについて" ? (
                <div
                  className={cssStyle.link}
                  onClick={(event) => anchorScroll("#about", 60, event)}
                >
                  {x.title}
                </div>
              ) : (
                <Link className={cssStyle.link} href={x.link} scroll={false}>
                  {x.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
      <div className={cssStyle.copy}>&copy;爪と足と</div>
    </section>
  );
};
