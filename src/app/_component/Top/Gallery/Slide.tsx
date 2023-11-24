"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { cssStyle } from "./gallery.css";
import { ButtonBorder } from "@/app/_component/common/ButtonBorder";
import { useOverflow } from "@/app/_hooks/useOverflow";

type Props = {
  items: item[];
};

type item = {
  title: string;
  category: string[];
  color: string;
  image?: ImageType;
  text?: string;
};
type ImageType = {
  url: string;
  height: number;
  width: number;
};

export const Slide: React.FC<Props> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  // カテゴリを抽出
  const category = Array.from(new Set(items.flatMap((x) => x.category)));

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
        navigation
        // loop
        modules={[Navigation, Pagination]}
        // pagination={{ clickable: true }}
        slidesPerView="auto"
        breakpoints={{
          769: {
            spaceBetween: 40,
          },
        }}
        spaceBetween={20}
        className={cssStyle.swiper}
      >
        {category.map((x, index) => (
          <SwiperSlide key={index} className={cssStyle.swiperSlide}>
            <h3
              className={cssStyle.swiperItem}
              // css={[swiperItem, { backgroundColor: "#eee" }]}
              id={`galleryItem${index + 1}`}
              onClick={() => modalOpen(`galleryItem${index + 1}`)}
            >
              {x}
            </h3>
            <div className={cssStyle.ButtonWrap}>
              <ButtonBorder buttonText="もっと見る" url="./" />
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
                {/* 画像の横幅500px PCの場合 */}
                {/* <p>{z.photo && <img src={z.photo} alt={z.title} />}</p> */}
                {/* {z.text && (
                  <div dangerouslySetInnerHTML={{ __html: z.text }}></div>
                )} */}
                {/* {items.map((z, index) =>
                  z.category[0] === x
                    ? z.text &&
                      z.text && (
                        <div className={cssStyle.containerItem} key={index}>
                          <h4 className={cssStyle.itemTitle}>{z.title}</h4>
                          {z.image && (
                            <p className={cssStyle.itemImage}>
                              {z.category[0]}
                              <Image
                                src={z.image.url}
                                alt={z.title}
                                width={z.image.width}
                                height={z.image.height}
                              />
                            </p>
                          )}
                          <div
                            dangerouslySetInnerHTML={{ __html: z.text }}
                          ></div>
                        </div>
                      )
                    : ""
                )} */}
                {items
                  .filter((z) => z.category[0] === x)
                  .map((y, index) =>
                    index < 3 ? (
                      <div className={cssStyle.containerItem} key={index}>
                        <h4 className={cssStyle.itemTitle}>{y.title}</h4>
                        {y.image && (
                          <p className={cssStyle.itemImage}>
                            <Image
                              src={y.image.url}
                              alt={y.title}
                              width={y.image.width}
                              height={y.image.height}
                            />
                          </p>
                        )}
                        {y.text && (
                          <div
                            dangerouslySetInnerHTML={{ __html: y.text }}
                          ></div>
                        )}
                      </div>
                    ) : (
                      ""
                    )
                  )}
                <div className={cssStyle.dialogMoreButtonWrap}>
                  <ButtonBorder buttonText="もっと見る" url="./" />
                </div>
                <div
                  className={cssStyle.closeButton}
                  onClick={() => modalCloseButton(`galleryItem${index + 1}`)}
                ></div>
              </div>
            </dialog>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

{
  /* <SwiperSlide key={index} className={cssStyle.swiperSlide}>
              <div
                className={cssStyle.swiperItem}
                // css={[swiperItem, { backgroundColor: "#eee" }]}
                id={`galleryItem${index + 1}`}
                onClick={() => modalOpen(`galleryItem${index + 1}`)}
              >
                {z.title}
              </div>
              <div className={cssStyle.ButtonWrap}>
                <ButtonBorder buttonText="もっと見る" url="./" />
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

                  <p>{z.photo && <img src={z.photo} alt={z.title} />}</p>
                  {z.text && (
                    <div dangerouslySetInnerHTML={{ __html: z.text }}></div>
                  )}
                  <div className={cssStyle.dialogMoreButtonWrap}>
                    <ButtonBorder buttonText="もっと見る" url="./" />
                  </div>
                  <div
                    className={cssStyle.closeButton}
                    onClick={() => modalCloseButton(`galleryItem${index + 1}`)}
                  ></div>
                </div>
              </dialog>
            </SwiperSlide> */
}
