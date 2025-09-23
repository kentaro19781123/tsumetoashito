"use client";

import Link from "next/link";
import React from "react";
import { menuList } from "@/app/_const/menu";
import { anchorScroll } from "@/app/_utils/anchorScroll";

type Props = {
  pageId: string;
};

export const Footer: React.FC<Props> = ({ pageId }) => {
  return (
    <section className="border-t border-gray-light py-4 pb-20 md:pb-[90px]">
      {menuList && (
        <ul className="flex flex-wrap items-center justify-center mb-4">
          {menuList.map((x) => (
            <li
              className="border-l border-primary mb-2 first:border-l-0"
              key={x.title}
            >
              {pageId === "top" && x.title === "サロンについて" ? (
                <div
                  className="px-1 mx-1 cursor-pointer text-12 md:px-2 md:mx-2 md:text-14 hover:text-primary"
                  onClick={(event) => anchorScroll("#about", 60, event)}
                >
                  {x.title}
                </div>
              ) : (
                <Link
                  className="px-1 mx-1 cursor-pointer text-12 md:px-2 md:mx-2 md:text-14 hover:text-primary"
                  href={x.link}
                  scroll={false}
                >
                  {x.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
      <div className="text-center text-12">&copy;爪と足と</div>
    </section>
  );
};
