import React, { useState } from "react";

import DeleteAlert from "components/Common/Alerts/DeleteAlert";

import NotesBody from "./NotesBody";
import NotesContainer from "./NotesContainer";
import NotesFooter from "./NotesFooter";

const NotesCard = ({ note, deleteNote }) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { title, description, action, tags, time, img, id } = note;
  return (
    <>
      <NotesContainer>
        <NotesBody
          title={title}
          description={description}
          showAlert={setIsDeleteOpen}
        />
        <hr />
        <NotesFooter action={action} tags={tags} time={time} img={img} />
      </NotesContainer>
      <DeleteAlert
        isDeleteOpen={isDeleteOpen}
        setIsDeleteOpen={setIsDeleteOpen}
        deleteId={id}
        deleteFunction={deleteNote}
        type="Note"
      />
    </>
  );
};

export default NotesCard;
