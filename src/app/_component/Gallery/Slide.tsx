"use client";

// import { css } from "@emotion/react";
import React, { useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { cssStyle } from "./gallery.css";
import { useOverflow } from "@/app/_hooks/useOverflow";
// import { Mixin } from "@/styles/mixin";
// import { Color, Font } from "@/styles/variables";

type Props = {
  items: item[];
};

type item = {
  title: string;
  color: string;
  photo?: string;
  content?: string;
};

export const Slide: React.FC<Props> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  useOverflow(isOpen);
  const modalOpen = (id: string) => {
    const dialogEl = document.querySelector<HTMLDialogElement>(
      `[data-gallery-item=${id}]`
    );
    dialogEl?.showModal();
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
        {items.map((x, index) => (
          <SwiperSlide key={index} className={cssStyle.swiperSlide}>
            <div
              className={cssStyle.swiperItem}
              // css={[swiperItem, { backgroundColor: "#eee" }]}
              id={`galleryItem${index + 1}`}
              onClick={() => modalOpen(`galleryItem${index + 1}`)}
            >
              {x.title}
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
                {/* <p>{x.photo && <img src={x.photo} alt={x.title} />}</p> */}
                {x.content && (
                  <div dangerouslySetInnerHTML={{ __html: x.content }}></div>
                )}
                <div
                  className={cssStyle.closeButton}
                  onClick={() => modalCloseButton(`galleryItem${index + 1}`)}
                ></div>
              </div>
            </dialog>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
          <img src="https://placehold.jp/700x450.png?text=1" alt="1" />
          なんちゃら<br />なんちゃら症
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placehold.jp/700x450.png?text=2" alt="2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placehold.jp/700x450.png?text=3" alt="3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placehold.jp/700x450.png?text=4" alt="4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://placehold.jp/700x450.png?text=5" alt="5" />
        </SwiperSlide>
        <SwiperSlide>
            <img
              src="https://placehold.jp/700x450.png?text=6"
              alt="6"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://placehold.jp/700x450.png?text=7"
              alt="7"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://placehold.jp/700x450.png?text=8"
              alt="8"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://placehold.jp/700x450.png?text=9"
              alt="9"
            />
          </SwiperSlide> */}
      </Swiper>
    </div>
  );
};
