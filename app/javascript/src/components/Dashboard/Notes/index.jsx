import React, { useState } from "react";

import { Search } from "@bigbinary/neeto-icons";
import EmptyNotesListImage from "images/EmptyNotesList";
import { Button, Input, PageLoader, Toastr } from "neetoui/v2";
import { Header } from "neetoui/v2/layouts";

import EmptyState from "components/Common/EmptyState";
import Menubar from "components/Common/Menubar";

import { NOTES_DATA } from "./constants";
import NewNotePane from "./NewNotePane";
import NotesCard from "./NotesCard";

const Notes = () => {
  const [loading, setLoading] = useState(false);
  const [searchContent, setSearchContent] = useState("");
  const [showMenu, setShowMenu] = useState(true);
  const [notes, setNotes] = useState(NOTES_DATA);
  const [showPane, setShowPane] = useState(false);

  const deleteNote = id => {
    setLoading(true);
    let updatedNotes = notes.filter(note => note.id != id);
    setNotes(updatedNotes);
    Toastr.success("Note was deleted successfully");
    setLoading(false);
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <Menubar showMenu={showMenu} title="Notes" />
      <div className="flex flex-col items-start justify-start flex-grow h-screen overflow-y-auto mr-7 ml-5">
        <Header
          actionBlock={
            <div className="flex">
              <Input
                prefix={<Search size={16} />}
                placeholder="Search Name, Email, Phone Number, Etc."
                className="w-80 mr-2"
                value={searchContent}
                onChange={e => setSearchContent(e.target.value)}
              />
              <Button
                label="Add Note +"
                size="large"
                onClick={() => setShowPane(true)}
              />
            </div>
          }
          size="large"
          menuBarToggle={() => setShowMenu(!showMenu)}
          title="All Notes"
        />
        {notes.length ? (
          <>
            {notes.map(note => (
              <NotesCard key={note.id} note={note} deleteNote={deleteNote} />
            ))}
          </>
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            title="Looks like you don't have any notes!"
            subtitle="Add your notes to send customized emails to them."
          />
        )}
      </div>
      <NewNotePane
        showPane={showPane}
        setShowPane={setShowPane}
        title="Add New Note"
      />
    </>
  );
};

export default Notes;
