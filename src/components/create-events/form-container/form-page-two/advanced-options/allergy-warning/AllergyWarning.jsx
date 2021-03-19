import React from 'react';
import { hashtagAndWarningStyles } from '../../../../CreateEvent.styles';

const AllergyWarning = ({ allergy, values, setValues }) => {
  const styles = hashtagAndWarningStyles();

  const removeAllergy = () => {
    setValues({ ...values, allergenWarnings: values.allergenWarnings.filter((ele) => ele !== allergy) });
  };

  return (
    <div className={styles.root} style={{ background: '#ea6565' }}>
      <p className={styles.p}>{allergy}</p>
      <span className={styles.span} onClick={() => removeAllergy()}>
        x
      </span>
    </div>
  );
};

export default AllergyWarning;
