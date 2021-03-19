import React from 'react';

import AddAllergy from './add-allergy/AddAllergy.jsx';
import AddDietWarning from './add-diet-warning/AddDietWarning.jsx';

const AdvancedOptions = ({ values, setValues }) => {
  return (
    <div>
      <AddAllergy values={values} setValues={setValues} />
      <AddDietWarning values={values} setValues={setValues} />
    </div>
  );
};

export default AdvancedOptions;
