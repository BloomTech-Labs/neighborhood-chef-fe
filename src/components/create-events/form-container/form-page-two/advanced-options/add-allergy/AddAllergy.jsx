import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';

import AllergyWarning from '../allergy-warning/AllergyWarning';
import { addModifierFormStyles } from '../../../../CreateEvent.styles';

const AddAllergy = ({ allergenList, setAllergenList }) => {
    const [formInput, setFormInput] = useState({ name: '' });
    const styles = addModifierFormStyles();

    const handleChange = (e) => {
        e.preventDefault();
        setFormInput({ name: e.target.value });
    };

    const addAllergy = (e) => {
        e.preventDefault();
        const newAllergy = {
            id: allergenList.length + 1,
            name: formInput.name,
        };
        setAllergenList([...allergenList, newAllergy]);
        setFormInput({ name: '' });
    };

    return (
        <>
            <div className={styles.root}>
                <Typography>Add allergy warnings</Typography>
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={formInput.name}
                    className={styles.input}
                />
                <button
                    onClick={addAllergy}
                    disabled={!formInput.name}
                    className={`${styles.button} ${
                        !formInput.name ? styles.inactive : ''
                    }`}
                >
                    Add +
                </button>
            </div>
            <div className={styles.modifierContainer}>
                {allergenList.map((allergy) => {
                    return (
                        <AllergyWarning
                            allergy={allergy}
                            key={allergy.id}
                            allergenList={allergenList}
                            setAllergenList={setAllergenList}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default AddAllergy;
