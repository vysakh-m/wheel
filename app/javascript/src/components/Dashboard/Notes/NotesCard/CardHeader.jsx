import React from "react";

import { MenuVertical } from "neetoicons";
import { Dropdown } from "neetoui";

const CardHeader = ({ showAlert, children }) => {
  return (
    <div className="flex flex-column justify-between">
      {children}
      <Dropdown icon={() => <MenuVertical size={16} />} buttonStyle="text">
        <li>Edit</li>
        <li onClick={() => showAlert(true)}>Delete</li>
      </Dropdown>
    </div>
  );
};

export default CardHeader;
