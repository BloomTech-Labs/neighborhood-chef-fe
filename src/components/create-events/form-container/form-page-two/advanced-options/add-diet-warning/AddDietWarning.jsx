import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';

import DietaryWarning from '../dietary-warning/DietaryWarning';
import { addModifierFormStyles } from '../../../../CreateEvent.styles';

const AddDietRestriction = ({ values, setValues }) => {
  const [formInput, setFormInput] = useState('');
  const styles = addModifierFormStyles();

  const handleChange = (e) => {
    setFormInput(e.target.value);
  };

  const addDietWarning = (e) => {
    e.preventDefault();
    if (!values.dietaryWarnings.includes(formInput)) {
      setValues({ ...values, dietaryWarnings: [...values.dietaryWarnings, formInput] });
    }
    setFormInput('');
  };

  return (
    <>
      <div className={styles.root}>
        <Typography>Add dietary warnings</Typography>
        <input type="text" name="title" onChange={handleChange} value={formInput} className={styles.input} />
        <button
          onClick={addDietWarning}
          disabled={!formInput}
          className={`${styles.button} ${!formInput ? styles.inactive : ''}`}
        >
          Add +
        </button>
      </div>
      <div className={styles.modifierContainer}>
        {values.dietaryWarnings.length > 0 &&
          values.dietaryWarnings.map((diet) => {
            return <DietaryWarning diet={diet} key={diet} values={values} setValues={setValues} />;
          })}
      </div>
    </>
  );
};

export default AddDietRestriction;
