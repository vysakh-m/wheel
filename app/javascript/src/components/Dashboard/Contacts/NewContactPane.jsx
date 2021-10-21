import React from "react";

import { Pane, Typography } from "neetoui";

import NewContactForm from "./NewContactForm";

const NewContactPane = ({
  isContactPaneOpen,
  setIsContactPaneOpen,
  title,
  addContact
}) => {
  const onClose = () => setIsContactPaneOpen(false);
  return (
    <Pane title={title} isOpen={isContactPaneOpen} onClose={onClose}>
      <Pane.Header>
        <Typography className="px-1" style="h2" weight="semibold">
          {title}
        </Typography>
      </Pane.Header>
      <div>
        <NewContactForm onClose={onClose} addContact={addContact} />
      </div>
    </Pane>
  );
};

export default NewContactPane;
