import React from "react";

import { Check } from "neetoicons";
import { Typography } from "neetoui";
import { Button, Pane } from "neetoui";
import { Input, Select } from "neetoui/formik";

import Create from "./Create";

import { ASSIGNED_CONTACT_OPTIONS, TAGS_OPTIONS } from "../constants";

const CreateNote = ({ isNotePaneOpen, setIsNotePaneOpen, title, addNote }) => {
  const onClose = () => setIsNotePaneOpen(false);

  return (
    <Pane title="Create a New Note" isOpen={isNotePaneOpen} onClose={onClose}>
      <Pane.Header>
        <Typography className="px-1" style="h2" weight="semibold">
          {title}
        </Typography>
      </Pane.Header>
      <div>
        <Create addNote={addNote}>
          <Pane.Body>
            <div className="px-1 w-full space-y-6">
              <Input label="Title*" name="title" placeholder="Enter Title" />
              <Input
                label="Description*"
                name="description"
                size="large"
                placeholder="Enter Description"
              />
              <Select
                isClearable
                isSearchable
                label="Assigned Contact*"
                name="contact"
                options={ASSIGNED_CONTACT_OPTIONS}
                placeholder="Select Role"
              />
              <Select
                isMulti
                isClearable
                isSearchable
                label="Tags*"
                name="tags"
                options={TAGS_OPTIONS}
                placeholder="Select Tags"
              />
            </div>
          </Pane.Body>

          <Pane.Footer className="flex items-center space-x-2">
            <div className="nui-pane__footer nui-pane__footer--absolute">
              <Button
                type="submit"
                label="Save Changes"
                size="large"
                style="primary"
                className="ml-2"
                icon={Check}
              />
              <Button
                onClick={onClose}
                label="Cancel"
                size="large"
                style="link"
                className="ml-4 text-gray-400	"
              />
            </div>
          </Pane.Footer>
        </Create>
      </div>
    </Pane>
  );
};

export default CreateNote;
