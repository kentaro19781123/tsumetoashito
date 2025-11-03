"use client";

import { useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { Inner } from "./Inner";
import { ReserveLine } from "@/app/_component/ReserveButton/ReserveLine";
import { menuList } from "@/app/_const/menu";
import { useDocumentLoadCompleted } from "@/app/_hooks/useDocumentLoadCompleted";
import { useIsPc } from "@/app/_hooks/useIsPc";
import { useOverflow } from "@/app/_hooks/useOverflow";
import { anchorScroll } from "@/app/_utils/anchorScroll";

type Props = {
  pageId: string;
};

export const Header: React.FC<Props> = ({ pageId }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const search = searchParams.get("pageId");
  const isLoaded = useDocumentLoadCompleted();
  const isPc = useIsPc();
  const headerMenuList = menuList.filter((x) => x.title !== "メディア関係の方");
  useOverflow(isOpen);

  const offset = isPc ? 85 : 70;

  const handleScroll = useCallback(() => {
    const shouldBeVisible = window.scrollY > 100;
    setIsVisible(shouldBeVisible);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // 初期スクロール位置をチェック
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (search && isLoaded) {
      anchorScroll(`#${search}`, offset);
    }
  }, [isLoaded, offset, search]);

  return (
    <header
      className="border-b border-gray-light fixed top-0 bg-white z-999 w-full transition-top duration-200 md:border-t-[3px] md:border-primary md:shadow-[0_4px_4px_rgba(194,194,194,0.3)] md:border-b-0"
      data-mvinview={isVisible}
      id={pageId}
      style={{ top: pageId === "top" && !isVisible ? "-74px" : 0 }}
    >
      <Inner className="py-0!">
        <div className="flex items-center justify-between h-[60px] relative md:h-[70px]">
          <div className="w-[120px] md:w-[150px]">
            <div>
              <a href="/">
                <img
                  alt=""
                  className="h-auto w-full"
                  height="42"
                  src="/img/head_logo.png"
                  width="128"
                />
              </a>
            </div>
          </div>
          {pageId !== "top" && (
            <div className="w-[140px] absolute right-10 top-3 md:hidden">
              <ReserveLine />
            </div>
          )}
          <div className="hidden md:flex flex-1 justify-end">
            {headerMenuList && (
              <ul className="flex">
                {headerMenuList.map((x) => (
                  <li className="text-14 text-center" key={x.title}>
                    {pageId === "top" && x.title === "サロンについて" ? (
                      <div
                        className="flex items-center justify-center h-[60px] px-4 py-2 cursor-pointer hover:text-primary"
                        onClick={(event) => anchorScroll("#about", 60, event)}
                      >
                        {x.title}
                      </div>
                    ) : (
                      <a
                        className="flex items-center justify-center h-[60px] px-4 py-2 cursor-pointer hover:text-primary"
                        href={x.link}
                      >
                        {x.title}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="md:hidden relative">
            <button
              aria-label="メニュー"
              className="fixed top-0 right-0 flex h-[60px] w-[60px] justify-center items-center z-90"
              data-open={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span
                className={`block h-[3px] w-[25px] rounded bg-primary absolute top-0 bottom-0 m-auto transition-opacity duration-400 ${isOpen ? "opacity-0" : ""}`}
                data-open={isOpen}
              ></span>
              <span
                className={`block h-[3px] w-[25px] rounded bg-primary absolute top-[18px] transition-transform duration-400 ${isOpen ? "top-[28px] rotate-45" : ""}`}
              ></span>
              <span
                className={`block h-[3px] w-[25px] rounded bg-primary absolute bottom-[18px] transition-transform duration-400 ${isOpen ? "bottom-[29px] -rotate-45" : ""}`}
              ></span>
            </button>
            {headerMenuList && (
              <>
                <div
                  className={`fixed h-screen w-full bg-black opacity-80 top-0 left-0 transition-all duration-500 ${isOpen ? "block" : "hidden"}`}
                  onClick={() => setIsOpen(!isOpen)}
                ></div>
                <div
                  className={`fixed w-[300px] h-screen top-0 right-0 bg-white transition-transform duration-400 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
                >
                  <ul className="mt-[51px] border-t border-dashed border-gray-light">
                    <li className="border-b border-dashed border-gray-light">
                      <a
                        className="block text-[#333] no-underline p-4 pl-8 bg-[url('/img/icon_plus.png')] bg-[length:10px] bg-position-[16px] bg-no-repeat"
                        href="/"
                      >
                        HOME
                      </a>
                    </li>
                    {headerMenuList.map((x) => (
                      <li
                        className="border-b border-dashed border-gray-light"
                        key={x.title}
                      >
                        {pageId === "top" && x.title === "サロンについて" ? (
                          <div
                            className="block text-base no-underline p-4 pl-8 bg-[url('/img/icon_plus.png')] bg-[length:10px] bg-position-[16px] bg-no-repeat cursor-pointer"
                            onClick={(event) => {
                              anchorScroll("#about", 60, event);
                              setIsOpen(!isOpen);
                            }}
                          >
                            {x.title}
                          </div>
                        ) : (
                          <a
                            className="block text-base no-underline p-4 pl-8 bg-[url('/img/icon_plus.png')] bg-[length:10px] bg-position-[16px] bg-no-repeat cursor-pointer"
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
      </Inner>
    </header>
  );
};
