import React, { useState } from "react";

import { MenuHorizontal } from "neetoicons";
import { Checkbox, Dropdown, Typography, Avatar } from "neetoui";

import DeleteAlert from "components/Common/Alerts/DeleteAlert";

function Row({ contact, deleteContact }) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  return (
    <>
      <tr>
        <td>
          <Checkbox name="1" />
        </td>
        <td>
          <div className="flex space-x-2">
            <Avatar
              size="medium"
              user={{
                name: `${contact.firstName} ${contact.lastName}`,
                imageUrl: contact.img
              }}
            />
            <div>
              <Typography style="h5">
                {`${contact.firstName} ${contact.lastName}`}
              </Typography>
              <Typography style="body3">{contact.role}</Typography>
            </div>
          </div>
        </td>
        <td>
          <Typography style="body2" className="truncate">
            {contact.email}
          </Typography>
        </td>
        <td>
          <Typography style="body2">Feb 5, 2021</Typography>
        </td>
        <td>
          <div className="flex flex-row items-center justify-end space-x-3">
            <Dropdown icon={MenuHorizontal} buttonStyle="icon" autoWidth>
              <li>Edit</li>
              <li onClick={() => setIsDeleteOpen(true)}>Delete</li>
            </Dropdown>
          </div>
        </td>
      </tr>
      <DeleteAlert
        isDeleteOpen={isDeleteOpen}
        setIsDeleteOpen={setIsDeleteOpen}
        deleteId={contact.id}
        deleteFunction={deleteContact}
        type="Contact"
      />
    </>
  );
}

export default Row;
