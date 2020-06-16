import React from "react";
import { Field, FieldArray } from "formik";
import { TextField } from "formik-material-ui";
import { Button } from "@material-ui/core";
import { buttonStyles } from "../../styles";
import Typography from "@material-ui/core/Typography";

const AddAllergens = (props) => {
  const classes = buttonStyles();

  return (
    <FieldArray name="allergens">
      {({ push, remove }) => (
        <div
          className="restriction"
          style={{ marginTop: "10px", display: "none" }}
        >
          <Typography>Allergens</Typography>
          {props.values.allergens.map((allergen, index) => {
            return (
              <div key={index}>
                <Field
                  component={TextField}
                  className={classes.field}
                  margin="normal"
                  variant="outlined"
                  label="Allergen"
                  name={`allergens[${index}]`}
                  value={allergen}
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
            Add Allergen
          </Button>
        </div>
      )}
    </FieldArray>
  );
};

export default AddAllergens;
