"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
// Tailwind CSSリファクタ: vanilla-extract参照を削除
import { ButtonBorder } from "@/app/_component/ButtonBorder";
import { metaCase } from "@/app/_const/menu";
import { useOverflow } from "@/app/_hooks/useOverflow";
import { treatmentContentsType, categoryItem } from "@/types";

type Props = {
  items: treatmentContentsType[];
  category: categoryItem[];
};

export const Slide: React.FC<Props> = ({ items, category }) => {
  const [isOpen, setIsOpen] = useState(false);
  // カテゴリを抽出
  const itemsCategory = items.map((x) => x.treatmentCategory);
  const itemsCategoryFix = Array.from(new Set(itemsCategory));

  useOverflow(isOpen);
  const modalOpen = (id: string) => {
    const dialogEl = document.querySelector<HTMLDialogElement>(
      `[data-gallery-item=${id}]`
    );
    const containerEl = document.querySelector<HTMLDivElement>(
      `[data-gallery-container=${id}]`
    );
    // if (containerEl) containerEl.scrollTo({ top: 0 });
    dialogEl?.showModal();
    if (containerEl) containerEl.scrollTo({ top: 0 });
    setIsOpen(true);
  };

  const modalClose = (
    e: React.MouseEvent<HTMLDialogElement, MouseEvent>,
    id: string
  ) => {
    const dialogEl = document.querySelector<HTMLDialogElement>(
      `[data-gallery-item=${id}]`
    );
    if (!(e.target instanceof HTMLDialogElement)) return null;
    if (e.target.closest(`[data-gallery-container=${id}]`) === null) {
      dialogEl?.close();
      setIsOpen(false);
    }
  };

  const modalCloseButton = (id: string) => {
    const dialogEl = document.querySelector<HTMLDialogElement>(
      `[data-gallery-item=${id}]`
    );
    dialogEl?.close();
    setIsOpen(false);
  };

  return (
    <div>
      <Swiper
        breakpoints={{
          769: {
            spaceBetween: 40,
          },
        }}
        className="px-4 md:px-0"
        modules={[Navigation, Pagination]}
        navigation
        slidesPerView="auto"
        spaceBetween={15}
      >
        {category.map((categoryDetail, index) =>
          itemsCategoryFix.includes(categoryDetail.categoryItem) ? (
            <SwiperSlide className="w-[150px]! md:w-[180px]!" key={index}>
              <div
                className="w-[150px] h-[150px] md:w-[180px] md:h-[180px] rounded-full flex flex-col items-center justify-center bg-[url('/img/case_bg.png')] bg-no-repeat bg-[length:180px] cursor-pointer p-4"
                onClick={() => modalOpen(`galleryItem${index + 1}`)}
              >
                {categoryDetail.categoryPhoto && (
                  <div className="rounded-[35px] border-4 border-white overflow-hidden w-[70px] h-[70px] mb-1 md:rounded-[40px] md:w-[80px] md:h-[80px] md:mb-2">
                    <img
                      alt={categoryDetail.categoryItem}
                      className="w-full h-auto"
                      height={categoryDetail.categoryPhoto.height}
                      src={categoryDetail.categoryPhoto.url}
                      width={categoryDetail.categoryPhoto.width}
                    />
                  </div>
                )}
                <h3
                  className="whitespace-pre-wrap text-center text-16"
                  id={`galleryItem${index + 1}`}
                >
                  {categoryDetail.categoryItem}
                </h3>
                {categoryDetail.categoryKana && (
                  <p className="text-10 mt-1">{categoryDetail.categoryKana}</p>
                )}
              </div>

              <div className="w-4/5 mx-auto mt-4 md:mt-6">
                <ButtonBorder
                  buttonText="もっと見る"
                  url={`${metaCase.link}?pageId=${categoryDetail.categoryItem}`}
                />
              </div>
              <dialog
                className="border-none overflow-visible rounded-lg appearance-none w-[90%] h-[80%] py-4 m-auto md:w-[700px] md:h-[80%]"
                data-gallery-item={`galleryItem${index + 1}`}
                onClick={(e) => modalClose(e, `galleryItem${index + 1}`)}
              >
                <div
                  className="w-full h-full leading-[1.5] px-4 box-border overflow-scroll"
                  data-gallery-container={`galleryItem${index + 1}`}
                >
                  {items
                    .filter(
                      (z) => z.treatmentCategory === categoryDetail.categoryItem
                    )
                    .map((y, index) =>
                      index < 3 ? (
                        <div
                          className="mt-6 pt-6 border-t border-gray-300 first:mt-0 first:pt-0 first:border-t-0"
                          key={index}
                        >
                          <h4 className="text-18 mb-4 bg-[url('/img/icon_plus.png')] bg-left bg-no-repeat bg-[length:18px] pl-6">
                            {y.treatmentTitle}
                          </h4>
                          {y.treatmentPhoto && (
                            <div className="mb-4 md:w-[500px] md:mx-auto md:mb-4">
                              <Image
                                alt={y.treatmentTitle}
                                height={y.treatmentPhoto.height}
                                src={y.treatmentPhoto.url}
                                width={y.treatmentPhoto.width}
                              />
                            </div>
                          )}
                          {y.treatmentText && (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: y.treatmentText,
                              }}
                            ></div>
                          )}
                        </div>
                      ) : (
                        ""
                      )
                    )}
                  <div className="w-3/5 mx-auto mt-10 mb-4 md:my-6">
                    <ButtonBorder
                      buttonText="もっと見る"
                      url={`${metaCase.link}?pageId=${categoryDetail.categoryItem}`}
                    />
                  </div>
                  <div
                    className="block cursor-pointer absolute -top-6 right-0 w-5 h-5"
                    onClick={() => modalCloseButton(`galleryItem${index + 1}`)}
                  >
                    <span className="absolute w-[3px] h-5 bg-white rotate-45 right-1/2" />
                    <span className="absolute w-[3px] h-5 bg-white -rotate-45 right-1/2" />
                  </div>
                </div>
              </dialog>
            </SwiperSlide>
          ) : (
            ""
          )
        )}
        {/* {dummyArray.map((_, index) => (
          <SwiperSlide className={cssStyle.swiperSlideNoEvent} key={index}>
            <div className={cssStyle.circle}>
              <h3 className={cssStyle.swiperItem}></h3>
            </div>
          </SwiperSlide>
        ))} */}
      </Swiper>
    </div>
  );
};
