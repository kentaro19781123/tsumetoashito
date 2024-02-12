// import smoothscroll from 'smoothscroll-polyfill'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export const anchorScroll = (
  selector: string,
  offset: number,
  event?: React.MouseEvent | null
) => {
  if (event) event.preventDefault();

  const element = document.querySelector(selector);

  if (element) {
    // for iOS & IE
    // smoothscroll.polyfill()
    console.log(element.getBoundingClientRect().top + window.scrollY - offset);

    window.scrollTo({
      behavior: "smooth",
      top: element.getBoundingClientRect().top + window.scrollY - offset,
    });

    return true;
  }

  return false;
};
