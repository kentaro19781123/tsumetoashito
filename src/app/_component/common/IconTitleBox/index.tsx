import React from "react";
import { IconTitle } from "./IconTitle";
import { cssStyle } from "./icon-title-box.css";
import { ButtonBorder } from "@/app/_component/common/ButtonBorder";

type Props = {
  titleArray: array[];
  icon: string;
  buttonText: string;
  url: string;
};
type array = {
  text: string;
  subText: string;
};

export const IconTitleBox: React.FC<Props> = ({
  titleArray,
  icon,
  buttonText,
  url,
}) => {
  return (
    <>
      <div className={cssStyle.titleWrap}>
        {titleArray.map((x) => (
          <React.Fragment key={x.text}>
            <IconTitle text={x.text} subText={x.subText} />
          </React.Fragment>
        ))}
      </div>
      <div className={cssStyle.iconWrap}>
        <img src={`img/${icon}`} />
      </div>
      <ButtonBorder buttonText={buttonText} url={url} />
    </>
  );
};
