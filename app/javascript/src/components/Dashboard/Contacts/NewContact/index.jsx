import React from "react";

import { Check } from "neetoicons";
import { Pane, Typography } from "neetoui";
import { Button } from "neetoui";
import { Input, Select } from "neetoui/formik";

import Create from "./Create";

import { ROLE_OPTIONS } from "../constants";

const NewContact = ({
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
        <Create addContact={addContact}>
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

export default NewContact;
