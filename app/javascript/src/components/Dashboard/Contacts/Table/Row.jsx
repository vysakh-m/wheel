import React from "react";

import { MenuHorizontal } from "@bigbinary/neeto-icons";
import { Checkbox, Dropdown, Typography, Avatar } from "neetoui/v2";

function Row({ contact }) {
  return (
    <tr>
      <td>
        <Checkbox name="1" />
      </td>
      <td>
        <div className="flex">
          <Avatar
            size="medium"
            user={{
              name: `${contact.first_name} ${contact.last_name}`,
              imageUrl: contact.img
            }}
          />
          <div className="ml-2">
            <Typography style="h5">
              {`${contact.first_name} ${contact.last_name}`}
            </Typography>
            <Typography style="body3">{contact.role}</Typography>
          </div>
        </div>
      </td>
      <td>
        <Typography style="body2">{contact.email}</Typography>
      </td>
      <td>
        <Typography style="body2">Feb 5, 2021</Typography>
      </td>
      <td>
        <div className="flex flex-row items-center justify-end space-x-3">
          <Dropdown icon={MenuHorizontal} buttonStyle="icon" autoWidth>
            <li>Edit</li>
            <li>Delete</li>
          </Dropdown>
        </div>
      </td>
    </tr>
  );
}

export default Row;
