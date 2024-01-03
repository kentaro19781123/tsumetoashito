"use client";

// import Image from "next/image";
import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { cssStyle } from "./mv.css";
import { mvInViewAtom } from "@/store/atom";

export const Mv: React.FC = () => {
  // const refFirstRef = useRef(false);
  const [mvInView, setMvInView] = useAtom(mvInViewAtom);
  const { ref, inView } = useInView({
    initialInView: true,
  });
  // console.log(inView);
  useEffect(() => {
    setMvInView(inView);
  }, [inView, setMvInView]);
  return (
    <div className={cssStyle.mvWrap} ref={ref} data-ref={mvInView}>
      {/* <Image
        alt="mv"
        src="/img/mv.jpg"
        width={1100}
        height={724}
        loading="eager"
        className={cssStyle.image}
      /> */}
      <picture>
        <source media="(min-width: 769px)" srcSet="/img/mv_pc.png" />
        <img src="/img/mv_sp.png" alt="爪と足と" className={cssStyle.image} />
      </picture>
    </div>
  );
};
