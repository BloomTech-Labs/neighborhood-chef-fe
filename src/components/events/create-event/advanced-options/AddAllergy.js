import React, { useState } from "react";

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
      <div style={{ marginTop: "55px", marginBottom: "55px" }}>
        <h5
          style={{
            textAlign: "left",
            fontSize: "1.8rem",
            marginLeft: "10px",
            fontWeight: "normal",
          }}
        >
          List allergy warnings
        </h5>
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
      {allergenList.map((allergy) => {
        return (
          <div key={allergy.id} onClick={() => removeAllergy(allergy.id)}>
            <p>{allergy.name}</p>
          </div>
        );
      })}
    </>
  );
};

export default AddAllergy;
