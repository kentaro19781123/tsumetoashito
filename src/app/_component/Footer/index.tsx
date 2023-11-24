import React from "react";
import { cssStyle } from "./footer.css";

export const Footer: React.FC = () => {
  return (
    <section className={cssStyle.section}>
      <div className={cssStyle.inner}>&copy;コピーライト</div>
    </section>
  );
};
