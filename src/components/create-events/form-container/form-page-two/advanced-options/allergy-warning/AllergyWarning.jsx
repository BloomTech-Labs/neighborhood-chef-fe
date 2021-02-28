import React from 'react';
import { hashtagAndWarningStyles } from '../../../../CreateEvent.styles';

const AllergyWarning = ({ allergy, allergenList, setAllergenList }) => {
    const styles = hashtagAndWarningStyles();

    const removeAllergy = (id) => {
        setAllergenList(
            allergenList.filter((allergy) => {
                return allergy.id !== id;
            })
        );
    };

    return (
        <div
            key={allergy.id}
            className={styles.root}
            style={{ background: '#ea6565' }}
        >
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
