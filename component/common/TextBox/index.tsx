"use client";

// import { css } from "@emotion/react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import React from "react";
import { cssStyle } from "./textbox.css";

type Props = {
  text: string;
  align?: string;
};

export const TextBox: React.FC<Props> = ({ text, align }) => {
  const textAlign = align ? align : "left";
  return (
    <div
      className={cssStyle.wrap}
      style={assignInlineVars({ [cssStyle.textPosition]: textAlign })}
    >
      <div
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      />
    </div>
  );
};
