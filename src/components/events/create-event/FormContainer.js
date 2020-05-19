import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { print } from "graphql";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

// action imports
import {
  createEventSuccess,
  updateEventSuccess,
  cancelEdit,
} from "../../../utilities/actions/index.js";

// graphql query imports
import {
  ADD_EVENT,
  UPDATE_EVENT,
} from "../../../graphql/events/event-mutations.js";

// component and helper function imports
import CreateEventHeader from "./CreateEventHeader.js";
import FormPageOne from "./FormPageOne.js";
import FormPageTwo from "./FormPageTwo.js";
import FormPageThree from "./FormPageThree.js";
import FormPageFour from "./FormPageFour.js";
import { modifierData } from "./FormPageTwo.js";
import {
  formatDate,
  restoreSavedModifiers,
} from "../../../utilities/functions";

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
  const eventToEdit = useSelector((state) => state.eventToEdit);
  const isEditing = useSelector((state) => state.isEditing);
  const dispatch = useDispatch();

  const resetModifiers = () => {
    return modifierData.map((mod) => (mod.active = false));
  };

  const modifiersWithoutIcon = () => {
    return modifiers.map((mod) => {
      return {
        id: mod.id,
        title: mod.title,
        active: mod.active,
      };
    });
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

  // had to pull this out of useEffect to get it to work correctly
  if (isEditing && !eventToEdit.endTime) eventToEdit.endTime = "";

  // populate form for edit mode
  useEffect(() => {
    if (isEditing) {
      eventToEdit.date = formatDate(Number(eventToEdit.date));
      const savedHashtags = JSON.parse(eventToEdit.hashtags);
      let savedModifiers = JSON.parse(eventToEdit.modifiers);

      if (Object.keys(savedModifiers).length !== 0) {
        savedModifiers = savedModifiers.modifiers[0];
        restoreSavedModifiers(modifierData, savedModifiers, setModifiers);
      }
      if (Object.keys(savedHashtags).length !== 0) {
        setHashtags(savedHashtags.hashtags);
      }
    }
  }, [isEditing, eventToEdit, dispatch]);

  // cleanup
  useEffect(() => {
    return () => {
      resetModifiers();
      dispatch(cancelEdit());
    };
  }, [dispatch]);

  return (
    <>
      <Formik
        initialValues={isEditing ? eventToEdit : initialState}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          if (isEditing) {
            // remove event id field from values object
            const updatedEvent = {
              title: values.title,
              address: values.address,
              description: values.description,
              date: values.date,
              startTime: values.startTime,
              endTime: values.endTime ? values.endTime : null,
              category_id: values.category_id,
              hashtags: JSON.stringify({ hashtags: [...hashtags] }),
              modifiers: JSON.stringify({
                modifiers: [modifiersWithoutIcon()],
              }),
              // replace with dynamic variable
              user_id: 1,
              // replace with calculated longitude and latitude
              longitude: -22.11,
              latitude: 2.11,
              // photo still not working quite right
              photo: null,
            };
            axios
              .post(`${process.env.REACT_APP_BASE_URL}/graphql`, {
                query: print(UPDATE_EVENT),
                variables: {
                  id: Number(eventToEdit.id),
                  input: updatedEvent,
                },
              })
              .then((res) => {
                dispatch(updateEventSuccess(res.data.data.updateEvent));
                setHashtags([]);
                resetForm(initialState);
                resetModifiers();
                setModifiers([]);
                setPage(4);
              })
              .catch((err) => console.log(err));
          } else {
            const newEvent = {
              ...values,
              endTime: values.endTime ? values.endTime : null,
              hashtags: JSON.stringify({ hashtags: [...hashtags] }),
              modifiers: JSON.stringify({
                modifiers: [modifiersWithoutIcon()],
              }),
              // replace with dynamic variable
              user_id: 1,
              // replace with calculated longitude and latitude
              longitude: -22.11,
              latitude: 2.11,
              // photo still not working quite right
              photo: null,
            };
            axios
              .post(`${process.env.REACT_APP_BASE_URL}/graphql`, {
                query: print(ADD_EVENT),
                variables: { input: newEvent },
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
          }
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
