import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeNeighborhoodName } from "../../utilities/actions";
import { Icon } from "@iconify/react";
import baselineCheck from "@iconify/icons-ic/baseline-check";
import { textBoxStyles } from "../../styles";

const EditNeighborhood = (props) => {
  const [newName, setNewName] = useState(props.currentName);
  const dispatch = useDispatch();
  const classes = textBoxStyles();
  return (
    <form
      className={classes.background}
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(changeNeighborhoodName(newName));
        props.setIsEditing(false);
      }}
    >
      <input
        className={classes.textBox}
        type="text"
        name="neighborhood"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button className={classes.button}>
        <Icon width="2em" icon={baselineCheck} />
      </button>
    </form>
  );
};

export default EditNeighborhood;
