import React, { useEffect, useState } from 'react';
import { formPageOneStyles } from '../FormPageOne.styles';
import TextField from '@material-ui/core/TextField';
import { ErrorMessage } from '@hookform/error-message';
import moment from 'moment';
import { ErrorSharp } from '@material-ui/icons';

export default function DateInput({ errors, setValues, values, validate }) {
  const today = moment().format('YYYY-MM-DD');
  const styles = formPageOneStyles();

  const handleChange = (e) => {
    e.persist();
    setValues((values) => {
      return { ...values, date: e.target.value };
    });
  };

  return (
    <>
      <div className={styles.timeDiv}>
        <label htmlFor="eventFormDate" className={styles.label}>
          Date
        </label>

        <TextField
          name="date"
          type="date"
          className={styles.date}
          InputProps={{
            inputProps: { min: today },
            disableUnderline: true,
          }}
          onChange={handleChange}
          value={values.date}
          onBlur={() => {
            validate('date');
          }}
        />
      </div>
      {errors.date && errors.date.length && (
        <ErrorMessage
          name="date"
          errors={errors}
          message={errors.date[0]}
          render={({ message }) => <p style={{ color: 'crimson' }}>{message}</p>}
        />
      )}
    </>
  );
}
