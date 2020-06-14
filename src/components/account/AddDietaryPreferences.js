import React from "react";
import { Field, FieldArray } from "formik";
import { TextField } from "formik-material-ui";
import { Button } from "@material-ui/core";
import { buttonStyles } from "../../styles";
import Typography from "@material-ui/core/Typography";

const AddDietaryPreferences = (props) => {
  const classes = buttonStyles();

  return (
    <FieldArray name="dietaryPreferences">
      {({ push, remove }) => (
        <div
          className="restriction"
          style={{ marginTop: "10px", display: "none" }}
        >
          <Typography>Dietary Preferences</Typography>
          {props.values.dietaryPreferences.map((dietaryPreference, index) => {
            return (
              <div key={index}>
                <Field
                  component={TextField}
                  className={classes.field}
                  margin="normal"
                  variant="outlined"
                  label="Dietary Preference"
                  name={`dietaryPreferences[${index}]`}
                  value={dietaryPreference}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                />
                <Button
                  className={classes.button}
                  margin="none"
                  type="button"
                  color="secondary"
                  variant="outlined"
                  onClick={() => remove(index)}
                >
                  x
                </Button>
              </div>
            );
          })}
          <Button
            className={classes.button}
            type="button"
            variant="outlined"
            onClick={() => push("")}
          >
            Add Dietary Preference
          </Button>
        </div>
      )}
    </FieldArray>
  );
};

export default AddDietaryPreferences;
