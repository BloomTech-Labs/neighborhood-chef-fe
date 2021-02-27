import React from 'react';

import { allergyWarningStyles } from './AllergyWarning.styles';

const AllergyWarning = ({ allergy, allergenList, setAllergenList }) => {
    const styles = allergyWarningStyles();

    const removeAllergy = (id) => {
        setAllergenList(
            allergenList.filter((allergy) => {
                return allergy.id !== id;
            })
        );
    };

    return (
        <div key={allergy.id} className={styles.warning}>
            <p className={styles.p}>{allergy.name}</p>
            <span
                className={styles.span}
                onClick={() => removeAllergy(allergy.id)}
            >
                x
            </span>
        </div>
    );
};

export default AllergyWarning;
