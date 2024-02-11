"use client";

import React from "react";
import { cssStyle } from "./page.css";
import { Title } from "@/component/common/Title";
import { treatmentContentsType } from "@/types";

type Props = {
  itemsArray: treatmentContentsType[][];
};
export const CategoryContents: React.FC<Props> = ({ itemsArray }) => {
  return (
    <>
      {itemsArray.map((byCategoryArray, index) => (
        <section
          className={cssStyle.caseSection}
          id={byCategoryArray[0].treatmentCategory}
          key={index}
        >
          <Title
            Tag="h2"
            level={2}
            text={byCategoryArray[0].treatmentCategory}
          />
          <div className={cssStyle.caseContent}>
            {byCategoryArray.map((item, index) => (
              <React.Fragment key={index}>
                <a className={cssStyle.caseItem} href={`./${item.id}/`}>
                  <div className={cssStyle.casePhotoWrap}>
                    <img
                      alt={item.treatmentTitle}
                      className={cssStyle.casePhoto}
                      height={item.treatmentPhoto.height}
                      src={item.treatmentPhoto.url}
                      width={item.treatmentPhoto.width}
                    />
                  </div>
                  <div>
                    <h3 className={cssStyle.caseDetailTitle}>
                      {item.treatmentTitle}
                    </h3>
                  </div>
                </a>
              </React.Fragment>
            ))}
          </div>
        </section>
      ))}
    </>
  );
};
