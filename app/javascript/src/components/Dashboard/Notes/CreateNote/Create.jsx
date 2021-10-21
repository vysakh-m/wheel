import React from "react";

import { Formik, Form } from "formik";

import { NOTE_INITIAL_VALUES, NOTE_VALIDATION_SCHEMA } from "../constants";

const Create = ({ children, addNote }) => {
  const handleSubmit = values => {
    addNote(values);
  };
  return (
    <Formik
      initialValues={NOTE_INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={NOTE_VALIDATION_SCHEMA}
    >
      {() => <Form>{children}</Form>}
    </Formik>
  );
};

export default Create;
