import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import FormPageOne from './FormPageOne.js';
import FormPageTwo from './FormPageTwo.js';
import FormPageThree from './FormPageThree.js';

const validationSchema = Yup.object({
  Title: Yup.string().required('Title is required'),
  Address: Yup.string().required('Address is required'),
  Description: Yup.string().required('Description is required'),
  Date: Yup.date().required('Date is required'),
  Start_Time: Yup.string().required('Start Time is required'),
  category_id: Yup.number().required('Category is required'),
});

const initialState = {
  Title: '',
  Description: '',
  Date: '',
  Start_Time: '',
  End_Time: '',
  category_id: '',
  Address: '',
};

const FormContainer = () => {
  const [page, setPage] = useState(1);
  const [hashtags, setHashtags] = useState([]);
  const [modifiers, setModifiers] = useState([]);

  const resetModifiers = () => {
    return modifiers.map((mod) => (mod.active = false));
  };

  return (
    <>
      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm, history }) => {
          values = {
            ...values,
            user_id: 'insert user id',
            Hashtags: JSON.stringify({ modifiers: [...hashtags] }),
            Modifiers: JSON.stringify({ modifiers: [...modifiers] }),
            Longitude: 'insert Longitude',
            Latitude: 'insert Latitude',
          };
          console.log(values);
          setHashtags([]);
          resetForm(initialState);
          resetModifiers();
          setModifiers([]);
        }}
      >
        {({
          touched,
          handleSubmit,
          handleChange,
          values,
          errors,
          resetForm,
        }) => (
          <div className="createEventContainer">
            <Form className="createForm" onSubmit={handleSubmit}>
              {page === 1 && (
                <>
                  <FormPageOne
                    values={values}
                    handleChange={handleChange}
                    errors={errors}
                    touched={touched}
                    setPage={setPage}
                    resetForm={resetForm}
                  />
                </>
              )}

              {page === 2 && (
                <>
                  <FormPageTwo
                    touched={touched}
                    errors={errors}
                    setPage={setPage}
                    handleChange={handleChange}
                    values={values}
                    hashtags={hashtags}
                    setHashtags={setHashtags}
                    modifiers={modifiers}
                    setModifiers={setModifiers}
                  />
                </>
              )}

              {page === 3 && (
                <>
                  <FormPageThree
                    setPage={setPage}
                    hashtags={hashtags}
                    setHashtags={setHashtags}
                    values={values}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    modifiers={modifiers}
                    setModifiers={setModifiers}
                  />
                </>
              )}
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default FormContainer;
