import React from "react";

const CardContainer = ({ children }) => {
  return (
    <div className="w-full h-40 mt-4 ">
      <div className="border neeto-ui-border-gray-400 neeto-ui-shadow-m rounded-sm	">
        <div className="flex flex-col m-4 ">{children}</div>
      </div>
    </div>
  );
};

export default CardContainer;
