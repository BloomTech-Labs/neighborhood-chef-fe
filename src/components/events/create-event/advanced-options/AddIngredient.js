import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";

import Ingredient from "./Ingredient.js";

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
    <div style={{ marginTop: "55px", marginBottom: "25px" }}>
      <Typography style={{ marginBottom: "10px" }}>
        Request for guests to bring ingredients
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "2px solid #f0f0f0",
          borderRadius: "15px",
        }}
      >
        <div className="addIngredientInputContainer">
          <input
            type="text"
            name="name"
            value={formInput.name}
            onChange={handleChange}
            placeholder="Ingredient"
            className="ingredientInputName"
          />

          <input
            type="numbers"
            name="quantity"
            value={formInput.quantity}
            onChange={handleChange}
            min="0"
            step="0.01"
            placeholder="Quantity"
            className="ingredientInputQuantity"
          />

          <div className="ingredientMeasurementDiv">
            <label>
              Measurement
              <Select
                name="measurement"
                value={formInput.measurement}
                onChange={handleChange}
                id="measurementSelect"
                disableUnderline={true}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value={"Cups"}>Cup(s)</MenuItem>
                <MenuItem value={"Gallons"}>Gallon(s)</MenuItem>
                <MenuItem value={"Pounds"}>Pound(s)</MenuItem>
                <MenuItem value={"Ounces"}>Ounce(s)</MenuItem>
                <MenuItem value={"Pints"}>Pint(s)</MenuItem>
                <MenuItem value={"Quarts"}>Quart(s)</MenuItem>
                <MenuItem value={"Teaspoons"}>Teaspoon(s)</MenuItem>
                <MenuItem value={"Tablespoons"}>Tablespoon(s)</MenuItem>
              </Select>
            </label>
          </div>

          <button
            disabled={
              !formInput.name || !formInput.quantity || !formInput.measurement
            }
            className={
              !formInput.name || !formInput.quantity || !formInput.measurement
                ? "inactive ingredientButton"
                : "ingredientButton"
            }
            type="button"
            onClick={submitIngredient}
          >
            Add +
          </button>
        </div>
      </div>
      <div className="ingredientListContainer">
        {ingredientList.map((item) => {
          return (
            <Ingredient
              item={item}
              removeIngredient={removeIngredient}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AddIngredient;
