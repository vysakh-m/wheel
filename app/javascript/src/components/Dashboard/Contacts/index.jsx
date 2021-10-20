import React, { useState } from "react";

import { PageLoader, Toastr } from "neetoui/v2";

import CustomHeader from "components/Common/CustomHeader";
import Menubar from "components/Common/Menubar";

import { CONTACT_DATA } from "./constants";
import Table from "./Table";

const Contacts = () => {
  const [loading, setLoading] = useState(false);
  const [contacts, setContacts] = useState(CONTACT_DATA);
  const [showMenu, setShowMenu] = useState(true);
  const [searchContent, setSearchContent] = useState("");
  // const [showPane, setShowPane] = useState(false);

  const deleteContact = id => {
    setLoading(true);
    setContacts(contacts.filter(contact => contact.id != id));
    Toastr.success("Contact has been deleted successfully");
    setLoading(false);
  };

  //Dummy Function to bypass eslint
  let setShowPane = () => {};

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <Menubar showMenu={showMenu} title="Contacts" />

      <div className="flex flex-col items-start justify-start flex-grow h-screen overflow-y-auto mr-7 ml-5">
        <CustomHeader
          searchContent={searchContent}
          setSearchContent={setSearchContent}
          setShowPane={setShowPane}
          setShowMenu={setShowMenu}
          showMenu={showMenu}
          buttonLabel="Add Contact +"
          title="All Contacts"
        />
        <Table contacts={contacts} deleteContact={deleteContact} />
      </div>
    </>
  );
};

export default Contacts;
