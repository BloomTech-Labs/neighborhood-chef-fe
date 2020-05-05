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
  const [page, setPage] = useState(2);
  const [hashtags, setHashtags] = useState([]);
  const [modifiers, setModifiers] = useState([]);

  console.log(modifiers);

  const removeHashtag = (id) => {
    setHashtags(hashtags.filter((tag) => tag.id !== id));
  };

  return (
    <>
      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          values = {
            ...values,
            user_id: 'insert user id',
            Hashtags: JSON.stringify({ modifiers: [...hashtags] }),
            Modifiers: JSON.stringify({ modifiers: [...modifiers] }),
            Longitude: 'insert Longitude',
            Latitude: 'insert Latitude',
          };
          console.log(values);
          resetForm(initialState);
          setHashtags([]);
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
                    removeHashtag={removeHashtag}
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
                    values={values}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    removeHashtag={removeHashtag}
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
