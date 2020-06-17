import React from "react";

const AllergyWarning = ({ allergy, allergenList, setAllergenList }) => {
  const removeAllergy = (id) => {
    setAllergenList(
      allergenList.filter((allergy) => {
        return allergy.id !== id;
      })
    );
  };

  return (
    <div key={allergy.id} className="warning">
      <p style={{ wordWrap: "break-word" }}>{allergy.name}</p>
      <span
        style={{
          cursor: "pointer",
          fontWeight: "bold",
          marginLeft: "10px",
        }}
        onClick={() => removeAllergy(allergy.id)}
      >
        x
      </span>
    </div>
  );
};

export default AllergyWarning;
