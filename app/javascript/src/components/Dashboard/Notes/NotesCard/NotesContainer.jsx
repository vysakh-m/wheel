import React from "react";

const NotesContainer = ({ children }) => {
  return (
    <div className="w-full h-40 pl-2">
      <div className="border neeto-ui-border-gray-400 neeto-ui-shadow-m mt-5">
        <div className="flex flex-col p-3">{children}</div>
      </div>
    </div>
  );
};

export default NotesContainer;
