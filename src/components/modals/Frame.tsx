import React from "react";
import CreateSession from "./CreateSession";
import History from "./History";

const Frame = () => {
  return (
    <div className="w-[440px] h-[800px] bg-noir-16 max-h-[440px] overflow-y-scroll ">
      {/* <CreateSession /> */}
      <History />
    </div>
  );
};

export default Frame;
