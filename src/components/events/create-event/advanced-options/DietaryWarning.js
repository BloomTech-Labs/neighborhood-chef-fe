import React from "react";

const DietaryWarning = ({ diet, removeDietWarning }) => {
  return (
    <div key={diet.id} className="warning">
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
