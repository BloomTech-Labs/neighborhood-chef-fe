import React, { useState, useEffect } from 'react';

import Hashtag from './hashtag/Hashtag';
import Typography from '@material-ui/core/Typography';
import { addModifierFormStyles } from '../../../CreateEvent.styles';

const AddHashtag = ({ hashtags, getValues, setValue, register }) => {
  const [formInput, setFormInput] = useState('');
  const [forceUpdate, setForceUpdate] = useState(false);
  const styles = addModifierFormStyles();

  useEffect(() => {
    if (!getValues().hashtags) {
      register('hashtags');
      setValue('hashtags', JSON.stringify([]));
    }
  }, []);

  useEffect(() => {}, [forceUpdate]);

  const handleChange = (e) => {
    e.preventDefault();
    setFormInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (JSON.parse(getValues('hashtags')).indexOf(formInput) === -1) {
      setValue('hashtags', JSON.stringify([...JSON.parse(getValues('hashtags')), formInput]));
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
        {getValues().hashtags &&
          JSON.parse(getValues('hashtags')).map((hashtag) => {
            return (
              <Hashtag
                key={hashtag}
                hashtag={hashtag}
                setValue={setValue}
                getValues={getValues}
                setForceUpdate={setForceUpdate}
              />
            );
          })}
      </div>
    </div>
  );
};

export default AddHashtag;
