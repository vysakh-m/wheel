import React from "react";

import Header from "./Header";
import Row from "./Row";

const Table = ({ contacts, deleteContact }) => {
  return (
    <div className="w-full">
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
    </div>
  );
};

export default Table;
