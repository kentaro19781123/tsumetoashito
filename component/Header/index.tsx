"use client";

import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useAtom } from "jotai";
// import Image from "next/image";
// import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { cssStyle } from "./header.css";
import { menuList } from "@/const/menu";
import { useOverflow } from "@/hooks/useOverflow";
import { mvInViewAtom } from "@/store/atom";
import { anchorScroll } from "@/utils/anchorScroll";

type Props = {
  pageId: string;
};

export const Header: React.FC<Props> = ({ pageId }) => {
  const [mvInView] = useAtom(mvInViewAtom);
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const search = searchParams.get("pageId");
  // const pathname = usePathname();
  useOverflow(isOpen);

  useEffect(() => {
    if (search) {
      anchorScroll(`#${search}`, 60);
    }
  }, [search]);

  return (
    <header
      className={cssStyle.headerWrap}
      data-mvinview={mvInView}
      id={pageId}
    >
      <div className={cssStyle.header}>
        <div className={cssStyle.headerMain}>
          <div className={cssStyle.logoWrap}>
            <h1 className={cssStyle.logo}>
              <a href="/">
                <img
                  src="/img/head_logo.png"
                  alt=""
                  width="128"
                  height="42"
                  className={cssStyle.logoImage}
                />
              </a>
            </h1>
          </div>
          {pageId !== "top" && (
            <div className={cssStyle.lineBtn}>
              <a href="">
                <img alt="LINEで予約" src="/img/line_btn.png" width="110" />
              </a>
            </div>
          )}
          <div className={cssStyle.pcMenu}>
            {menuList && (
              <ul className={cssStyle.pcMenuUl}>
                {menuList.map((x) => (
                  <li key={x.title} className={cssStyle.pcMenuLi}>
                    {pageId === "top" && x.title === "サロンについて" ? (
                      <div
                        className={cssStyle.pcMenuA}
                        onClick={(event) => anchorScroll("#about", 60, event)}
                      >
                        {x.title}
                      </div>
                    ) : (
                      <a href={x.link} className={cssStyle.pcMenuA}>
                        {x.title}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className={cssStyle.spMenu}>
            <div
              className={cssStyle.menuBtn}
              onClick={() => setIsOpen(!isOpen)}
              data-open={isOpen}
            >
              <span className={cssStyle.menuBtnSpan} data-open={isOpen}></span>
            </div>
            {menuList && (
              <>
                <div
                  className={cssStyle.menuBg}
                  onClick={() => setIsOpen(!isOpen)}
                  style={assignInlineVars({
                    [cssStyle.displayProp]: isOpen ? "block" : "none",
                  })}
                ></div>
                <div
                  className={cssStyle.spMenuItems}
                  style={assignInlineVars({
                    [cssStyle.isOpenProp]: isOpen
                      ? "translate3d(0, 0, 0)"
                      : "translate3d(100%, 0, 0)",
                  })}
                >
                  <ul className={cssStyle.spMenuItemsUl}>
                    {menuList.map((x) => (
                      <li key={x.title} className={cssStyle.spMenuItemsLi}>
                        {pageId === "top" && x.title === "サロンについて" ? (
                          <div
                            className={cssStyle.spMenuItemsA}
                            onClick={(event) => {
                              anchorScroll("#about", 60, event);
                              setIsOpen(!isOpen);
                            }}
                          >
                            {x.title}
                          </div>
                        ) : (
                          <a
                            href={x.link}
                            className={cssStyle.spMenuItemsA}
                            onClick={() => setIsOpen(!isOpen)}
                          >
                            {x.title}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
