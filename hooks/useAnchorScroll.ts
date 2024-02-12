import { useEffect } from "react";

export const useAnchorScroll = (
  selector: string,
  offset: number,
  event?: React.MouseEvent | null
) => {
  if (event) event.preventDefault();
  useEffect(() => {
    const element = document.querySelector(selector);

    if (element) {
      console.log(
        element.getBoundingClientRect().top + window.scrollY - offset
      );
      window.scrollTo({
        behavior: "smooth",
        top: element.getBoundingClientRect().top + window.scrollY - offset,
      });
    }
  }, [offset, selector]);

  return false;
};
