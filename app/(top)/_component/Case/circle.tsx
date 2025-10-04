"use client";

import React, { useState } from "react";
import "swiper/swiper-bundle.css";
import { ButtonBorder } from "@/app/_component/ButtonBorder";
import { metaCase } from "@/app/_const/menu";
import { useOverflow } from "@/app/_hooks/useOverflow";

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
        className="whitespace-pre-wrap text-center text-16"
        id={`galleryItem${index + 1}`}
        onClick={() => modalOpen(`galleryItem${index + 1}`)}
      >
        {categoryName}
      </h3>
      <div className="w-4/5 mx-auto mt-4 md:mt-6">
        <ButtonBorder
          buttonText="もっと見る"
          url={`${metaCase.link}?pageId=list${index + 1}`}
        />
      </div>
    </>
  );
};
