import React, { useState } from "react";

const AdvancedOptions = ({
  allergenList,
  setAllergenList,
  dietRestrictions,
  setDietRestrictions,
}) => {
  const [allergyInput, setAllergyInput] = useState({ name: "" });
  const [dietInput, setDietInput] = useState({ title: "" });

  const handleAllergy = (e) => {
    e.preventDefault();
    setAllergyInput({ ...allergyInput, [e.target.name]: e.target.value });
  };

  const handleDiet = (e) => {
    e.preventDefault();
    setDietInput({ ...dietInput, [e.target.name]: e.target.value });
  };

  const addAllergy = (e) => {
    e.preventDefault();
    const newAllergy = {
      id: allergenList.length + 1,
      name: allergyInput.name,
    };
    setAllergenList([...allergenList, newAllergy]);
    console.log(allergenList);
    setAllergyInput({ name: "" });
  };

  const addDietRestriction = (e) => {
    e.preventDefault();
    const newDietRestriction = {
      id: dietRestrictions.length + 1,
      title: dietInput.title,
    };
    setDietRestrictions([...dietRestrictions, newDietRestriction]);
    setDietInput({ title: "" });
  };

  const removeAllergy = (id) => {
    setAllergenList(
      allergenList.filter((allergy) => {
        return allergy.id !== id;
      })
    );
  };

  const removeDietRestrictions = (id) => {
    setDietRestrictions(
      dietRestrictions.filter((diet) => {
        return diet.id !== id;
      })
    );
  };

  return (
    <>
      <div style={{ marginTop: "55px" }}>
        <h5
          style={{
            textAlign: "left",
            fontSize: "1.8rem",
            marginLeft: "10px",
            fontWeight: "normal",
          }}
        >
          Add any allergy warnings
        </h5>
        <input
          type="text"
          name="name"
          onChange={handleAllergy}
          value={allergyInput.name}
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
          disabled={!allergyInput.name}
          className={!allergyInput.name ? "inactive" : ""}
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
          <div key={allergy.id}>
            <p>{allergy.name}</p>
          </div>
        );
      })}

      <div>
        <h5
          style={{
            textAlign: "left",
            fontSize: "1.8rem",
            marginLeft: "10px",
            fontWeight: "normal",
          }}
        >
          Add any diet warnings
        </h5>
        <input
          type="text"
          name="title"
          onChange={handleDiet}
          value={dietInput.title}
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
          onClick={addDietRestriction}
          disabled={!dietInput.title}
          className={!dietInput.title ? "inactive" : ""}
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
      {dietRestrictions.map((diet) => {
        return (
          <div key={diet.id}>
            <p>{diet.title}</p>
          </div>
        );
      })}
    </>
  );
};

export default AdvancedOptions;
