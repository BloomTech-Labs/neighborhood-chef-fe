import React from 'react';
import { useHistory } from 'react-router-dom';

import TitleInput from './title-input/title-input';
import DescriptionInput from './description-input/description-input';
import DateInput from './date-input/date-input';
import TimeInputs from './time-inputs/time-inputs';
import CatagoryInput from './category-input/catagory-input';
import MapboxGeocoder from './mapbox-geocoder/mapbox-geocoder';

import { formPageOneStyles } from './FormPageOne.styles';
import { buttonStyles } from '../../CreateEvent.styles';

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const FormPageOne = ({ setStepper, errors, values, setValues, validate }) => {
  const { push } = useHistory();
  const styles = formPageOneStyles();
  const btnStyles = buttonStyles();

  const validateAndTurnPage = () => {
    const isValid = validate();
    console.log(isValid);
    if (isValid) {
      setStepper(2);
      scrollToTop();
    }
  };

  return (
    <>
      <div className={styles.root}>
        <div className={styles.leftContainer}>
          <TitleInput errors={errors} values={values} setValues={setValues} validate={validate} />
          <MapboxGeocoder errors={errors} values={values} setValues={setValues} validate={validate} />
          <DescriptionInput errors={errors} values={values} setValues={setValues} validate={validate} />
        </div>

        <div className={styles.rightContainer}>
          <DateInput errors={errors} values={values} setValues={setValues} validate={validate} />
          <TimeInputs errors={errors} values={values} setValues={setValues} validate={validate} />
          <CatagoryInput errors={errors} values={values} setValues={setValues} validate={validate} />
        </div>
      </div>

      <div className={btnStyles.buttonContainer}>
        <button
          className={btnStyles.leftBtn}
          onClick={() => {
            push('/dashboard');
          }}
        >
          Cancel
        </button>
        <button type="button" className={btnStyles.rightBtn} onClick={validateAndTurnPage}>
          Next
        </button>
      </div>
    </>
  );
};

export default FormPageOne;
