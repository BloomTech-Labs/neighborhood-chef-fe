import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import Ingredient from "./Ingredient.js";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useSelector } from "react-redux";

const AddIngredient = ({
  ingredientList,
  setIngredientList,
  deletedIngredientsList,
  setDeletedIngredientsList,
}) => {
  const [formInput, setFormInput] = useState({
    name: "",
    quantity: "",
    measurement: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const [requested, setRequested] = useState(false);

  const eventToEdit = useSelector((state) => state.eventToEdit);

  const submitIngredient = (e) => {
    e.preventDefault();

    let newIngredient;

    eventToEdit.id
      ? (newIngredient = {
          description: `${formInput.name} ${formInput.quantity} ${formInput.measurement}`,
          requested,
          event_id: eventToEdit.id,
        })
      : (newIngredient = {
          description: `${formInput.name} ${formInput.quantity} ${formInput.measurement}`,
          requested,
        });

    setIngredientList([...ingredientList, newIngredient]);
    setFormInput({ name: "", quantity: "", measurement: "" });
    setRequested(false);
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
          padding: "10px",
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
            type="number"
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

          <FormControlLabel
            value="start"
            label="Requested"
            labelPlacement="start"
            control={
              <Checkbox
                checked={requested}
                onChange={() => {
                  setRequested(!requested);
                }}
              />
            }
          />

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
            Add
          </button>
        </div>
      </div>
      <div className="ingredientListContainer">
        {ingredientList.map((item, index) => {
          return (
            <Ingredient
              item={item}
              index={index}
              key={index}
              ingredientList={ingredientList}
              setIngredientList={setIngredientList}
              deletedIngredientsList={deletedIngredientsList}
              setDeletedIngredientsList={setDeletedIngredientsList}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AddIngredient;
