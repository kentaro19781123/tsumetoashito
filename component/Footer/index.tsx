"use client";

import Link from "next/link";
import React from "react";
import { cssStyle } from "./footer.css";
import { menuList } from "@/const/menu";
import { anchorScroll } from "@/utils/anchorScroll";

type Props = {
  pageId: string;
};

export const Footer: React.FC<Props> = ({ pageId }) => {
  return (
    <section className={cssStyle.section}>
      {menuList && (
        <ul className={cssStyle.linkUl}>
          {menuList.map((x) => (
            <li key={x.title} className={cssStyle.linkLi}>
              {pageId === "top" && x.title === "サロンについて" ? (
                <div
                  className={cssStyle.link}
                  onClick={(event) => anchorScroll("#about", 60, event)}
                >
                  {x.title}
                </div>
              ) : (
                <Link href={x.link} className={cssStyle.link}>
                  {x.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
      <div className={cssStyle.inner}>&copy;爪と足と</div>
    </section>
  );
};
