import React from "react";
import { Field } from "formik";
import { Button, FormControlLabel, Radio } from "@material-ui/core";
import { TextField, RadioGroup, SimpleFileUpload } from "formik-material-ui";

const ProfileFields = (props) => {
  return (
    <>
      <Field
        component={TextField}
        label="First Name"
        type="name"
        name="firstName"
      />
      <Field
        component={TextField}
        label="Last Name"
        type="name"
        name="lastName"
      />
      <Field
        component={TextField}
        label="Location"
        type="text"
        name="location"
      />
      <Field component={RadioGroup} name="gender">
        <h3>Gender</h3>
        <FormControlLabel
          value="male"
          control={<Radio disabled={props.submitting} />}
          label="Male"
          disabled={props.submitting}
        />
        <FormControlLabel
          value="female"
          control={<Radio disabled={props.submitting} />}
          label="Female"
          disabled={props.submitting}
        />
        <FormControlLabel
          value="other"
          control={<Radio disabled={props.submitting} />}
          label="Other"
          disabled={props.submitting}
        />
        <FormControlLabel
          value="none"
          control={<Radio disabled={props.submitting} />}
          label="None"
          disabled={props.submitting}
        />
      </Field>
      <Field component={SimpleFileUpload} label="Photo" name="photo" />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        disabled={props.submitting}
      >
        Submit
      </Button>
    </>
  );
};

export default ProfileFields;
