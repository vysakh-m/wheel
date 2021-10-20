import React from "react";

import { MenuVertical } from "@bigbinary/neeto-icons";
import { Typography, Dropdown } from "neetoui/v2";

const NotesBody = ({ title, description, showAlert }) => {
  return (
    <>
      <div className="flex flex-column justify-between">
        <Typography className="mb-0.5" style="h4">
          {title}
        </Typography>

        <Dropdown icon={() => <MenuVertical size={16} />} buttonStyle="text">
          <li>Edit</li>
          <li onClick={() => showAlert(true)}>Delete</li>
        </Dropdown>
      </div>

      <Typography className="mb-3" style="body2">
        {description}
      </Typography>
    </>
  );
};

export default NotesBody;
