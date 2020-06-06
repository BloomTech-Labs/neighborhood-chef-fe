import React from "react";

const AllergyWarning = ({ allergy, removeAllergy }) => {
  return (
    <div
      key={allergy.id}
      onClick={() => removeAllergy(allergy.id)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        background: "#ea6565",
        opacity: "0.75",
        borderRadius: "10px",
        marginTop: "20px",
        marginRight: "20px",
        marginBottom: "20px",
        color: "white",
        fontSize: "1.6rem",
        width: "auto",
        maxWidth: "400px",
        whiteSpace: "pre-line",
        padding: "12px 20px",
        cursor: "pointer",
      }}
    >
      {allergy.name}
    </div>
  );
};

export default AllergyWarning;
