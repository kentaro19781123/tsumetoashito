"use client";

import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
// Tailwind CSSリファクタ: vanilla-extract参照を削除
import { mvInViewAtom } from "@/app/_store/atom";

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
      <section
        className="relative mb-6 border-t-[3px] border-[#e46ca3] bg-[url('/img/sp_mv_bg.webp')] bg-no-repeat bg-[length:100%_auto] md:bg-[url('/img/pc_mv_bg.webp')] md:bg-cover w-full max-w-full mx-auto"
        data-ref={mvInView}
        ref={ref}
      >
        <h1 className="w-[55%] pt-[13%] pl-[8%] md:w-[450px] md:mt-20 md:ml-[70px] md:pt-0 md:pl-0">
          <img
            alt="爪甲鉤彎症（そうこうこうわんしょう）の経験者が開いたフットケアサロン 爪と足と"
            className="w-full h-auto"
            src="/img/logo.png"
            width="207"
          />
        </h1>
        <h3 className="w-[91%] mx-auto pt-[34%] md:w-[650px] md:pt-[230px]">
          <img
            alt="このような足爪トラブルで悩んでいませんか？ぜーんぶ爪甲鉤彎症（そうこうこうわんしょう）です。"
            className="w-full h-auto"
            src="/img/mv_bottom.png"
            width="340"
          />
        </h3>

        <div className="w-[93%] pt-[5%] pl-[4%] md:w-[540px] md:pt-0 md:ml-[70px] md:mt-[30px]">
          <img
            alt="足の爪が厚くて爪切りで爪が切れない"
            className="w-full h-auto"
            src="/img/bubble_1.png"
            width="348"
          />
        </div>

        <div className="w-[96%] pt-[3%] pl-[4%] md:w-[600px] md:pt-0 md:ml-[370px]">
          <img
            alt="皮膚科を廻ったけど治らないと言われた。諦めなきゃダメなの？"
            className="w-full h-auto"
            src="/img/bubble_2.png"
            width="355"
          />
        </div>

        <div className="w-[97%] pt-[4%] pl-[2.5%] md:w-[610px] md:pt-0 md:ml-[170px] md:mt-[10px]">
          <img
            alt="足の爪が痛くて靴が履けない。どうしたらいいの？"
            className="w-full h-auto"
            src="/img/bubble_3.png"
            width="360"
          />
        </div>
      </section>
    </>
  );
};
