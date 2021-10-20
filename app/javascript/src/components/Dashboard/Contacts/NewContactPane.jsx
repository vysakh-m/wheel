import React from "react";

import { Pane, Typography } from "neetoui/v2";

import NewContactForm from "./NewContactForm";

const NewContactPane = ({ showPane, setShowPane, title, addContact }) => {
  const onClose = () => setShowPane(false);
  return (
    <Pane title="Create a New Note" isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
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
