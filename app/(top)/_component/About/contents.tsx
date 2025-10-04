import React from "react";
import { Inner } from "@/app/_component/Inner";
import { aboutType } from "@/types";

type Props = {
  data: aboutType;
};

export const AboutContents: React.FC<Props> = ({ data }) => {
  return (
    <section className="px-4 md:px-0" id="about">
      <Inner className="md:p-12 bg-(--color-primary-bg)">
        <h2 className="text-2xl md:text-38 mb-4 md:mb-6 text-(--color-primary-font) font-bold">
          {data.title}
        </h2>
        <div className="md:flex md:gap-6">
          <div
            className="richEditor"
            dangerouslySetInnerHTML={{
              __html: data.contentBlock[0].aboutText,
            }}
          />
          <div className="flex gap-[3px] mt-4 justify-center md:gap-[10px] md:mt-0 md:flex-shrink-0">
            {/* 左写真を使う場合は下記を有効化
            <div className="w-3/5 md:w-full md:max-w-[210px] text-[0.875rem]">
              <img
                className="w-full"
                src={data.contentBlock[0].photoLeft.url}
                alt=""
              />
              <div
                className="richEditor"
                dangerouslySetInnerHTML={{
                  __html: data.contentBlock[0].captionLeft,
                }}
              />
            </div>
            */}
            <div className="w-3/5 md:w-full md:max-w-[210px] text-14">
              <img
                alt=""
                className="w-full"
                src={data.contentBlock[0].photoRight.url}
              />
              <div
                className="richEditor"
                dangerouslySetInnerHTML={{
                  __html: data.contentBlock[0].captionRight,
                }}
              />
            </div>
          </div>
        </div>
      </Inner>
    </section>
  );
};
