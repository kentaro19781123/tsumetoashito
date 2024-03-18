import React from "react";
import { cssStyle } from "./reserve-button.css";

export const ReserveLine: React.FC = () => {
  return (
    <div className={cssStyle.wrap}>
      <a
        className={`${cssStyle.button} ${cssStyle.line}`}
        href="https://lin.ee/D0Omvnr"
        target="_blank"
      >
        <span className={cssStyle.iconLine}>
          <img
            alt="LINEから予約"
            className={cssStyle.icon}
            src="/img/line_logo.png"
            width="30"
          />
        </span>
        <span className={cssStyle.text}>LINEから予約</span>
      </a>
    </div>
  );
};
