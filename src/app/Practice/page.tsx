// MyForm.js
'use client'
import React from 'react';
import { Formik, Form, Field } from 'formik';

const MyForm = () => {
  return (
    <Formik
      initialValues={{
        selectedOption: '',
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <div className="radio-group">
          <div className="radio-item">
            <Field type="radio" name="selectedOption" value="option1" />
            <label htmlFor="option1">Option 1</label>
          </div>
          <div className="radio-divider"></div>
          <div className="radio-item">
            <Field type="radio" name="selectedOption" value="option2" />
            <label htmlFor="option2">Option 2</label>
          </div>
          <div className="radio-divider"></div>
          <div className="radio-item">
            <Field type="radio" name="selectedOption" value="option3" />
            <label htmlFor="option3">Option 3</label>
          </div>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  );
};

export default MyForm;
