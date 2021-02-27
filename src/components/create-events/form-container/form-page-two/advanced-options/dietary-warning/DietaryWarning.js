import React from 'react';
import { dietaryWarningStyles } from './DietaryWarning.styles';

const DietaryWarning = ({ diet, dietWarnings, setDietWarnings }) => {
    const styles = dietaryWarningStyles();

    const removeDietWarning = (id) => {
        setDietWarnings(
            dietWarnings.filter((diet) => {
                return diet.id !== id;
            })
        );
    };

    return (
        <div key={diet.id} className={styles.warning}>
            <p className={styles.p}>{diet.title}</p>
            <span
                className={styles.span}
                onClick={() => removeDietWarning(diet.id)}
            >
                x
            </span>
        </div>
    );
};

export default DietaryWarning;
