import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import CreateEventHeader from './CreateEventHeader.js';
import FormPageOne from './FormPageOne.js';
import FormPageTwo from './FormPageTwo.js';
import FormPageThree from './FormPageThree.js';
import FormPageFour from './FormPageFour.js';
import { modifierData } from './FormPageTwo.js';

const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  address: Yup.string().required('Address is required'),
  description: Yup.string().required('Description is required'),
  date: Yup.date().required('Date is required'),
  startTime: Yup.string().required('Start Time is required'),
  category_id: Yup.number().required('Category is required'),
});

const initialState = {
  title: '',
  description: '',
  date: '',
  startTime: '',
  endTime: '',
  category_id: '',
  address: '',
};

const FormContainer = () => {
  const [page, setPage] = useState(4);
  const [hashtags, setHashtags] = useState([]);
  const [modifiers, setModifiers] = useState([]);

  useEffect(() => {
    resetModifiers();
  }, []);

  const resetModifiers = () => {
    return modifierData.map((mod) => (mod.active = false));
  };

  // wasn't sure if we wanted to send the modifier icon itself to the backend in JSON too?
  const modifiersWithoutIcon = () => {
    return modifiers.map((mod) => {
      return {
        id: mod.id,
        title: mod.title,
        active: mod.active,
      };
    });
  };

  return (
    <>
      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          values = {
            ...values,
            user_id: 'insert user id here',
            hashtags: JSON.stringify({ modifiers: [...hashtags] }),
            modifiers: JSON.stringify({
              modifiers: [modifiersWithoutIcon()],
            }),
            longitude: 'insert calculated longitude',
            latitude: 'insert calculated longitude',
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
            <CreateEventHeader page={page} />
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

              {page === 4 && (
                <>
                  <FormPageFour />
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
