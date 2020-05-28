import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { print } from "graphql";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

// redux action imports
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
  parseTime,
} from "../../../utilities/functions";

const initialState = {
  title: "",
  description: "",
  date: "",
  startTime: "",
  endTime: "",
  category_id: "",
  address: "",
  latitude: "",
  longitude: "",
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

  // had to pull this out of useEffect to get it to work correctly
  if (isEditing && !eventToEdit.endTime) eventToEdit.endTime = "";

  useEffect(() => {
    if (isEditing) {
      eventToEdit.date = formatDate(Number(eventToEdit.date));
      const savedHashtags = JSON.parse(eventToEdit.hashtags);
      let savedModifiers = JSON.parse(eventToEdit.modifiers);

      if (Object.keys(savedModifiers).length !== 0) {
        savedModifiers = savedModifiers.modifiers;
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
        onSubmit={(values, { resetForm }) => {
          if (isEditing) {
            const updatedEvent = {
              title: values.title,
              description: values.description,
              category_id: values.category_id,
              address: values.address,
              startTime: values.startTime,
              date: values.date,
              endTime: values.endTime ? values.endTime : null,
              hashtags: JSON.stringify({ hashtags: [...hashtags] }),
              modifiers: JSON.stringify({
                modifiers: [...modifiersWithoutIcon()],
              }),
              longitude: values.longitude,
              latitude: values.latitude,
              // replace with variable
              user_id: 1,
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
            const timeObject = parseTime(
              new Date(`${values.date} ${values.startTime}`).getTime(),
              values.startTime,
              values.endTime
            );
            const newEvent = {
              ...values,
              date: timeObject.formattedDate,
              endTime: values.endTime ? values.endTime : null,
              hashtags: JSON.stringify({ hashtags: [...hashtags] }),
              modifiers: JSON.stringify({
                modifiers: [...modifiersWithoutIcon()],
              }),
              longitude: values.longitude,
              latitude: values.latitude,
              // replace with variable
              user_id: 1,
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
        {({ handleSubmit, handleChange, values, setFieldValue }) => (
          <div className="createEventContainer">
            <CreateEventHeader page={page} />
            <Form className="createForm" onSubmit={handleSubmit}>
              {page === 1 && (
                <>
                  <FormPageOne
                    values={values}
                    handleChange={handleChange}
                    setPage={setPage}
                    setFieldValue={setFieldValue}
                  />
                </>
              )}

              {page === 2 && (
                <>
                  <FormPageTwo
                    setPage={setPage}
                    handleChange={handleChange}
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
