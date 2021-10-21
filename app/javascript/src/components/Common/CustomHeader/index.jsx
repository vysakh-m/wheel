import React from "react";

import { Search } from "neetoicons";
import { Button, Input } from "neetoui";
import { Header } from "neetoui/layouts";

const CustomHeader = ({
  searchContent,
  setSearchContent,
  setShowPane,
  setShowMenu,
  buttonLabel,
  title
}) => {
  return (
    <>
      <Header
        actionBlock={
          <div className="flex space-x-3">
            <Input
              prefix={<Search size={16} />}
              placeholder="Search Name, Email, Phone Number, Etc."
              className="w-80"
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
        menuBarToggle={() => setShowMenu(showMenu => !showMenu)}
        title={title}
      />
    </>
  );
};

export default CustomHeader;
