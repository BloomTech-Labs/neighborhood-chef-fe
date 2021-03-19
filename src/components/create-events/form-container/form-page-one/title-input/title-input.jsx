import React from 'react';
import { formPageOneStyles } from '../FormPageOne.styles';
import { ErrorMessage } from '@hookform/error-message';
import CreateIcon from '@material-ui/icons/Create';

export default function TitleInput({ errors, setValues, values, validate }) {
  const styles = formPageOneStyles();

  const handleChange = (e) => {
    e.persist();
    console.log(values);
    console.log(e);
    setValues((values) => {
      return { ...values, [e.target.name]: e.target.value };
    });
  };

  return (
    <>
      <div className={styles.inputDiv}>
        <input
          type="text"
          name="title"
          value={values.title}
          placeholder="Title"
          className={styles.input}
          onChange={handleChange}
          onBlur={() => {
            validate('title');
          }}
        />

        <CreateIcon color="disabled" className={styles.icon} />
      </div>
      {errors.title && errors.title.length > 0 && (
        <ErrorMessage
          name="title"
          errors={errors}
          message={errors.title[0]}
          render={({ message }) => <p style={{ color: 'crimson' }}>{message}</p>}
        />
      )}
    </>
  );
}
