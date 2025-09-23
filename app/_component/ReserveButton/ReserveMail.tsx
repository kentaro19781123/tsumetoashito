import React from "react";
// Tailwind CSSリファクタ: vanilla-extract参照を削除

export const ReserveMail: React.FC = () => {
  return (
    <div>
      <a
        className="min-h-[36px] md:min-h-[60px] rounded-lg flex items-center px-0 py-[6px] justify-center gap-1 bg-orange"
        href="/contact/"
      >
        <span className="w-[25px]">
          <img
            alt="MAILから"
            className="w-full"
            src="/img/mail_logo.png"
            width="30"
          />
        </span>
        <span className="text-14 md:text-24 text-white font-bold pb-[2px]">
          MAILから
        </span>
      </a>
    </div>
  );
};
