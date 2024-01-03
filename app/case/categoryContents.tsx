"use client";

import React from "react";
import { cssStyle } from "./page.css";
import { Title } from "@/component/common/Title";
// import { useOverflow } from "@/hooks/useOverflow";
import { treatmentContentsType } from "@/types";

type Props = {
  itemsArray: treatmentContentsType[][];
};
export const CategoryContents: React.FC<Props> = ({ itemsArray }) => {
  // モーダル（後で共通化する）
  // const [isOpen, setIsOpen] = useState(false);
  // useOverflow(isOpen);
  // const modalOpen = (id: string) => {
  //   const dialogEl = document.querySelector<HTMLDialogElement>(
  //     `[data-gallery-item=${id}]`
  //   );
  //   const containerEl = document.querySelector<HTMLDivElement>(
  //     `[data-gallery-container=${id}]`
  //   );
  //   dialogEl?.showModal();
  //   if (containerEl) containerEl.scrollTop = 0;

  //   setIsOpen(true);
  // };

  // const modalClose = (
  //   e: React.MouseEvent<HTMLDialogElement, MouseEvent>,
  //   id: string
  // ) => {
  //   const dialogEl = document.querySelector<HTMLDialogElement>(
  //     `[data-gallery-item=${id}]`
  //   );
  //   if (!(e.target instanceof HTMLDialogElement)) return null;
  //   if (e.target.closest(`[data-gallery-container=${id}]`) === null) {
  //     dialogEl?.close();
  //     setIsOpen(false);
  //   }
  // };

  // const modalCloseButton = (id: string) => {
  //   const dialogEl = document.querySelector<HTMLDialogElement>(
  //     `[data-gallery-item=${id}]`
  //   );
  //   dialogEl?.close();
  //   setIsOpen(false);
  // };

  return (
    <>
      {itemsArray.map((byCategoryArray, index) => (
        <section
          id={`list${index + 1}`}
          key={index}
          className={cssStyle.caseSection}
        >
          <Title text={byCategoryArray[0].treatmentCategory} />
          <div className={cssStyle.caseContent}>
            {byCategoryArray.map((item, index) => (
              <React.Fragment key={index}>
                {/* <div
                  className={cssStyle.caseItem}
                  id={`galleryItem${index + 1}`}
                  onClick={() => modalOpen(`galleryItem${index + 1}`)}
                > */}
                <a href={`./${item.id}/`} className={cssStyle.caseItem}>
                  <div className={cssStyle.casePhotoWrap}>
                    <img
                      src={item.treatmentPhoto.url}
                      width={item.treatmentPhoto.width}
                      height={item.treatmentPhoto.height}
                      alt={item.treatmentTitle}
                      className={cssStyle.casePhoto}
                    />
                  </div>
                  <div>
                    <h3 className={cssStyle.caseDetailTitle}>
                      {item.treatmentTitle}
                    </h3>
                    {/* <div
                      className={`${cssStyle.caseDetail} richEditor caseTextEllipsis`}
                      dangerouslySetInnerHTML={{
                        __html: item.treatmentText,
                      }}
                    /> */}
                  </div>
                </a>
                {/* </div> */}

                {/* モーダル（あとで共通化する） */}
                {/* <dialog
                  className={cssStyle.dialog}
                  data-gallery-item={`galleryItem${index + 1}`}
                  onClick={(e) => modalClose(e, `galleryItem${index + 1}`)}
                >
                  <div
                    className={cssStyle.container}
                    data-gallery-container={`galleryItem${index + 1}`}
                  >
                    <div className={cssStyle.containerItem} key={index}>
                      <h4 className={cssStyle.itemTitle}>
                        {item.treatmentTitle}
                      </h4>
                      {item.treatmentPhoto && (
                        <p className={cssStyle.itemImage}>
                          <img
                            src={item.treatmentPhoto.url}
                            alt={item.treatmentTitle}
                            width={item.treatmentPhoto.width}
                            height={item.treatmentPhoto.height}
                          />
                        </p>
                      )}
                      {item.treatmentText && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.treatmentText,
                          }}
                        ></div>
                      )}
                    </div>
                    <div
                      className={cssStyle.closeButton}
                      onClick={() =>
                        modalCloseButton(`galleryItem${index + 1}`)
                      }
                    ></div>
                  </div>
                </dialog> */}
              </React.Fragment>
            ))}
          </div>
        </section>
      ))}
    </>
  );
};
