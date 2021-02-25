import React from 'react';

import AddAllergy from '../add-allergy/AddAllergy.js';
import AddDietWarning from '../add-diet-warning/AddDietWarning.js';

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
