import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../../utilities/actions';

// redux action imports
import { cancelEdit } from '../../../utilities/actions/index';

// component and helper function imports
import FormPageOne from './form-page-one/FormPageOne';
import FormPageTwo from './form-page-two/FormPageTwo';
import FormPageThree from './form-page-three/FormPageThree';
import FormPageFour from './form-page-four/FormPageFour';
import { modifierData } from './form-page-two/FormPageTwo';
import { useForm } from 'react-hook-form';
import { formContainerStyles } from './FormContainer.styles';

import useForm2 from '../../../hooks/useForm.js';
import * as yup from 'yup';

const FormContainer = () => {
  const styles = formContainerStyles();
  const user = useSelector((state) => state.user);
  const [stepper, setStepper] = useState(1);
  const { register, handleSubmit, control, setValue, getValues, setError, clearErrors } = useForm({
    mode: 'onBlur',
  });

  const { values, setValues, validate, errors } = useForm2(
    {
      title: '',
      description: '',
      address: '',
      date: '',
      startTime: '',
      endTime: '',
      category: '',
      latitude: '',
      longitude: '',
    },
    yup.object().shape({
      title: yup.string().required("'Title' is a required field"),
      description: yup.string().required("'Description' is a required field"),
      address: yup.string().required("'Address' is a required field"),
      date: yup.string().required("'Date' is a required field"),
      startTime: yup.string().required("'Start Time' is a required field"),
      endTime: yup.string(),
      category: yup.string(),
      latitude: yup.number().required(),
      longitude: yup.number().required(),
    })
  );
  const [hashtags, setHashtags] = useState([]);
  const [modifiers, setModifiers] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [allergenList, setAllergenList] = useState([]);
  const [dietWarnings, setDietWarnings] = useState([]);
  // const eventToEdit = useSelector((state) => state.eventToEdit);
  // const isEditing = useSelector((state) => state.isEditing);
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

  //register mapbox fields
  useEffect(() => {
    register('title', { required: true });
    register('address', { required: true });
    register('latitude', { required: true });
    register('longitude', { required: true });
    register('description', { required: true });
    register('date', { required: true });
    register('startTime', { required: true });
    register('endTime', { required: false });
    // register('category', { required: false });
  }, []);

  // useEffect(() => {
  //     if (isEditing) {
  //         const savedHashtags = eventToEdit.hashtags;
  //         const savedModifiers = eventToEdit.modifiers;
  //         const savedAllergens = eventToEdit.allergenWarnings;
  //         const savedDietWarnings = eventToEdit.dietaryWarnings;

  //         if (savedModifiers && Object.keys(savedModifiers).length > 0) {
  //             restoreSavedModifiers(
  //                 modifierData,
  //                 savedModifiers.modifiers,
  //                 setModifiers
  //             );
  //         }

  //         if (savedHashtags && Object.keys(savedHashtags).length > 0) {
  //             setHashtags(savedHashtags.hashtags);
  //         }

  //         if (savedAllergens && Object.keys(savedAllergens).length > 0) {
  //             setAllergenList(savedAllergens.allergenWarnings);
  //         }

  //         if (
  //             savedDietWarnings &&
  //             Object.keys(savedDietWarnings).length > 0
  //         ) {
  //             setDietWarnings(savedDietWarnings.dietaryWarnings);
  //         }

  //         if (eventToEdit.photo !== 'null') {
  //             setPhoto(eventToEdit.photo);
  //         }
  //     }
  //     //eslint-disable-next-line
  // }, [isEditing, eventToEdit, dispatch]);

  // cleanup
  useEffect(() => {
    return () => {
      resetModifiers();
      dispatch(cancelEdit());
      dispatch(setPage(1));
    };
  }, [dispatch]);

  // initialValues={isEditing ? eventToEdit : initialState}
  // onSubmit={(values, { resetForm }) => {
  //     let startTime = new Date(
  //         `${values.date} ${values.startTime}`
  //     );
  //     let endTime;
  //     if (values.endTime) {
  //         endTime = new Date(`${values.date} ${values.endTime}`);
  //     }
  //     const event = {
  //         title: values.title,
  //         description: values.description,
  //         category: values.category,
  //         address: values.address,
  //         startTime: startTime.toISOString(),
  //         endTime: values.endTime ? endTime.toISOString() : null,
  //         hashtags: JSON.stringify({ hashtags: [...hashtags] }),
  //         modifiers: JSON.stringify({
  //             modifiers: [...modifiersWithoutIcon()],
  //         }),
  //         longitude: values.longitude,
  //         latitude: values.latitude,
  //         photo: photo ? photo : null,
  //         user_id: parseInt(user.id),
  //         allergenWarnings: JSON.stringify({
  //             allergenWarnings: [...allergenList],
  //         }),
  //         dietaryWarnings: JSON.stringify({
  //             dietaryWarnings: [...dietWarnings],
  //         }),
  //     };

  //     if (isEditing) {
  //         event.id = eventToEdit.id;

  //         axiosWithAuth()
  //             .post(`${process.env.REACT_APP_BASE_URL}/graphql`, {
  //                 query: print(CREATE_EVENT),
  //                 variables: {
  //                     id: Number(eventToEdit.id),
  //                     input: event,
  //                 },
  //             })
  //             .then((res) => {
  //                 dispatch(
  //                     updateEventSuccess(
  //                         res.data.data.updateEvent
  //                     )
  //                 );
  //                 setHashtags([]);
  //                 resetForm(initialState);
  //                 resetModifiers();
  //                 setModifiers([]);
  //                 dispatch(setPage(4));
  //             })
  //             .catch((err) => console.log(err.message));
  //     } else {
  //         event.createDateTime = new Date().toISOString();
  //         axiosWithAuth()
  //             .post(`${process.env.REACT_APP_BASE_URL}/graphql`, {
  //                 query: print(CREATE_EVENT),
  //                 variables: { input: event },
  //             })
  //             .then((res) => {
  //                 event.id = res.data.data.inputEvent.id;
  //                 dispatch(createEventSuccess(event));
  //                 setHashtags([]);
  //                 resetForm(initialState);
  //                 resetModifiers();
  //                 setModifiers([]);
  //                 dispatch(setPage(4));
  //             })
  //             .catch((err) => console.dir(err));
  //     }
  // }}

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {stepper === 1 && (
        <FormPageOne
          setStepper={setStepper}
          values={values}
          setValues={setValues}
          validate={validate}
          errors={errors}
        />
      )}
      {stepper === 2 && (
        <FormPageTwo
          register={register}
          hashtags={hashtags}
          setHashtags={setHashtags}
          modifiers={modifiers}
          setModifiers={setModifiers}
          photo={photo}
          setPhoto={setPhoto}
          allergenList={allergenList}
          setAllergenList={setAllergenList}
          dietWarnings={dietWarnings}
          setDietWarnings={setDietWarnings}
          setStepper={setStepper}
          getValues={getValues}
          setValue={setValue}
        />
      )}
      {stepper === 3 && (
        <FormPageThree
          hashtags={hashtags}
          setHashtags={setHashtags}
          register={register}
          getValues={getValues}
          handleSubmit={handleSubmit}
          modifiers={modifiers}
          setModifiers={setModifiers}
          photo={photo}
          allergenList={allergenList}
          setAllergenList={setAllergenList}
          dietWarnings={dietWarnings}
          setDietWarnings={setDietWarnings}
          setStepper={setStepper}
        />
      )}
      {stepper === 4 && <FormPageFour />}
    </form>
  );
};

export default FormContainer;
