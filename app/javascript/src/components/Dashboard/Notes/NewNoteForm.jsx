import React from "react";

import { Formik, Form } from "formik";
import { Check } from "neetoicons";
import { Button, Pane } from "neetoui/v2";
import { Input, Select } from "neetoui/v2/formik";
import * as yup from "yup";

import { ASSIGNED_CONTACT_OPTIONS, TAGS_OPTIONS } from "./constants";

const NewNoteForm = ({ onClose, addNote }) => {
  const handleSubmit = values => {
    addNote(values);
  };
  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        contact: "",
        tags: []
      }}
      onSubmit={handleSubmit}
      validationSchema={yup.object({
        title: yup.string().required("Title is required"),
        description: yup.string().required("Description is required"),
        contact: yup.object().required("Assigned contact is required"),
        tags: yup
          .array()
          .min(1, "Tags must have atleast 1 entry")
          .required("Tags is required")
      })}
    >
      {({ isSubmitting }) => (
        <Form>
          <Pane.Body>
            <div className="px-1 w-full">
              <Input
                label="Title*"
                name="title"
                className="mb-6"
                placeholder="Enter Title"
              />
              <Input
                label="Description*"
                name="description"
                className="mb-6"
                size="large"
                placeholder="Enter Description"
              />
              <Select
                isClearable
                isSearchable
                label="Assigned Contact*"
                name="contact"
                className="mb-6"
                options={ASSIGNED_CONTACT_OPTIONS}
                placeholder="Select Role"
              />
              <Select
                isMulti
                isClearable
                isSearchable
                label="Tags*"
                name="tags"
                className="mb-6"
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
                disabled={isSubmitting}
                loading={isSubmitting}
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
        </Form>
      )}
    </Formik>
  );
};

export default NewNoteForm;
