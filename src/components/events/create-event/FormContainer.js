import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { print } from "graphql";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import {
  createEventSuccess,
  resetInviteSuccess,
  updateEventSuccess,
} from "../../../utilities/actions/index.js";

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

  eventToEdit.startTime = moment(eventToEdit.startTime, "HH:mm").format(
    "hh:mma"
  );
  eventToEdit.endTime = moment(eventToEdit.endTime, "HH:mm").format("hh:mma");

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

  // reset form on each render
  useEffect(() => {
    dispatch(resetInviteSuccess([]));
    resetModifiers();
  }, [dispatch]);

  // populate modifiers and hashtags with saved event details if editing
  useEffect(() => {
    if (isEditing && eventToEdit) {
      eventToEdit.startTime = moment(eventToEdit.startTime, "H:mm").format(
        "hh:mma"
      );
      eventToEdit.endTime = moment(eventToEdit.endTime, "H:mm").format(
        "hh:mma"
      );

      const hashtagList = JSON.parse(eventToEdit.hashtags);
      const modifierList = JSON.parse(eventToEdit.modifiers);
      const modifierArr = modifierList.modifiers[0];

      function restoreSavedModifiers(arr1, arr2) {
        let arr = [];
        for (let i = 0; i < arr1.length; i++) {
          for (let j = 0; j < arr2.length; j++) {
            if (arr1[i].id === arr2[j].id) {
              arr1[i].active = true;
              arr.push(arr1[i]);
            }
          }
          setModifiers(arr);
        }
      }
      restoreSavedModifiers(modifierData, modifierArr);
      setHashtags(hashtagList.hashtags);
    }
  }, [isEditing, eventToEdit]);

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
              endTime: values.endTime,
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
                console.log(res.data.data.updateEvent);
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
