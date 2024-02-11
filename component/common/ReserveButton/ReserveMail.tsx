import React from "react";
import { cssStyle } from "./reserve-button.css";

export const ReserveMail: React.FC = () => {
  return (
    <div className={cssStyle.wrap}>
      <a className={`${cssStyle.button} ${cssStyle.mail}`} href="#">
        <span className={cssStyle.iconMail}>
          <img
            alt="MAILで予約"
            className={cssStyle.icon}
            src="/img/mail_logo.png"
            width="30"
          />
        </span>
        <span className={cssStyle.text}>MAILで予約</span>
      </a>
    </div>
  );
};
