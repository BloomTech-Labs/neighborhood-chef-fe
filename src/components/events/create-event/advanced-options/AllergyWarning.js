import React from "react";

const AllergyWarning = ({ allergy, removeAllergy }) => {
  return (
    <div
      key={allergy.id}
      onClick={() => removeAllergy(allergy.id)}
      className="warning"
    >
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
