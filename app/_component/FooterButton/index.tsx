"use client";

import { useAtom } from "jotai";
// Tailwind CSSリファクタ: vanilla-extract参照を削除
import { ReserveLine } from "@/app/_component/ReserveButton/ReserveLine";
import { ReserveMail } from "@/app/_component/ReserveButton/ReserveMail";
import { mvInViewAtom } from "@/app/_store/atom";

type Props = {
  pageId: string;
};

export const FooterButton: React.FC<Props> = ({ pageId }) => {
  const [mvInView] = useAtom(mvInViewAtom);
  return (
    <div
      className="fixed z-20 w-full flex justify-center bg-white/80 py-2 shadow-[0_-2px_4px_rgba(194,194,194,0.3)] transition-bottom duration-200 bottom-0"
      data-id={pageId}
      data-mvinview={mvInView}
      style={
        pageId === "top" && mvInView
          ? { bottom: window.innerWidth >= 769 ? "-80px" : "-61px" }
          : { bottom: 0 }
      }
    >
      <div className="w-[130px] md:w-[230px]">
        <ReserveLine />
      </div>
      <div className="w-[130px] md:w-[230px] ml-4">
        <ReserveMail />
      </div>
    </div>
  );
};
