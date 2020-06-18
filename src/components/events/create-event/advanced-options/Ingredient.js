import React from "react";

const Ingredient = ({
  item,
  ingredientList,
  setIngredientList,
  deletedIngredientsList,
  setDeletedIngredientsList,
  index,
}) => {
  const removeIngredient = (index) => {
    console.log(index);
    if (ingredientList[index].id !== undefined) {
      setDeletedIngredientsList([
        ...deletedIngredientsList,
        ingredientList[index],
      ]);
    }
    setIngredientList(ingredientList.filter((_, i) => i !== index));
  };

  return (
    <div
      onClick={() => removeIngredient(index)}
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
        maxWidth: "400px",
        whiteSpace: "pre-line",
        padding: "12px 20px",
        cursor: "pointer",
      }}
    >
      <p>{item.description}</p>
    </div>
  );
};

export default Ingredient;
