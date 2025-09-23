import React from "react";
import type { ReactNode } from "react";

export const Section = ({
  children,
  className = "",
  ...props
}: {
  children: ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`pt-[60px] md:py-[74px] ${className}`.trim()} {...props}>
      {children}
    </div>
  );
};
