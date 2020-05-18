import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { print } from "graphql";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

// action imports
import {
  createEventSuccess,
  updateEventSuccess,
} from "../../../utilities/actions/index.js";

// graphql query imports
import {
  ADD_EVENT,
  UPDATE_EVENT,
} from "../../../graphql/events/event-mutations.js";

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

  // reformat eventToEdit startTime, endTime, and date to autopopulate inputs when editing
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


  // had to put this outside useEffect to get it to work correctly
  if (isEditing) {
    eventToEdit.startTime = moment(eventToEdit.startTime, "H:mm").format(
      "hh:mma"
    );
    if (eventToEdit.endTime !== null) {
      eventToEdit.endTime = moment(eventToEdit.endTime, "H:mm").format(
        "hh:mma"
      );
      eventToEdit.endTime = "";
    }
  }

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
    resetModifiers();
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

  return (
    <>
      <Formik
        initialValues={isEditing ? eventToEdit : initialState}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          if (isEditing) {
            // remove id field from values
            const updatedEvent = {
              title: values.title,
              address: values.address,
              description: values.description,
              date: values.date,
              startTime: values.startTime,
              endTime: values.endTime ? values.endTime : null,
              category_id: values.category_id,
              // replace with variable
              user_id: 1,
              hashtags: JSON.stringify({ hashtags: [...hashtags] }),
              modifiers: JSON.stringify({
                modifiers: [modifiersWithoutIcon()],
              }),
              // replace with calculated longitude and latitude
              longitude: -22.11,
              latitude: 2.11,
              // photo still not working quite right
              photo: null,
            };
            axios
              .post(process.env.REACT_APP_URL, {
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
              // replace with variable
              user_id: 1,
              hashtags: JSON.stringify({ hashtags: [...hashtags] }),
              modifiers: JSON.stringify({
                modifiers: [modifiersWithoutIcon()],
              }),
              // replace with calculated longitude and latitude
              longitude: -22.11,
              latitude: 2.11,
              // photo still not working quite right
              photo: null,
            };
            axios
              .post(process.env.REACT_APP_URL, {
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
