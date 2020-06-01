import React from "react";

const Ingredient = ({ item, removeIngredient }) => {
  return (
    <div
      key={item.id}
      onClick={() => removeIngredient(item.id)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
