import React from "react";

import NotesBody from "./NotesBody";
import NotesContainer from "./NotesContainer";
import NotesFooter from "./NotesFooter";

const NotesCard = ({ note }) => {
  const { title, description, action, tag, time, img } = note;
  return (
    <>
      <NotesContainer>
        <NotesBody title={title} description={description} />
        <hr />
        <NotesFooter action={action} tag={tag} time={time} img={img} />
      </NotesContainer>
    </>
  );
};

export default NotesCard;
