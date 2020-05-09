import React from "react";
import { Field } from "formik";
import { Button, FormControlLabel, Radio } from "@material-ui/core";
import { TextField, RadioGroup, SimpleFileUpload } from "formik-material-ui";

const ProfileFields = (props) => {
  return (
    <>
      <Field
        component={TextField}
        placeholder="First Name"
        type="name"
        name="firstName"
        className="firstName"
      />
      <Field
        component={TextField}
        placeholder="Last Name"
        type="name"
        name="lastName"
        className="lastName"
      />
      <Field
        component={TextField}
        placeholder="Location"
        type="text"
        name="location"
        className="location"
      />
      <Field component={RadioGroup} name="gender" className="gender">
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
