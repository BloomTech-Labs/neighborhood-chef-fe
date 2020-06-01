import React from "react";

const AllergyWarning = ({ allergy, removeAllergy }) => {
  return (
    <div
      key={allergy.id}
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
      }}
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
