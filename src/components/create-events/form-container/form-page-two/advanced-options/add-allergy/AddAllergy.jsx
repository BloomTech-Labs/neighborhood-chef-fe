import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';

import AllergyWarning from '../allergy-warning/AllergyWarning';
import { addModifierFormStyles } from '../../../../CreateEvent.styles';

const AddAllergy = ({ values, setValues }) => {
  const [formInput, setFormInput] = useState('');
  const styles = addModifierFormStyles();

  const handleChange = (e) => {
    e.preventDefault();
    setFormInput(e.target.value);
  };

  const addAllergy = (e) => {
    e.preventDefault();
    if (!values.allergenWarnings.includes(formInput)) {
      setValues({ ...values, allergenWarnings: [...values.allergenWarnings, formInput] });
    }
    setFormInput('');
  };

  return (
    <>
      <div className={styles.root}>
        <Typography>Add allergy warnings</Typography>
        <input type="text" name="name" onChange={handleChange} value={formInput} className={styles.input} />
        <button
          onClick={addAllergy}
          disabled={!formInput}
          className={`${styles.button} ${!formInput ? styles.inactive : ''}`}
        >
          Add +
        </button>
      </div>
      <div className={styles.modifierContainer}>
        {values.allergenWarnings.length > 0 &&
          values.allergenWarnings.map((allergy) => {
            return <AllergyWarning allergy={allergy} key={allergy} values={values} setValues={setValues} />;
          })}
      </div>
    </>
  );
};

export default AddAllergy;
