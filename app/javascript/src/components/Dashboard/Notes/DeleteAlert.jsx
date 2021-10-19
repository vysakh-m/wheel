import React from "react";

import { Modal, Typography, Button } from "neetoui/v2";

const DeleteAlert = ({
  isDeleteOpen,
  setIsDeleteOpen,
  deleteId,
  deleteNote
}) => {
  return (
    <Modal
      isOpen={isDeleteOpen}
      onClose={() => setIsDeleteOpen(false)}
      size="md"
    >
      <Modal.Header>
        <Typography style="h2">Delete Note</Typography>
      </Modal.Header>
      <Modal.Body>
        <Typography
          style="body2"
          lineHeight="normal"
          className="neeto-ui-text-gray-600"
        >
          Are you sure you want to delete the note? This action cannot be
          undone.
        </Typography>
      </Modal.Body>
      <Modal.Footer className="space-x-2">
        <Button
          label="Continue"
          size="large"
          onClick={() => {
            deleteNote(deleteId);
            setIsDeleteOpen(false);
          }}
        />
        <Button
          style="text"
          label="Cancel"
          size="large"
          onClick={() => setIsDeleteOpen(false)}
        />
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteAlert;
