import React from "react";

import { Checkbox } from "neetoui";

function Header() {
  return (
    <thead>
      <tr>
        <th>
          <Checkbox name="header" />
        </th>
        <th>Name & Role</th>
        <th>Email</th>
        <th>Created At</th>
        <th></th>
      </tr>
    </thead>
  );
}

export default Header;
