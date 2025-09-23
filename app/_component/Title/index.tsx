import React from "react";
// Tailwind CSSリファクタ: vanilla-extract参照を削除

type Props = {
  Tag?: "h1" | "h2";
  level?: 1 | 2;
  text: string;
};

export const Title: React.FC<Props> = ({ Tag = "h1", level = 1, text }) => {
  return (
    <Tag
      className={
        level === 1
          ? "text-24 md:text-28 mb-6 ml-[-16px] bg-[url('/img/icon_plus.png')] bg-left bg-no-repeat bg-[length:25px] pl-[30px]"
          : "text-20 md:text-24 mb-2 md:mb-6 flex"
      }
    >
      {level === 2 && (
        <span className="inline-block text-primary text-16 flex-shrink-0 w-5 pt-[2px] md:pt-1">
          ●
        </span>
      )}
      {text}
    </Tag>
  );
};
