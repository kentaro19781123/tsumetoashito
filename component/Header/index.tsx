"use client";

import { assignInlineVars } from "@vanilla-extract/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { cssStyle } from "./header.css";
import { menuList } from "@/const/menu";
import { useOverflow } from "@/hooks/useOverflow";
import { anchorScroll } from "@/utils/anchorScroll";

type Props = {
  pageId: string;
};
export const Header: React.FC<Props> = ({ pageId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const search = searchParams.get("pageId");
  useOverflow(isOpen);

  useEffect(() => {
    if (search === "about") {
      anchorScroll("#about", 60);
    }
  }, [search]);

  return (
    <header className={cssStyle.headerWrap}>
      <div className={cssStyle.header}>
        <div className={cssStyle.headerMain}>
          <div className={cssStyle.logoWrap}>
            <h1 className={cssStyle.logo}>
              <Image
                src="img/logo.jpg"
                alt="ロゴ"
                width="200"
                height="60"
                className={cssStyle.logoImage}
              />
            </h1>
          </div>
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
                      <Link href={x.link} className={cssStyle.pcMenuA}>
                        {x.title}
                      </Link>
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
            >
              <span className={cssStyle.menuBtnSpan}></span>
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
                  <ul>
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
                          <Link href={x.link} className={cssStyle.spMenuItemsA}>
                            {x.title}
                          </Link>
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