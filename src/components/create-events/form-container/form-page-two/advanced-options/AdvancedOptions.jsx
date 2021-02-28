import React from 'react';

import AddAllergy from './add-allergy/AddAllergy.jsx';
import AddDietWarning from './add-diet-warning/AddDietWarning.jsx';

const AdvancedOptions = ({
    allergenList,
    setAllergenList,
    dietWarnings,
    setDietWarnings,
}) => {
    return (
        <div>
            <AddAllergy
                allergenList={allergenList}
                setAllergenList={setAllergenList}
            />
            <AddDietWarning
                dietWarnings={dietWarnings}
                setDietWarnings={setDietWarnings}
            />
        </div>
    );
};

export default AdvancedOptions;
