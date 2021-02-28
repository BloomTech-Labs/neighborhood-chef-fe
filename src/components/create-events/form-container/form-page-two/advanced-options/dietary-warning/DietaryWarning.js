import React from 'react';
import { hashtagAndWarningStyles } from '../../../../CreateEvent.styles';

const DietaryWarning = ({ diet, dietWarnings, setDietWarnings }) => {
    const styles = hashtagAndWarningStyles();

    const removeDietWarning = (id) => {
        setDietWarnings(
            dietWarnings.filter((diet) => {
                return diet.id !== id;
            })
        );
    };

    return (
        <div
            key={diet.id}
            className={styles.root}
            style={{ background: '#ea6565' }}
        >
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
