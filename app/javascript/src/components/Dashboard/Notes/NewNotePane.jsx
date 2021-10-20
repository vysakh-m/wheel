import React from "react";

// @ts-ignore
import { Pane, Typography } from "neetoui/v2";

import NewNoteForm from "./NewNoteForm";

export default function NewNotePane({ showPane, setShowPane, title, addNote }) {
  const onClose = () => setShowPane(false);
  return (
    <Pane title="Create a New Note" isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography className="px-1" style="h2" weight="semibold">
          {title}
        </Typography>
      </Pane.Header>
      <div>
        <NewNoteForm onClose={onClose} addNote={addNote} />
      </div>
    </Pane>
  );
}
