"use client";

import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { cssStyle } from "./mv.css";
import { mvInViewAtom } from "@/store/atom";

export const Mv: React.FC = () => {
  const [mvInView, setMvInView] = useAtom(mvInViewAtom);
  const { ref, inView } = useInView({
    initialInView: true,
  });

  useEffect(() => {
    setMvInView(inView);
  }, [inView, setMvInView]);
  return (
    <>
      <section className={cssStyle.mvWrap} data-ref={mvInView} ref={ref}>
        <h1 className={cssStyle.logoWrap}>
          <img
            alt="爪甲鉤彎症（そうこうこうわんしょう）の経験者が開いたフットケアサロン 爪と足と"
            className={cssStyle.image}
            src="/img/logo.png"
            width="207"
          />
        </h1>
        <h3 className={cssStyle.read}>
          <img
            alt="このような足爪トラブルで悩んでいませんか？ぜーんぶ爪甲鉤彎症（そうこうこうわんしょう）です。"
            className={cssStyle.image}
            src="/img/mv_bottom.png"
            width="340"
          />
        </h3>

        <div className={cssStyle.bubble1}>
          <img
            alt="足の爪が厚くて爪切りで爪が切れない"
            className={cssStyle.image}
            src="/img/bubble_1.png"
            width="348"
          />
        </div>

        <div className={cssStyle.bubble2}>
          <img
            alt="皮膚科を廻ったけど治らないと言われた。諦めなきゃダメなの？"
            className={cssStyle.image}
            src="/img/bubble_2.png"
            width="355"
          />
        </div>

        <div className={cssStyle.bubble3}>
          <img
            alt="足の爪が痛くて靴が履けない。どうしたらいいの？"
            className={cssStyle.image}
            src="/img/bubble_3.png"
            width="360"
          />
        </div>
      </section>
    </>
  );
};
