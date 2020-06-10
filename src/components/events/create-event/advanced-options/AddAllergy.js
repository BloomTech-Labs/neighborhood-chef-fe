import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";

import AllergyWarning from "./AllergyWarning.js";

const AddAllergy = ({ allergenList, setAllergenList }) => {
  const [formInput, setFormInput] = useState({ name: "" });

  const handleChange = (e) => {
    e.preventDefault();
    setFormInput({ name: e.target.value });
  };

  const addAllergy = (e) => {
    e.preventDefault();
    const newAllergy = {
      id: allergenList.length + 1,
      name: formInput.name,
    };
    setAllergenList([...allergenList, newAllergy]);
    setFormInput({ name: "" });
  };

  const removeAllergy = (id) => {
    setAllergenList(
      allergenList.filter((allergy) => {
        return allergy.id !== id;
      })
    );
  };

  return (
    <>
      <div style={{ marginTop: "55px", marginBottom: "25px" }}>
        <Typography>Add allergy warnings</Typography>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formInput.name}
          style={{
            fontSize: "1.6rem",
            border: "none",
            borderBottom: "2px solid #f0f0f0",
            width: "40%",
            outline: "none",
            borderRadius: "10px",
            padding: "15px 15px",
          }}
        />
        <button
          onClick={addAllergy}
          disabled={!formInput.name}
          className={!formInput.name ? "inactive" : ""}
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
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", width: "60%" }}>
        {allergenList.map((allergy) => {
          return (
            <AllergyWarning
              allergy={allergy}
              removeAllergy={removeAllergy}
              key={allergy.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default AddAllergy;
