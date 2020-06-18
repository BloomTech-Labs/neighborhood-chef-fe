import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { print } from "graphql";
import { axiosWithAuth } from "../../../utilities/axiosWithAuth";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../../utilities/actions";

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
  ADD_EVENT_INGREDIENTS,
  DELETE_EVENT_INGREDIENT,
} from "../../../graphql/events/event-mutations.js";

// component and helper function imports
import FormPageOne from "./FormPageOne.js";
import FormPageTwo from "./FormPageTwo.js";
import FormPageThree from "./FormPageThree.js";
import FormPageFour from "./FormPageFour.js";
import { modifierData } from "./FormPageTwo.js";
import { restoreSavedModifiers } from "../../../utilities/functions";

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
  const me = JSON.parse(sessionStorage.getItem("user"));
  const page = useSelector((state) => state.page);
  const [hashtags, setHashtags] = useState([]);
  const [modifiers, setModifiers] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [allergenList, setAllergenList] = useState([]);
  const [dietWarnings, setDietWarnings] = useState([]);
  const [ingredientList, setIngredientList] = useState([]);
  const [deletedIngredientsList, setDeletedIngredientsList] = useState([]);
  const eventToEdit = useSelector((state) => state.eventToEdit);
  const ingredientsToEdit = useSelector(
    (state) => state.currentEventIngredients
  );
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

  useEffect(() => {
    if (isEditing) {
      const savedHashtags = eventToEdit.hashtags;
      const savedModifiers = eventToEdit.modifiers;
      const savedAllergens = eventToEdit.allergenWarnings;
      const savedDietWarnings = eventToEdit.dietaryWarnings;

      if (savedModifiers && Object.keys(savedModifiers).length !== 0) {
        restoreSavedModifiers(
          modifierData,
          savedModifiers.modifiers,
          setModifiers
        );
      }

      if (savedHashtags && Object.keys(savedHashtags).length !== 0) {
        setHashtags(savedHashtags.hashtags);
      }

      if (savedAllergens && Object.keys(savedAllergens).length !== 0) {
        setAllergenList(savedAllergens.allergenWarnings);
      }

      if (savedDietWarnings && Object.keys(savedDietWarnings).length !== 0) {
        setDietWarnings(savedDietWarnings.dietaryWarnings);
      }

      if (eventToEdit.photo !== "null") {
        setPhoto(eventToEdit.photo);
      }

      if (ingredientsToEdit && ingredientsToEdit.length > 0) {
        setIngredientList(ingredientsToEdit);
      }
    }
    //eslint-disable-next-line
  }, [isEditing, eventToEdit, dispatch]);

  // cleanup
  useEffect(() => {
    return () => {
      resetModifiers();
      dispatch(cancelEdit());
      dispatch(setPage(1));
    };
  }, [dispatch]);

  return (
    <>
      <Formik
        initialValues={isEditing ? eventToEdit : initialState}
        onSubmit={(values, { resetForm }) => {
          let startTime = new Date(`${values.date} ${values.startTime}`);
          let endTime;
          if (values.endTime) {
            endTime = new Date(`${values.date} ${values.endTime}`);
          }
          const event = {
            title: values.title,
            description: values.description,
            category_id: values.category_id,
            address: values.address,
            startTime: startTime.toISOString(),
            endTime: values.endTime ? endTime.toISOString() : null,
            hashtags: JSON.stringify({ hashtags: [...hashtags] }),
            modifiers: JSON.stringify({
              modifiers: [...modifiersWithoutIcon()],
            }),
            longitude: values.longitude,
            latitude: values.latitude,
            photo: photo ? photo : null,
            user_id: parseInt(me.id),
            allergenWarnings: JSON.stringify({
              allergenWarnings: [...allergenList],
            }),
            dietaryWarnings: JSON.stringify({
              dietaryWarnings: [...dietWarnings],
            }),
          };

          if (isEditing) {
            axiosWithAuth()
              .post(`${process.env.REACT_APP_BASE_URL}/graphql`, {
                query: print(UPDATE_EVENT),
                variables: {
                  id: Number(eventToEdit.id),
                  input: event,
                },
              })
              .then((res) => {
                dispatch(updateEventSuccess(res.data.data.updateEvent));

                const addedIngredients = ingredientList.filter((ingredient) => {
                  return ingredient.id === undefined;
                });

                if (
                  addedIngredients.length < 1 &&
                  deletedIngredientsList.length < 1
                ) {
                  setHashtags([]);
                  resetForm(initialState);
                  resetModifiers();
                  setModifiers([]);
                  dispatch(setPage(4));
                } else {
                  if (addedIngredients.length > 0) {
                    const formattedIngredientsList = addedIngredients.map(
                      (ingredient) => {
                        return {
                          ...ingredient,
                          event_id: Number(res.data.data.updateEvent.id),
                        };
                      }
                    );

                    axiosWithAuth()
                      .post(`${process.env.REACT_APP_BASE_URL}/graphql`, {
                        query: print(ADD_EVENT_INGREDIENTS),
                        variables: {
                          input: {
                            ingredients: formattedIngredientsList,
                          },
                        },
                      })
                      .then((res) => {
                        if (deletedIngredientsList.length > 0) {
                          deletedIngredientsList.forEach(async (ingredient) => {
                            try {
                              const response = await axiosWithAuth().post(
                                `${process.env.REACT_APP_BASE_URL}/graphql`,
                                {
                                  query: print(DELETE_EVENT_INGREDIENT),
                                  variables: {
                                    id: ingredient.id,
                                  },
                                }
                              );
                              console.log(response);
                            } catch (err) {
                              console.dir(err);
                            }
                          });

                          setHashtags([]);
                          resetForm(initialState);
                          resetModifiers();
                          setModifiers([]);
                          dispatch(setPage(4));
                        } else {
                          setHashtags([]);
                          resetForm(initialState);
                          resetModifiers();
                          setModifiers([]);
                          dispatch(setPage(4));
                        }
                      })
                      .catch((err) => console.dir(err));
                  } else {
                    deletedIngredientsList.forEach(async (ingredient) => {
                      try {
                        const response = await axiosWithAuth().post(
                          `${process.env.REACT_APP_BASE_URL}/graphql`,
                          {
                            query: print(DELETE_EVENT_INGREDIENT),
                            variables: {
                              id: ingredient.id,
                            },
                          }
                        );
                        console.log(response);
                      } catch (err) {
                        console.dir(err);
                      }
                    });

                    setHashtags([]);
                    resetForm(initialState);
                    resetModifiers();
                    setModifiers([]);
                    dispatch(setPage(4));
                  }
                }
              })
              .catch((err) => console.log(err.message));
          } else {
            event.createDateTime = new Date().toISOString();
            axiosWithAuth()
              .post(`${process.env.REACT_APP_BASE_URL}/graphql`, {
                query: print(ADD_EVENT),
                variables: { input: event },
              })
              .then((res) => {
                dispatch(createEventSuccess(res.data.data.addEvent));

                const formattedIngredientsList = ingredientList.map(
                  (ingredient) => {
                    return {
                      ...ingredient,
                      event_id: Number(res.data.data.addEvent.id),
                    };
                  }
                );

                axiosWithAuth()
                  .post(`${process.env.REACT_APP_BASE_URL}/graphql`, {
                    query: print(ADD_EVENT_INGREDIENTS),
                    variables: {
                      input: {
                        ingredients: formattedIngredientsList,
                      },
                    },
                  })
                  .then((res) => {
                    setHashtags([]);
                    resetForm(initialState);
                    resetModifiers();
                    setModifiers([]);
                    dispatch(setPage(4));
                  })
                  .catch((err) => console.dir(err));
              })
              .catch((err) => console.log(err.message));
          }
        }}
      >
        {({ handleSubmit, handleChange, values, setFieldValue }) => (
          <div className="createEventContainer">
            <Form className="createForm" onSubmit={handleSubmit}>
              {page === 1 && (
                <>
                  <FormPageOne
                    values={values}
                    handleChange={handleChange}
                    setFieldValue={setFieldValue}
                  />
                </>
              )}

              {page === 2 && (
                <>
                  <FormPageTwo
                    values={values}
                    handleChange={handleChange}
                    hashtags={hashtags}
                    setHashtags={setHashtags}
                    modifiers={modifiers}
                    setModifiers={setModifiers}
                    setPhoto={setPhoto}
                    allergenList={allergenList}
                    setAllergenList={setAllergenList}
                    dietWarnings={dietWarnings}
                    setDietWarnings={setDietWarnings}
                    ingredientList={ingredientList}
                    setIngredientList={setIngredientList}
                    deletedIngredientsList={deletedIngredientsList}
                    setDeletedIngredientsList={setDeletedIngredientsList}
                  />
                </>
              )}

              {page === 3 && (
                <>
                  <FormPageThree
                    hashtags={hashtags}
                    setHashtags={setHashtags}
                    values={values}
                    handleSubmit={handleSubmit}
                    modifiers={modifiers}
                    setModifiers={setModifiers}
                    photo={photo}
                    allergenList={allergenList}
                    setAllergenList={setAllergenList}
                    dietWarnings={dietWarnings}
                    setDietWarnings={setDietWarnings}
                    ingredientList={ingredientList}
                    setIngredientList={setIngredientList}
                    deletedIngredientsList={deletedIngredientsList}
                    setDeletedIngredientsList={setDeletedIngredientsList}
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
