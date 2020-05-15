import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { print } from "graphql";
import axios from "axios";
import { useDispatch } from "react-redux";

import {
  createEventSuccess,
  resetInviteSuccess,
} from "../../../utilities/actions/index.js";
import { ADD_EVENT } from "../../../graphql/events/event-mutations.js";
import CreateEventHeader from "./CreateEventHeader.js";
import FormPageOne from "./FormPageOne.js";
import FormPageTwo from "./FormPageTwo.js";
import FormPageThree from "./FormPageThree.js";
import FormPageFour from "./FormPageFour.js";
import { modifierData } from "./FormPageTwo.js";

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  address: Yup.string().required("Address is required"),
  description: Yup.string().required("Description is required"),
  date: Yup.date().required("Date is required"),
  startTime: Yup.string().required("Start Time is required"),
  category_id: Yup.number().required("Category is required"),
});

const initialState = {
  title: "",
  description: "",
  date: "",
  startTime: "",
  endTime: "",
  category_id: "",
  address: "",
};

const FormContainer = () => {
  const [page, setPage] = useState(1);
  const [hashtags, setHashtags] = useState([]);
  const [modifiers, setModifiers] = useState([]);
  const [photo, setPhoto] = useState(null);
  const dispatch = useDispatch();

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
    if (photo) {
      const data = new FormData();
      data.append("image", photo, photo.name);
      return data;
    } else {
      return null;
    }
  };

  function getBase64(photo) {
    if (photo) {
      let reader = new FileReader();
      reader.readAsDataURL(photo);
      reader.onload = function () {
        return reader.result;
      };
      reader.onerror = function (error) {
        console.log("Error: ", error);
      };
    } else {
      return null;
    }
  }

  useEffect(() => {
    dispatch(resetInviteSuccess([]));
    resetModifiers();
  }, [dispatch]);

  return (
    <>
      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          values = {
            ...values,
            // replace with variable
            user_id: 1,
            hashtags: JSON.stringify({ modifiers: [...hashtags] }),
            modifiers: JSON.stringify({
              modifiers: [modifiersWithoutIcon()],
            }),
            // replace with calculated longitude and latitude
            longitude: -22.11,
            latitude: 2.11,
            // photo still not working quite right
            photo: getBase64(photo),
          };
          axios
            .post(process.env.REACT_APP_URL, {
              query: print(ADD_EVENT),
              variables: { input: values },
            })
            .then((res) => {
              dispatch(createEventSuccess(res.data.data.addEvent));
              setHashtags([]);
              resetForm(initialState);
              resetModifiers();
              setModifiers([]);
              setPage(4);
            })
            .catch((err) => console.log(err.message));
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
            </Form>
            {page === 4 && (
              <>
                <FormPageFour />
              </>
            )}
          </div>
        )}
      </Formik>
    </>
  );
};

export default FormContainer;
