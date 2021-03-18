import React, { useEffect, useState } from 'react';
import { formPageOneStyles } from '../FormPageOne.styles';
import CreateIcon from '@material-ui/icons/Create';

export default function CatagoryInput({ setValues, values }) {
  const styles = formPageOneStyles();

  const handleChange = (e) => {
    e.persist();
    setValues((values) => {
      return { ...values, category: e.target.value };
    });
  };

  return (
    <>
      <div className={styles.inputDiv}>
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={values.category}
          onChange={handleChange}
          className={styles.input}
        />
        <CreateIcon color="disabled" className={styles.icon} />
      </div>
    </>
  );
}
