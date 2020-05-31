import React, { useState } from "react";

const AddIngredient = ({ ingredientList, setIngredientList }) => {
  const [formInput, setFormInput] = useState({
    name: "",
    quantity: "",
    measurement: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const submitIngredient = (e) => {
    e.preventDefault();
    const newIngredient = {
      id: ingredientList.length + 1,
      name: formInput.name,
      quantity: formInput.quantity,
      measurement: formInput.measurement,
    };
    setIngredientList([...ingredientList, newIngredient]);
    setFormInput({ name: "", quantity: "", measurement: "" });
  };

  const removeIngredient = (id) => {
    setIngredientList(ingredientList.filter((item) => item.id !== id));
  };

  return (
    <div style={{ marginTop: "55px", marginBottom: "55px" }}>
      <p>ingredient tracker</p>
      <input
        type="text"
        name="name"
        value={formInput.name}
        onChange={handleChange}
        placeholder="ingredient name"
      />

      <input
        type="numbers"
        name="quantity"
        value={formInput.quantity}
        onChange={handleChange}
        min="0"
        step="0.01"
        placeholder="quantity"
      />

      <select
        name="measurement"
        value={formInput.measurement}
        onChange={handleChange}
        placeholder="measurement"
      >
        <option value=""></option>
        <option value={"cup"}>cup</option>
        <option value={"pint"}>pint</option>
        <option value={"quart"}>quart</option>
        <option value={"gallon"}>gallon</option>
        <option value={"ounce"}>ounce</option>
        <option value={"lbs"}>lbs</option>
        <option value={"teaspoon"}>teaspoon</option>
        <option value={"tablespoon"}>tablespoon</option>
      </select>

      <button
        disabled={
          !formInput.name || !formInput.quantity || !formInput.measurement
        }
        className={
          !formInput.name || !formInput.quantity || !formInput.measurement
            ? "inactive"
            : ""
        }
        type="button"
        onClick={submitIngredient}
        style={{
          color: "white",
          fontSize: "1.6rem",
          background: "#82df96",
          borderRadius: "10px",
          border: "none",
          fontWeight: "bold",
          wordSpacing: "15px",
          cursor: "pointer",
          padding: "15px 20px",
          marginLeft: "2%",
        }}
      >
        Add +
      </button>

      {ingredientList.map((item) => {
        return (
          <div key={item.id} onClick={() => removeIngredient(item.id)}>
            <p>{item.name}</p>
            <p>{item.quantity}</p>
            <p>{item.measurement}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AddIngredient;
