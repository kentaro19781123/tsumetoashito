"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { cssStyle } from "./case.css";
import { ButtonBorder } from "@/component/common/ButtonBorder";
import { metaCase } from "@/const/menu";
import { useOverflow } from "@/hooks/useOverflow";
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
    dialogEl?.showModal();
    if (containerEl) containerEl.scrollTop = 0;

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
        className={cssStyle.swiper}
        modules={[Navigation, Pagination]}
        navigation
        slidesPerView="auto"
        spaceBetween={15}
      >
        {category.map((categoryDetail, index) =>
          itemsCategoryFix.includes(categoryDetail.categoryItem) ? (
            <SwiperSlide className={cssStyle.swiperSlide} key={index}>
              <div
                className={cssStyle.circle}
                onClick={() => modalOpen(`galleryItem${index + 1}`)}
              >
                {categoryDetail.categoryPhoto && (
                  <div className={cssStyle.swiperImgWrap}>
                    <img
                      alt={categoryDetail.categoryItem}
                      className={cssStyle.swiperImg}
                      height={categoryDetail.categoryPhoto.height}
                      src={categoryDetail.categoryPhoto.url}
                      width={categoryDetail.categoryPhoto.width}
                    />
                  </div>
                )}
                <h3
                  className={cssStyle.swiperItem}
                  id={`galleryItem${index + 1}`}
                >
                  {categoryDetail.categoryItem}
                </h3>
                {categoryDetail.categoryKana && (
                  <p className={cssStyle.swiperItemKana}>
                    {categoryDetail.categoryKana}
                  </p>
                )}
              </div>

              <div className={cssStyle.ButtonWrap}>
                <ButtonBorder
                  buttonText="もっと見る"
                  url={`${metaCase.link}?pageId=${categoryDetail.categoryItem}`}
                />
              </div>
              <dialog
                className={cssStyle.dialog}
                data-gallery-item={`galleryItem${index + 1}`}
                onClick={(e) => modalClose(e, `galleryItem${index + 1}`)}
              >
                <div
                  className={cssStyle.container}
                  data-gallery-container={`galleryItem${index + 1}`}
                >
                  {items
                    .filter(
                      (z) => z.treatmentCategory === categoryDetail.categoryItem
                    )
                    .map((y, index) =>
                      index < 3 ? (
                        <div className={cssStyle.containerItem} key={index}>
                          <h4 className={cssStyle.itemTitle}>
                            {y.treatmentTitle}
                          </h4>
                          {y.treatmentPhoto && (
                            <div className={cssStyle.itemImage}>
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
                  <div className={cssStyle.dialogMoreButtonWrap}>
                    <ButtonBorder
                      buttonText="もっと見る"
                      url={`${metaCase.link}?pageId=${categoryDetail.categoryItem}`}
                    />
                  </div>
                  <div
                    className={cssStyle.closeButton}
                    onClick={() => modalCloseButton(`galleryItem${index + 1}`)}
                  ></div>
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
