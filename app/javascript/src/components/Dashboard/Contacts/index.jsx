import React, { useState } from "react";

import CustomHeader from "components/Common/CustomHeader";
import Menubar from "components/Common/Menubar";

const Contacts = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [searchContent, setSearchContent] = useState("");
  // const [showPane, setShowPane] = useState(false);
  //Dummy Function to bypass eslint
  let setShowPane = () => {};

  return (
    <>
      <Menubar showMenu={showMenu} title="Contacts" />

      <div className="flex flex-col items-start justify-start flex-grow h-screen overflow-y-auto mr-7 ml-5">
        <CustomHeader
          searchContent={searchContent}
          setSearchContent={setSearchContent}
          setShowPane={setShowPane}
          setShowMenu={setShowMenu}
          showMenu={showMenu}
          buttonLabel="Add Contact +"
          title="All Contacts"
        />
      </div>
    </>
  );
};

export default Contacts;
