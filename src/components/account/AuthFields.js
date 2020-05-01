import React from "react";
import { Field } from "formik";
import { useDispatch } from "react-redux";
import { changePage } from "../../utilities/actions";
import { TextField } from "formik-material-ui";
import { Checkbox, Button } from "@material-ui/core";

const AuthFields = (props) => {
  const dispatch = useDispatch();

  return (
    <>
      <Field component={TextField} type="email" name="email" label="Email" />
      <Field
        component={TextField}
        type="password"
        name="password"
        label="Password"
      />
      <label>
        <Field component={Checkbox} type="checkbox" name="terms" />I accept the
        terms and conditions.
      </label>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(changePage())}
      >
        Next
      </Button>
    </>
  );
};

export default AuthFields;
