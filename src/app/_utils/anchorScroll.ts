// import smoothscroll from 'smoothscroll-polyfill'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export const anchorScroll = (
  event: React.MouseEvent | null,
  selector: string,
  offset: number
) => {
  if (event) event.preventDefault();

  const element = document.querySelector(selector);

  if (element) {
    // for iOS & IE
    // smoothscroll.polyfill()

    window.scrollTo({
      behavior: "smooth",
      top: element.getBoundingClientRect().top + window.scrollY - offset,
    });

    return true;
  }

  return false;
};
