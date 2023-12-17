"use client";

import React, { useState } from "react";
import { cssStyle } from "./page.css";
import { Footer } from "@/component/Footer";
import { Header } from "@/component/Header";
import { Title } from "@/component/common/Title";
import { useOverflow } from "@/hooks/useOverflow";
import { client } from "@/libs/client";
import { treatmentCategoryType, treatmentType } from "@/types";

const getContents = async () => {
  const response = await client.get<treatmentType>({
    customRequestInit: {
      cache: "no-store", // キャッシュを利用せずに常に新しいデータを取得する
    },
    endpoint: "treatment",
  });
  return response.contents;
};

const getCategoryContents = async () => {
  const response = await client.get<treatmentCategoryType>({
    customRequestInit: {
      cache: "no-store", // キャッシュを利用せずに常に新しいデータを取得する
    },
    endpoint: "shopinfo",
    contentId: "7zu-0755dx",
    queries: { fields: "contentBlock" },
  });
  return response.contentBlock[0].categoryList;
};

export default async function GalleryList() {
  const data = await getContents();
  const categoryData = await getCategoryContents();
  const categoryArray = categoryData.map((x) => x.categoryItem);

  // const itemsCategory = data.map((x) => x.treatmentCategory);
  // const itemsCategoryFix = Array.from(new Set(itemsCategory));
  const itemsArray = categoryArray
    .map((categoryName) =>
      data.filter((x) => x.treatmentCategory === categoryName)
    )
    .filter((x) => x.length != 0);

  // モーダル（後で共通化する）
  const [isOpen, setIsOpen] = useState(false);
  useOverflow(isOpen);
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
    <>
      <main>
        <Header pageId="menu" />
        <div className={cssStyle.section}>
          <div className={cssStyle.inner}>
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
                      <div className={cssStyle.caseItem}>
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
                          <div
                            className={`${cssStyle.caseDetail} richEditor caseTextEllipsis`}
                            dangerouslySetInnerHTML={{
                              __html: item.treatmentText,
                            }}
                          />
                        </div>
                      </div>

                      {/* モーダル（あとで共通化する） */}
                      <dialog
                        className={cssStyle.dialog}
                        data-gallery-item={`galleryItem${index + 1}`}
                        onClick={(e) =>
                          modalClose(e, `galleryItem${index + 1}`)
                        }
                      >
                        <div
                          className={cssStyle.container}
                          data-gallery-container={`galleryItem${index + 1}`}
                        >
                          <div className={cssStyle.containerItem} key={index}>
                            <h4 className={cssStyle.itemTitle}>
                              {y.treatmentTitle}
                            </h4>
                            {y.treatmentPhoto && (
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
                      </dialog>
                    </React.Fragment>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
