"use client";

import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useAtom } from "jotai";
// import Image from "next/image";
// import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { cssStyle } from "./header.css";
import { ReserveLine } from "@/component/common/ReserveButton/ReserveLine";
import { menuList } from "@/const/menu";
import { useDocumentLoadCompleted } from "@/hooks/useDocumentLoadCompleted";
import { useIsPc } from "@/hooks/useIsPc";
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
  const isLoaded = useDocumentLoadCompleted();
  const isPc = useIsPc();
  // const pathname = usePathname();
  useOverflow(isOpen);

  const offset = isPc ? 85 : 70;

  useEffect(() => {
    if (search && isLoaded) {
      const element = document.querySelector(`#${search}`);
      if (element) {
        console.log(element.getBoundingClientRect().top);
        console.log(window.scrollY);
        window.scrollTo({
          behavior: "smooth",
          top: element.getBoundingClientRect().top + window.scrollY - offset,
        });
      }
      // anchorScroll(`#${search}`, offset);
    }
  }, [search, isLoaded, offset]);

  return (
    <header
      className={cssStyle.headerWrap}
      data-mvinview={mvInView}
      id={pageId}
    >
      <div className={cssStyle.header}>
        <div className={cssStyle.headerMain}>
          <div className={cssStyle.logoWrap}>
            <div className={cssStyle.logo}>
              <a href="/">
                <img
                  alt=""
                  className={cssStyle.logoImage}
                  height="42"
                  src="/img/head_logo.png"
                  width="128"
                />
              </a>
            </div>
          </div>
          {pageId !== "top" && (
            <div className={cssStyle.lineBtn}>
              <ReserveLine />
              {/* <a href="">
                <img alt="LINEで予約" src="/img/line_btn.png" width="110" />
              </a> */}
            </div>
          )}
          <div className={cssStyle.pcMenu}>
            {menuList && (
              <ul className={cssStyle.pcMenuUl}>
                {menuList.map((x) => (
                  <li className={cssStyle.pcMenuLi} key={x.title}>
                    {pageId === "top" && x.title === "サロンについて" ? (
                      <div
                        className={cssStyle.pcMenuA}
                        onClick={(event) => anchorScroll("#about", 60, event)}
                      >
                        {x.title}
                      </div>
                    ) : (
                      <a className={cssStyle.pcMenuA} href={x.link}>
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
              data-open={isOpen}
              onClick={() => setIsOpen(!isOpen)}
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
                    <li className={cssStyle.spMenuItemsLi}>
                      <a className={cssStyle.spMenuItemsA} href="/">
                        HOME
                      </a>
                    </li>
                    {menuList.map((x) => (
                      <li className={cssStyle.spMenuItemsLi} key={x.title}>
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
                            className={cssStyle.spMenuItemsA}
                            href={x.link}
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
