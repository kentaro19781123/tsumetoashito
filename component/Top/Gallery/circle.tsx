"use client";

import React, { useState } from "react";
import "swiper/swiper-bundle.css";
import { cssStyle } from "./gallery.css";
import { ButtonBorder } from "@/component/common/ButtonBorder";
import { metaCase } from "@/const/menu";
import { useOverflow } from "@/hooks/useOverflow";

type Props = {
  categoryName: string;
  index: number;
};

export const Circle: React.FC<Props> = ({ categoryName, index }) => {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <>
      <h3
        className={cssStyle.swiperItem}
        id={`galleryItem${index + 1}`}
        onClick={() => modalOpen(`galleryItem${index + 1}`)}
      >
        {categoryName}
      </h3>
      <div className={cssStyle.ButtonWrap}>
        <ButtonBorder
          buttonText="もっと見る"
          url={`${metaCase.link}?pageId=list${index + 1}`}
        />
      </div>
    </>
  );
};
