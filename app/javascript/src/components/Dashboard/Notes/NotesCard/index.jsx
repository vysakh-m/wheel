import React, { useState } from "react";

import { Typography } from "neetoui";

import DeleteAlert from "components/Common/Alerts/DeleteAlert";

import CardBody from "./CardBody";
import CardContainer from "./CardContainer";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";

const NotesCard = ({ note, deleteNote }) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { title, description, action, tags, time, img, id } = note;
  return (
    <>
      <CardContainer>
        <CardHeader showAlert={setIsDeleteOpen}>
          <Typography className="mb-0.5" style="h4">
            {title}
          </Typography>
        </CardHeader>
        <CardBody>
          <Typography className="mb-3" style="body2">
            {description}
          </Typography>
        </CardBody>
        <div className="w-full">
          <div className="w-full border-b neeto-ui-gray-200"></div>
        </div>
        <CardFooter action={action} tags={tags} time={time} img={img} />
      </CardContainer>
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
