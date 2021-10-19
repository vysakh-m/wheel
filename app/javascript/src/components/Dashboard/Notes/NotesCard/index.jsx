import React, { useState } from "react";

import NotesBody from "./NotesBody";
import NotesContainer from "./NotesContainer";
import NotesFooter from "./NotesFooter";

import DeleteAlert from "../DeleteAlert";

const NotesCard = ({ note, deleteNote }) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { title, description, action, tag, time, img, id } = note;
  return (
    <>
      <NotesContainer>
        <NotesBody
          title={title}
          description={description}
          showAlert={setIsDeleteOpen}
        />
        <hr />
        <NotesFooter action={action} tag={tag} time={time} img={img} />
      </NotesContainer>
      <DeleteAlert
        isDeleteOpen={isDeleteOpen}
        setIsDeleteOpen={setIsDeleteOpen}
        deleteId={id}
        deleteNote={deleteNote}
      />
    </>
  );
};

export default NotesCard;
