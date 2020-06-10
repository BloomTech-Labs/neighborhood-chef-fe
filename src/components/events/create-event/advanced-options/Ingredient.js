import React from "react";

const Ingredient = ({ item, removeIngredient }) => {
  return (
    <div
      key={item.id}
      onClick={() => removeIngredient(item.id)}
      style={{
        display: "flex",
        alignItems: "center",
        background: "#FFBF1A",
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
      <p>{item.quantity}&nbsp;</p>
      <p>{item.measurement}&nbsp;</p>
      <p>of</p>&nbsp;
      <p>{item.name}&nbsp;</p>
    </div>
  );
};

export default Ingredient;
