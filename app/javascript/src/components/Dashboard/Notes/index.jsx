import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { PageLoader, Toastr } from "neetoui/v2";

import CustomHeader from "components/Common/CustomHeader";
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
    Toastr.success("Note has been deleted successfully");
    setLoading(false);
  };

  const addNote = note => {
    setLoading(true);
    note.tags = note.tags.map(item => item.label);
    note.id = notes.at(-1).id + 1;
    setNotes([...notes, note]);
    setShowPane(false);
    Toastr.success("Note has been added successfully");
    setLoading(false);
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <>
      <Menubar showMenu={showMenu} title="Notes" />
      <div className="flex flex-col items-start justify-start flex-grow h-screen overflow-y-auto mr-7 ml-5">
        <CustomHeader
          searchContent={searchContent}
          setSearchContent={setSearchContent}
          setShowPane={setShowPane}
          setShowMenu={setShowMenu}
          showMenu={showMenu}
          buttonLabel="Add Note +"
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
        addNote={addNote}
      />
    </>
  );
};

export default Notes;
