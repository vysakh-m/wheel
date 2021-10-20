import React from "react";

import { Scrollable } from "@bigbinary/neetoui/v2/layouts";

import Header from "./Header";
import Row from "./Row";

const Table = ({ contacts, deleteContact }) => {
  return (
    <Scrollable className="w-full h-full">
      <table
        className={`neeto-ui-table neeto-ui-table--checkbox neeto-ui-table--actions`}
      >
        <Header />
        <tbody>
          {contacts.map((contact, index) => (
            <React.Fragment key={index}>
              <Row contact={contact} deleteContact={deleteContact} />
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </Scrollable>
  );
};

export default Table;
