"use client";

import { useAtom } from "jotai";
import { cssStyle } from "./footer-button.css";
import { mvInViewAtom } from "@/store/atom";

type Props = {
  pageId: string;
};

export const FooterButton: React.FC<Props> = ({ pageId }) => {
  const [mvInView] = useAtom(mvInViewAtom);
  return (
    <div className={cssStyle.section} data-id={pageId} data-mvinview={mvInView}>
      <div className={cssStyle.buttonLink}>
        <a href="">
          <img alt="LINEで予約" src="/img/line_btn.png" width="110" />
        </a>
      </div>
      <div className={cssStyle.buttonLink}>
        <a href="">
          <img alt="MAILで予約" src="/img/mail_btn.png" width="110" />
        </a>
      </div>
    </div>
  );
};
