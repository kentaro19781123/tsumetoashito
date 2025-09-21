import React from "react";
import type { ReactNode } from "react";

/**
 * SP: w-full max-w-full mx-auto
 * PC: md:w-[1000px] md:max-w-[1000px]
 * その他のpropsも渡せます
 */
export const Inner = ({
  children,
  className = "",
  ...props
}: {
  children: ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`w-full max-w-full mx-auto md:w-[1000px] md:max-w-[1000px] ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
};
