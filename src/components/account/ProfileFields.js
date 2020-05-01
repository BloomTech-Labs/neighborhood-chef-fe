import React from "react";
import { Field, ErrorMessage } from "formik";

const ProfileFields = (props) => {
  return (
    <>
      <label>
        First Name
        <Field type="name" name="firstName" />
        <ErrorMessage name="firstName" component="div" />
      </label>
      <label>
        Last Name
        <Field type="name" name="lastName" />
        <ErrorMessage name="lastName" component="div" />
      </label>
      <label>
        Location
        <Field type="text" name="location" />
        <ErrorMessage name="location" component="div" />
      </label>
      <label>
        Gender
        <Field type="radio" name="gender" value="Male" label="Male" />
      </label>
      <label>
        Female
        <Field type="radio" name="gender" value="Female" label="Female" />
      </label>
      <label>
        Other
        <Field type="radio" name="gender" value="Other" label="Other" />
      </label>
      <label>
        None
        <Field type="radio" name="gender" value="None" label="None" />
        <ErrorMessage name="gender" component="div" />
      </label>
      <label>
        Photo
        <Field type="text" name="photo" />
        <ErrorMessage name="photo" component="div" />
      </label>
      <button type="submit" disabled={props.submitting}>
        Submit
      </button>
    </>
  );
};

export default ProfileFields;
