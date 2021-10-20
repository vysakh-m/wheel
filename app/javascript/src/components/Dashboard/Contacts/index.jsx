import React, { useState } from "react";

import { PageLoader, Toastr, Pagination } from "neetoui/v2";

import CustomHeader from "components/Common/CustomHeader";
import Menubar from "components/Common/Menubar";

import { CONTACT_DATA } from "./constants";
import NewContactPane from "./NewContactPane";
import Table from "./Table";

const Contacts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [contacts, setContacts] = useState(CONTACT_DATA);
  const [showMenu, setShowMenu] = useState(true);
  const [searchContent, setSearchContent] = useState("");
  const [showPane, setShowPane] = useState(false);

  const deleteContact = id => {
    setIsLoading(true);
    setContacts(contacts.filter(contact => contact.id != id));
    Toastr.success("Contact deleted successfully");
    setIsLoading(false);
  };

  const addContact = contact => {
    setIsLoading(true);
    contact.role = contact.role.label;
    setContacts([...contacts, contact]);
    Toastr.success("Contact added successfully");
    setShowPane(false);
    setIsLoading(false);
  };

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <>
      <Menubar showMenu={showMenu} title="Contacts" />

      <div className="flex flex-col items-start justify-between flex-grow h-screen  mx-7">
        <div className="w-full">
          <CustomHeader
            searchContent={searchContent}
            setSearchContent={setSearchContent}
            setShowPane={setShowPane}
            setShowMenu={setShowMenu}
            buttonLabel="Add Contact +"
            title="All Contacts"
          />
          <Table contacts={contacts} deleteContact={deleteContact} />
        </div>
        <div className="flex flex-row items-center justify-end w-full h-full mt-6 mb-8 ">
          <Pagination
            count={300}
            pageNo={1}
            pageSize={25}
            navigate={() => {}}
          />
        </div>
      </div>

      <NewContactPane
        showPane={showPane}
        setShowPane={setShowPane}
        title="Add New Contact"
        addContact={addContact}
      />
    </>
  );
};

export default Contacts;
