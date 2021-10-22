import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { PageLoader, Toastr } from "neetoui";

import CustomHeader from "components/Common/CustomHeader";
import EmptyState from "components/Common/EmptyState";
import Menubar from "components/Common/Menubar";

import { NOTES_DATA } from "./constants";
import CreateNote from "./CreateNote";
import NotesCard from "./NotesCard";

const Notes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchContent, setSearchContent] = useState("");
  const [showMenu, setShowMenu] = useState(true);
  const [notes, setNotes] = useState(NOTES_DATA);
  const [isNotePaneOpen, setIsNotePaneOpen] = useState(false);

  useEffect(async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  }, []);

  const deleteNote = id => {
    setIsLoading(true);
    let updatedNotes = notes.filter(note => note.id != id);
    setNotes(updatedNotes);
    Toastr.success("Note has been deleted successfully");
    setIsLoading(false);
  };

  const addNote = note => {
    setIsLoading(true);
    note.tags = note.tags.map(item => item.label);
    note.id = notes.at(-1).id + 1;
    setNotes([...notes, note]);
    setIsNotePaneOpen(false);
    Toastr.success("Note has been added successfully");
    setIsLoading(false);
  };

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <>
      <Menubar showMenu={showMenu} title="Notes" />
      <div className="flex flex-col items-start justify-start flex-grow h-screen overflow-y-auto mx-6">
        <CustomHeader
          searchContent={searchContent}
          setSearchContent={setSearchContent}
          setShowPane={setIsNotePaneOpen}
          setShowMenu={setShowMenu}
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
      <CreateNote
        isNotePaneOpen={isNotePaneOpen}
        setIsNotePaneOpen={setIsNotePaneOpen}
        title="Add New Note"
        addNote={addNote}
      />
    </>
  );
};

export default Notes;
