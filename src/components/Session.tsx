import React from "react";

type SessionProps = {
  sessionName: string;
  linksCount: number;
  windowsCount: number;
};

const Session = ({ sessionName, linksCount, windowsCount }: SessionProps) => {
  const iconPlaceholderStyle = `w-[22px] h-[22px] rounded-[3px] bg-noir-9`;

  return (
    <div
      className="group w-[416px] bg-noir-16 border border-noir-16  flex justify-between h-[33px] items-center rounded-[5px]
    hover:border-noir-11 hover:bg-noir-13 hover:cursor-pointer"
    >
      <div className="flex ml-3">
        <div className=""></div>
        <div className="">{sessionName}</div>
        <div className=""></div>
      </div>
      <div className="flex">
        <div className="mr-3 flex gap-1 text-noir-5 group-hover:hidden">
          {linksCount}
          <div className="text-noir-8 font-semibold">/</div>
          {windowsCount}
        </div>
        <div className="hidden gap-1 mr-1.5 group-hover:flex">
          <div className={iconPlaceholderStyle}></div>
          <div className={iconPlaceholderStyle}></div>
          <div className={iconPlaceholderStyle}></div>
          <div className={iconPlaceholderStyle}></div>
        </div>
      </div>
    </div>
  );
};

export default Session;
