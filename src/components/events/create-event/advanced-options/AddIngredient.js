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
    <div style={{ marginTop: "55px" }}>
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="createFormInputDiv" style={{ width: "30%" }}>
              <input
                type="text"
                name="name"
                value={formInput.name}
                onChange={handleChange}
                placeholder="Ingredient"
              />
            </div>

            <div
              className="createFormInputDiv"
              style={{ width: "10%", marginLeft: "2%" }}
            >
              <input
                type="numbers"
                name="quantity"
                value={formInput.quantity}
                onChange={handleChange}
                min="0"
                step="0.01"
                placeholder="Quantity"
              />
            </div>

            <div className="eventTimeDiv" style={{ marginLeft: "2%" }}>
              <label>
                Measurement
                <Select
                  name="measurement"
                  value={formInput.measurement}
                  onChange={handleChange}
                  id="greenSelect"
                  disableUnderline={true}
                >
                  <MenuItem value=""></MenuItem>
                  <MenuItem value={"cup"}>cup</MenuItem>
                  <MenuItem value={"cups"}>cups</MenuItem>
                  <MenuItem value={"gallon"}>gallon</MenuItem>
                  <MenuItem value={"gallons"}>gallons</MenuItem>
                  <MenuItem value={"lbs"}>lbs</MenuItem>
                  <MenuItem value={"ounce"}>ounce</MenuItem>
                  <MenuItem value={"ounces"}>ounces</MenuItem>
                  <MenuItem value={"pint"}>pint</MenuItem>
                  <MenuItem value={"pints"}>pints</MenuItem>
                  <MenuItem value={"quart"}>quart</MenuItem>
                  <MenuItem value={"quarts"}>quarts</MenuItem>
                  <MenuItem value={"teaspoon"}>teaspoon</MenuItem>
                  <MenuItem value={"teaspoons"}>teaspoons</MenuItem>
                  <MenuItem value={"tablespoon"}>tablespoon</MenuItem>
                  <MenuItem value={"tablespoon"}>tablespoons</MenuItem>
                </Select>
              </label>
            </div>

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
                padding: "15px 10px",
                marginLeft: "2%",
              }}
            >
              Add +
            </button>
          </div>

          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          ></div>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", width: "60%" }}>
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
