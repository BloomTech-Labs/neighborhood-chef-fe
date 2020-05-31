import React, { useState } from "react";

const AddDietRestriction = ({ dietWarnings, setDietWarnings }) => {
  const [dietInput, setDietInput] = useState({ title: "" });

  const handleChange = (e) => {
    e.preventDefault();
    setDietInput({ title: e.target.value });
  };

  const addDietRestriction = (e) => {
    e.preventDefault();
    const newDietRestriction = {
      id: dietWarnings.length + 1,
      title: dietInput.title,
    };
    setDietWarnings([...dietWarnings, newDietRestriction]);
    setDietInput({ title: "" });
  };

  const removeDietRestriction = (id) => {
    setDietWarnings(
      dietWarnings.filter((diet) => {
        return diet.id !== id;
      })
    );
  };

  return (
    <>
      <div style={{ marginTop: "55px", marginBottom: "55px" }}>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={dietInput.title}
          placeholder="add dietary warning"
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
      {dietWarnings.map((diet) => {
        return (
          <div key={diet.id} onClick={() => removeDietRestriction(diet.id)}>
            <p>{diet.title}</p>
          </div>
        );
      })}
    </>
  );
};

export default AddDietRestriction;
