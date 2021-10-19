import React from "react";

// @ts-ignore
import { Pane, Typography } from "neetoui/v2";

import NewNoteForm from "./NewNoteForm";

export default function NewNotePane({ showPane, setShowPane, title }) {
  const onClose = () => setShowPane(false);
  return (
    <Pane title="Create a New Note" isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          {title}
        </Typography>
      </Pane.Header>
      <div>
        <NewNoteForm onClose={onClose} />
      </div>
    </Pane>
  );
}
