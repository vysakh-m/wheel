import React from "react";

import { Formik, Form } from "formik";
import { Check } from "neetoicons";
import { Button, Pane } from "neetoui/v2";
import { Input, Select } from "neetoui/v2/formik";
import * as yup from "yup";

import { ROLE_OPTIONS } from "./constants";

const NewContactForm = ({ onClose, addContact }) => {
  const handleSubmit = values => {
    addContact(values);
  };
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        role: ""
      }}
      onSubmit={handleSubmit}
      validationSchema={yup.object({
        firstName: yup.string().required("First Name is required"),
        lastName: yup.string().required("Last Name is required"),
        email: yup
          .string()
          .email("Invalid Email")
          .required("Email Address is required"),
        role: yup.object().required("Role is required")
      })}
    >
      {({ isSubmitting }) => (
        <Form>
          <Pane.Body>
            <div className="px-1 w-full">
              <div className="flex ">
                <Input
                  label="First Name*"
                  name="firstName"
                  className="mb-6"
                  size="large"
                  placeholder="Enter First Name"
                />
                <Input
                  label="Last Name*"
                  name="lastName"
                  className="mb-6 ml-4"
                  size="large"
                  placeholder="Enter Last Name"
                />
              </div>

              <Input
                label="Email Address*"
                name="email"
                className="mb-6"
                size="large"
                placeholder="Enter your email address"
              />

              <Select
                isClearable
                isSearchable
                label="Role*"
                name="role"
                className="mb-6"
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
