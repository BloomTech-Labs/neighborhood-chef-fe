import React from "react";
import { Field, FieldArray } from "formik";
import { TextField } from "formik-material-ui";
import { Button } from "@material-ui/core";
import { buttonStyles } from "../../styles";
import Typography from "@material-ui/core/Typography";

const AddPets = (props) => {
  const classes = buttonStyles();

  return (
    <FieldArray name="pets">
      {({ push, remove }) => (
        <div
          className="restriction"
          style={{ marginTop: "10px", display: "none" }}
        >
          <Typography>Pets</Typography>
          {props.values.pets.map((pet, index) => {
            return (
              <div key={index}>
                <Field
                  component={TextField}
                  className={classes.field}
                  margin="normal"
                  variant="outlined"
                  label="Pet"
                  name={`pets[${index}]`}
                  value={pet}
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
            Add Pet
          </Button>
        </div>
      )}
    </FieldArray>
  );
};

export default AddPets;
