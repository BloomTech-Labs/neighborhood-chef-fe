import React from 'react';

import Hashtag from '../../form-page-two/add-hashtag/hashtag/Hashtag.jsx';
import Modifier from '../../form-page-two/modifier/Modifier.jsx';
import AllergyWarning from '../../form-page-two/advanced-options/allergy-warning/AllergyWarning.jsx';
import DietaryWarning from '../../form-page-two/advanced-options/dietary-warning/DietaryWarning.jsx';
import { displayEventModifiersStyles } from './DisplayModifiers.styles';
import { modifierData } from '../../form-page-two/FormPageTwo.jsx';

const DisplayEventModifiers = ({ values, setValues }) => {
  const styles = displayEventModifiersStyles();

  return (
    <div className={styles.root}>
      {values.hashtags.length > 0 && (
        <div className={styles.modifierContainer}>
          <h4 className={styles.h4}>Hashtags</h4>
          <div className={styles.modifier}>
            {values.hashtags.map((hashtag) => {
              return <Hashtag key={hashtag} hashtag={hashtag} values={values} setValues={setValues} />;
            })}
          </div>
        </div>
      )}

      {values.modifiers.length > 0 && (
        <div className={styles.modifierContainer}>
          <h4 className={styles.h4}>Modifications</h4>
          <div className={styles.modifier}>
            {modifierData.map((modifier) => {
              if (values.modifiers.includes(modifier.title)) {
                return (
                  <Modifier key={modifier.id} modifier={modifier} values={values} setValues={setValues} />
                );
              }
            })}
          </div>
        </div>
      )}

      {values.allergenWarnings.length > 0 && (
        <div className={styles.modifierContainer}>
          <h4 className={styles.h4}>Allergy Warnings</h4>
          <div className={styles.modifier}>
            {values.allergenWarnings.map((allergy) => {
              return <AllergyWarning key={allergy} allergy={allergy} values={values} setValues={setValues} />;
            })}
          </div>
        </div>
      )}

      {values.dietaryWarnings.length > 0 && (
        <div className={styles.modifierContainer}>
          <h4 className={styles.h4}>Dietary Warnings</h4>
          <div className={styles.modifier}>
            {values.dietaryWarnings.map((diet) => {
              return <DietaryWarning key={diet} diet={diet} values={values} setValues={setValues} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayEventModifiers;
