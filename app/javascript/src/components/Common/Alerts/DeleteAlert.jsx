import React from "react";

import { Check } from "neetoicons";
import { Modal, Typography, Button } from "neetoui";

const DeleteAlert = ({
  isDeleteOpen,
  setIsDeleteOpen,
  deleteId,
  deleteFunction,
  type
}) => {
  return (
    <Modal
      isOpen={isDeleteOpen}
      onClose={() => setIsDeleteOpen(false)}
      size="md"
    >
      <Modal.Header>
        <Typography style="h2">Delete {type}</Typography>
      </Modal.Header>
      <Modal.Body>
        <Typography
          style="body2"
          lineHeight="normal"
          className="neeto-ui-text-gray-600"
        >
          Are you sure you want to delete the {type.toLowerCase()}? This action
          cannot be undone.
        </Typography>
      </Modal.Body>
      <Modal.Footer className="space-x-2">
        <Button
          label="Continue"
          size="large"
          icon={Check}
          onClick={() => {
            deleteFunction(deleteId);
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
