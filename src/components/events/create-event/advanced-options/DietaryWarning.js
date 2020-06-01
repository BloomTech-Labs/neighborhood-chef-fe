import React from "react";

const DietaryWarning = ({ diet, removeDietWarning }) => {
  return (
    <div
      key={diet.id}
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
      <p style={{ wordWrap: "break-word" }}>{diet.title}</p>
      <span
        style={{
          cursor: "pointer",
          fontWeight: "bold",
          marginLeft: "10px",
        }}
        onClick={() => removeDietWarning(diet.id)}
      >
        x
      </span>
    </div>
  );
};

export default DietaryWarning;
