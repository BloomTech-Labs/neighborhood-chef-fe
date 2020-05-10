import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { print } from 'graphql';
import axios from 'axios';

import { ADD_EVENT } from '../../../graphql/events/event-mutations.js';
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
  const [page, setPage] = useState(1);
  const [hashtags, setHashtags] = useState([]);
  const [modifiers, setModifiers] = useState([]);
  const [photo, setPhoto] = useState(null);

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

  const photoHandler = () => {
    const data = new FormData();
    data.append('file', photo);
  };

  useEffect(() => {
    resetModifiers();
  }, []);

  return (
    <>
      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          values = {
            ...values,
            user_id: 1,
            hashtags: JSON.stringify({ modifiers: [...hashtags] }),
            modifiers: JSON.stringify({
              modifiers: [modifiersWithoutIcon()],
            }),
            longitude: -22.11,
            latitude: 2.11,
            photo: photoHandler(),
          };
          axios
            .post('http://localhost:5000/graphql', {
              query: print(ADD_EVENT),
              variables: { input: values },
            })
            .then((res) => {
              console.log(res.data);
              setHashtags([]);
              resetForm(initialState);
              resetModifiers();
              setModifiers([]);
            })
            .catch((err) => console.log(err.message));
          // console.log(values);
          // setHashtags([]);
          // resetForm(initialState);
          // resetModifiers();
          // setModifiers([]);
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
                    setPhoto={setPhoto}
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
