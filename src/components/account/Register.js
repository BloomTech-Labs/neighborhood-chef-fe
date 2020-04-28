import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Register = () => {
  const [page, setPage] = useState(2);

  return (
    <div>
      {page === 1 && (
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            setPage(2);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <label>
                Email
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
              </label>
              <label>
                Password
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
              </label>
              <label>
                <Field type="checkbox" name="terms" />I accept the terms and
                conditions.
              </label>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      )}
      {page === 2 && (
        <Formik
          initialValues={{}}
          onSubmit={(values, { setSubmitting }) => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
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
                <Field
                  type="radio"
                  name="gender"
                  value="Female"
                  label="Female"
                />
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
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default Register;
