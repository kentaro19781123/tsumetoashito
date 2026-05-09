"use client";

import { Inner } from "@/app/_component/Inner";
import { Title } from "@/app/_component/Title";
import { menuType } from "@/types";

type Props = {
  data: menuType["contents"];
};

export const MenuContents = ({ data }: Props) => {
  return (
    <section className="pt-12">
      <Inner className="py-0">
        <Title text="メニュー料金" />
        <div className="mb-8 last:mb-0">
          <ul>
            {data.map((x) => (
              <li
                className="flex flex-col leading-relaxed mb-3 text-16 md:flex-row md:justify-between md:text-18 md:mb-4"
                key={x.title}
              >
                <div className="">
                  <span className="inline-block text-primary text-16 shrink-0 w-5">
                    ●
                  </span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: x.title,
                    }}
                  />
                </div>
                <div className="text-right">{x.price}</div>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-right">
          <a className="md:text-20 underline text-primary" href="/menu/">
            メニュー料金の詳細はこちらご確認ください
          </a>
        </p>
      </Inner>
    </section>
  );
};
