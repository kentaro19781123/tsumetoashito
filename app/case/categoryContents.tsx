"use client";

import React from "react";
// Tailwind CSSリファクタ: vanilla-extract参照を削除
import { Title } from "@/app/_component/Title";
import { treatmentContentsType } from "@/types";

type Props = {
  itemsArray: treatmentContentsType[][];
};
export const CategoryContents: React.FC<Props> = ({ itemsArray }) => {
  return (
    <>
      {itemsArray.map((byCategoryArray, index) => (
        <section
          className="pb-8 mb-8 border-b border-gray-300 last:border-b-0"
          id={byCategoryArray[0].treatmentCategory}
          key={index}
        >
          <Title
            Tag="h2"
            level={2}
            text={byCategoryArray[0].treatmentCategory}
          />
          <div className="flex flex-wrap gap-4 md:gap-8">
            {byCategoryArray.map((item, index) => (
              <React.Fragment key={index}>
                <a
                  className="w-[calc((100%_-_16px)_/_2)] cursor-pointer mb-4 hover:opacity-80 md:mb-0 md:min-w-[200px] md:w-[calc((100%_-_(32px_*_3))_/_4)]"
                  href={`./${item.id}/`}
                >
                  <div>
                    <img
                      alt={item.treatmentTitle}
                      className="w-full h-full"
                      height={item.treatmentPhoto.height}
                      src={item.treatmentPhoto.url}
                      width={item.treatmentPhoto.width}
                    />
                  </div>
                  <div>
                    <h3 className="mt-2 text-[16px] font-normal">
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
