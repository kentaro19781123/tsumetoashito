import React, { useEffect } from "react";

type Props = boolean;

export const useOverflow: React.FC<Props> = (isOpen) => {
  useEffect(() => {
    const el = document.body;
    el.style.overflow = isOpen ? "hidden" : "inherit";
  }, [isOpen]);

  return null;
};
