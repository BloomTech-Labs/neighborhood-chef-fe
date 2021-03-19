import React, { useState } from 'react';
import { Field } from 'formik';
import { useDispatch } from 'react-redux';
import { TextField } from 'formik-material-ui';
import { Checkbox, Button } from '@material-ui/core';
import { buttonStyles } from '../../../styles';
import Typography from '@material-ui/core/Typography';

const AuthFields = (props) => {
  const buttonClass = buttonStyles();
  const dispatch = useDispatch();
  const [buttonDisable, setButtonDisable] = useState(true);

  const checkValues = (e) => {
    const email = document.querySelector("input[name='email']").value;
    const terms = document.querySelector("input[type='checkbox']").checked;
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email) && terms === true) {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  };

  return (
    <>
      <Field
        style={{ marginTop: '10%' }}
        component={TextField}
        type="email"
        name="email"
        className="email"
        InputProps={{ onKeyUp: checkValues }}
        label="Email"
        required
      />
      <label style={{ marginTop: '10%' }} className="terms">
        <Field component={Checkbox} type="checkbox" name="terms" onChange={checkValues} />I accept the terms
        and conditions.
      </label>
      <Button
        style={{ marginTop: '10%' }}
        className={`${buttonClass.root} ${buttonClass.active}`}
        onClick={() => {}}
        disabled={buttonDisable}
      >
        <Typography variant="h5">Continue registering</Typography>
      </Button>
    </>
  );
};

export default AuthFields;
