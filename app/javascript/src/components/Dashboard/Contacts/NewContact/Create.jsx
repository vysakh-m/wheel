import React from "react";

import { Formik, Form } from "formik";

import {
  CONTACTS_INITIAL_VALUE,
  CONTACTS_VALIDATION_SCHEMA
} from "../constants";

const Create = ({ children, addContact }) => {
  const handleSubmit = values => {
    addContact(values);
  };
  return (
    <Formik
      initialValues={CONTACTS_INITIAL_VALUE}
      onSubmit={handleSubmit}
      validationSchema={CONTACTS_VALIDATION_SCHEMA}
    >
      {() => <Form>{children}</Form>}
    </Formik>
  );
};

export default Create;
