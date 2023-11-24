"use client";

import { assignInlineVars } from "@vanilla-extract/dynamic";
import React, { useState } from "react";
import { cssStyle } from "./header.css";
import { menuList } from "@/app/_const/menu";
import { useOverflow } from "@/app/_hooks/useOverflow";
import { anchorScroll } from "@/app/_utils/anchorScroll";

type Props = {
  pageId: string;
};
export const Header: React.FC<Props> = ({ pageId }) => {
  console.log(pageId);
  const [isOpen, setIsOpen] = useState(false);
  useOverflow(isOpen);

  // useEffect(() => {
  //   const el = document.body;
  //   el.style.overflow = isOpen ? "hidden" : "inherit";
  // }, [isOpen]);

  return (
    <header className={cssStyle.headerWrap}>
      <div className={cssStyle.header}>
        <div className={cssStyle.headerMain}>
          <div className={cssStyle.logoWrap}>
            <h1 className={cssStyle.logo}>
              <img
                src="img/logo.jpg"
                alt="ロゴ"
                width="200"
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
                        onClick={(event) => anchorScroll(event, "#about", 60)}
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
                        <a href={x.link} className={cssStyle.spMenuItemsA}>
                          {x.title}
                        </a>
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
