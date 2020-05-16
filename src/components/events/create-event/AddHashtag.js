import React, { useState } from "react";

import Hashtag from "./Hashtag";

const AddHashtag = ({ hashtags, setHashtags }) => {
  const [formInput, setFormInput] = useState({ title: "" });

  const handleChange = (e) => {
    e.preventDefault();
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHashtag = {
      id: hashtags.length + 1,
      title: formInput.title,
    };
    setHashtags([...hashtags, newHashtag]);
    setFormInput({ title: "" });
  };

  return (
    <div style={{ margin: "15px 0" }}>
      <h5
        style={{
          textAlign: "left",
          fontSize: "1.8rem",
          marginLeft: "10px",
          fontWeight: "normal",
        }}
      >
        Add some hashtags for your event.
      </h5>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flexStart",
          marginTop: "60px",
          marginBottom: "40px",
        }}
      >
        <input
          type="text"
          name="title"
          value={formInput.title}
          onChange={handleChange}
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
          onClick={handleSubmit}
          disabled={!formInput.title}
          className={!formInput.title && "inactive"}
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
        {hashtags.map((hashtag) => {
          return (
            <Hashtag
              key={hashtag.id}
              hashtag={hashtag}
              hashtags={hashtags}
              setHashtags={setHashtags}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AddHashtag;
