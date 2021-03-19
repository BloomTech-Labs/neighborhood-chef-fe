import React, { useState } from 'react';

import Hashtag from './hashtag/Hashtag';
import Typography from '@material-ui/core/Typography';
import { addModifierFormStyles } from '../../../CreateEvent.styles';

const AddHashtag = ({ hashtags, values, setValues }) => {
  const [formInput, setFormInput] = useState('');
  const styles = addModifierFormStyles();

  const handleChange = (e) => {
    e.preventDefault();
    setFormInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.persist();
    setValues((values) => {
      return { ...values, category: e.target.value };
    });
    if (values.hashtags.indexOf(formInput) === -1) {
      setValues((values) => {
        return { ...values, hashtags: [...values.hashtags, formInput] };
      });
    }
    setFormInput('');
  };

  return (
    <div className={styles.root}>
      <Typography>Add some hashtags for your event.</Typography>
      <div className={styles.container}>
        <input
          type="text"
          name="formInput"
          value={formInput}
          onChange={handleChange}
          className={styles.input}
        />
        <button
          onClick={handleSubmit}
          disabled={!formInput}
          className={`${styles.button} ${!formInput ? styles.inactive : ''}`}
        >
          Add +
        </button>
      </div>
      <div className={styles.modifierContainer}>
        {values.hashtags.length > 0 &&
          values.hashtags.map((hashtag) => {
            return <Hashtag key={hashtag} hashtag={hashtag} values={values} setValues={setValues} />;
          })}
      </div>
    </div>
  );
};

export default AddHashtag;
