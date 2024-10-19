import React from "react";
import { cssStyle } from "./about.css";
import { aboutType } from "@/types";

type Props = {
  data: aboutType;
};

export const AboutContents: React.FC<Props> = ({ data }) => {
  return (
    <section className={cssStyle.section} id="about">
      <div className={cssStyle.inner}>
        <h2 className={cssStyle.title}>{data.title}</h2>
        <div className={cssStyle.aboutContent}>
          <div
            className="richEditor"
            dangerouslySetInnerHTML={{
              __html: data.contentBlock[0].aboutText,
            }}
          />
          <div className={cssStyle.photoContent}>
            {/* <div className={cssStyle.photo}>
              <img
                className={cssStyle.photoImg}
                src={data.contentBlock[0].photoLeft.url}
                alt=""
              />
              <div
                className="richEditor"
                dangerouslySetInnerHTML={{
                  __html: data.contentBlock[0].captionLeft,
                }}
              />
            </div> */}
            <div className={cssStyle.photo}>
              <img
                alt=""
                className={cssStyle.photoImg}
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
      </div>
    </section>
  );
};
