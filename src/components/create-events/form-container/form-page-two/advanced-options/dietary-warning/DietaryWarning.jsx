import React from 'react';
import { hashtagAndWarningStyles } from '../../../../CreateEvent.styles';

const DietaryWarning = ({ diet, values, setValues }) => {
  const styles = hashtagAndWarningStyles();

  const removeDietWarning = () => {
    setValues({ ...values, dietaryWarnings: values.dietaryWarnings.filter((ele) => ele !== diet) });
  };

  return (
    <div className={styles.root} style={{ background: '#ea6565' }}>
      <p className={styles.p}>{diet}</p>
      <span className={styles.span} onClick={() => removeDietWarning()}>
        x
      </span>
    </div>
  );
};

export default DietaryWarning;
