import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';

import DietaryWarning from '../dietary-warning/DietaryWarning.js';
import { addModifierFormStyles } from '../../../../CreateEvent.styles';

const AddDietRestriction = ({ dietWarnings, setDietWarnings }) => {
    const [formInput, setFormInput] = useState({ title: '' });
    const styles = addModifierFormStyles();

    const handleChange = (e) => {
        e.preventDefault();
        setFormInput({ title: e.target.value });
    };

    const addDietWarning = (e) => {
        e.preventDefault();
        const newDietWarning = {
            id: dietWarnings.length + 1,
            title: formInput.title,
        };
        setDietWarnings([...dietWarnings, newDietWarning]);
        setFormInput({ title: '' });
    };

    return (
        <>
            <div className={styles.root}>
                <Typography>Add dietary warnings</Typography>
                <input
                    type="text"
                    name="title"
                    onChange={handleChange}
                    value={formInput.title}
                    className={styles.input}
                />
                <button
                    onClick={addDietWarning}
                    disabled={!formInput.title}
                    className={`${styles.button} ${
                        !formInput.title ? styles.inactive : ''
                    }`}
                >
                    Add +
                </button>
            </div>
            <div className={styles.modifierContainer}>
                {dietWarnings.map((diet) => {
                    return (
                        <DietaryWarning
                            diet={diet}
                            key={diet.id}
                            dietWarnings={dietWarnings}
                            setDietWarnings={setDietWarnings}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default AddDietRestriction;
