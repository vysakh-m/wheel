import React from "react";

import { Formik, Form } from "formik";
import { Check } from "neetoicons";
import { Button, Pane } from "neetoui";
import { Input, Select } from "neetoui/formik";

import { ROLE_OPTIONS } from "./constants";
import {
  CONTACTS_INITIAL_VALUE,
  CONTACTS_VALIDATION_SCHEMA
} from "./constants";

const NewContactForm = ({ onClose, addContact }) => {
  const handleSubmit = values => {
    addContact(values);
  };
  return (
    <Formik
      initialValues={CONTACTS_INITIAL_VALUE}
      onSubmit={handleSubmit}
      validationSchema={CONTACTS_VALIDATION_SCHEMA}
    >
      {({ isSubmitting }) => (
        <Form>
          <Pane.Body>
            <div className="px-1 w-full space-y-6">
              <div className="flex ">
                <Input
                  label="First Name*"
                  name="firstName"
                  size="large"
                  placeholder="Enter First Name"
                />
                <Input
                  label="Last Name*"
                  name="lastName"
                  className="ml-4"
                  size="large"
                  placeholder="Enter Last Name"
                />
              </div>

              <Input
                label="Email Address*"
                name="email"
                size="large"
                placeholder="Enter your email address"
              />

              <Select
                isClearable
                isSearchable
                label="Role*"
                name="role"
                options={ROLE_OPTIONS}
                placeholder="Select Role"
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

export default NewContactForm;
