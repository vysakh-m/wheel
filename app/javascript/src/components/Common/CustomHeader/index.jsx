import React from "react";

import { Search } from "@bigbinary/neeto-icons";
import { Button, Input } from "neetoui/v2";
import { Header } from "neetoui/v2/layouts";

const CustomHeader = ({
  searchContent,
  setSearchContent,
  setShowPane,
  setShowMenu,
  showMenu,
  buttonLabel,
  title
}) => {
  return (
    <>
      <Header
        actionBlock={
          <div className="flex">
            <Input
              prefix={<Search size={16} />}
              placeholder="Search Name, Email, Phone Number, Etc."
              className="w-80 mr-2"
              value={searchContent}
              onChange={e => setSearchContent(e.target.value)}
            />
            <Button
              label={buttonLabel}
              size="large"
              onClick={() => setShowPane(true)}
            />
          </div>
        }
        size="large"
        menuBarToggle={() => setShowMenu(!showMenu)}
        title={title}
      />
    </>
  );
};

export default CustomHeader;
