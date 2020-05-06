import React, { useState } from "react";
import { Field } from "formik";
import { useDispatch } from "react-redux";
import { changePage } from "../../utilities/actions";
import { TextField } from "formik-material-ui";
import { Checkbox, Button } from "@material-ui/core";

const AuthFields = (props) => {
  const dispatch = useDispatch();
  const [buttonDisable, setButtonDisable] = useState(true);

  const checkValues = (e) => {
    const email = document.querySelector("input[name='email']").value;
    const password = document.querySelector("input[name='password']").value;
    const terms = document.querySelector("input[type='checkbox']").checked;
    if (email && password && terms === true) {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  };

  return (
    <>
      <Field
        component={TextField}
        type="email"
        name="email"
        label="Email"
        InputProps={{ onKeyUp: checkValues }}
      />
      <Field
        component={TextField}
        type="password"
        name="password"
        label="Password"
        InputProps={{ onKeyUp: checkValues }}
      />
      <label>
        <Field
          component={Checkbox}
          type="checkbox"
          name="terms"
          onChange={checkValues}
        />
        I accept the terms and conditions.
      </label>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          dispatch(changePage());
        }}
        disabled={buttonDisable}
      >
        Next
      </Button>
    </>
  );
};

export default AuthFields;
