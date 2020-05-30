import React from "react";

import AddAllergy from "./AddAllergy.js";
import AddDietRestriction from "./AddDietRestriction.js";

const AdvancedOptions = ({
  allergenList,
  setAllergenList,
  dietWarnings,
  setDietWarnings,
}) => {
  return (
    <>
      <AddAllergy
        allergenList={allergenList}
        setAllergenList={setAllergenList}
      />
      <AddDietRestriction
        dietWarnings={dietWarnings}
        setDietWarnings={setDietWarnings}
      />
    </>
  );
};

export default AdvancedOptions;
