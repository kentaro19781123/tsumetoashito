"use client";

import { useAtom } from "jotai";
import { cssStyle } from "./footer-button.css";
import { ReserveLine } from "@/component/common/ReserveButton/ReserveLine";
import { ReserveMail } from "@/component/common/ReserveButton/ReserveMail";
import { mvInViewAtom } from "@/store/atom";

type Props = {
  pageId: string;
};

export const FooterButton: React.FC<Props> = ({ pageId }) => {
  const [mvInView] = useAtom(mvInViewAtom);
  return (
    <div className={cssStyle.section} data-id={pageId} data-mvinview={mvInView}>
      <div className={cssStyle.buttonLink}>
        <ReserveLine />
      </div>
      <div className={cssStyle.buttonLink}>
        <ReserveMail />
      </div>
    </div>
  );
};
