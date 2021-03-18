import React, { useEffect, useState } from 'react';
import { formPageOneStyles } from '../FormPageOne.styles';
import { ErrorMessage } from '@hookform/error-message';

export default function DescriptionInput({ errors, setValues, values, validate }) {
  const styles = formPageOneStyles();

  const handleChange = (e) => {
    e.persist();
    setValues((values) => {
      return { ...values, description: e.target.value };
    });
  };

  return (
    <>
      <input
        type="textarea"
        name="description"
        placeholder="Write a description for your event..."
        onChange={handleChange}
        value={values.description}
        onBlur={() => {
          validate('description');
        }}
        className={styles.textArea}
      />
      {errors.description && errors.description.length && (
        <ErrorMessage
          name="description"
          errors={errors}
          message={errors.description[0]}
          render={({ message }) => <p style={{ color: 'crimson' }}>{message}</p>}
        />
      )}
    </>
  );
}
