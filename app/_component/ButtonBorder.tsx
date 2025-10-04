// import Link from "next/link";
import React from "react";

type Props = {
  buttonText: string;
  url: string;
};

export const ButtonBorder: React.FC<Props> = ({ buttonText, url }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <a
        className="block no-underline text-base border border-base rounded px-4 py-3 text-center w-full hover:border-primary hover:text-primary focus-visible:outline-none"
        href={url}
      >
        {buttonText}
      </a>
    </div>
  );
};
