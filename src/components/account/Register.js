import React from "react";
import axios from "axios";
import { Formik, Form } from "formik";
import AuthFields from "./AuthFields.js";
import ProfileFields from "./ProfileFields.js";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { MobileStepper } from "@material-ui/core";
import { formStyles } from "../../styles";

const Register = () => {
  const currentPage = useSelector((state) => state.page);
  const classes = formStyles();

  return (
    <div className={classes.registerComponent}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          if (!values.password) {
            errors.password = "Required";
          }

          if (values.confirmPassword !== values.password) {
            errors.confirmPassword = "Passwords do not match";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const userValues = {
            email: values.email,
            firstName: values.firstName,
            lastName: values.lastName,
            latitude: values.location.latitude,
            longitude: values.location.longitude,
            gender: values.gender,
            address: values.location.address,
          };
          console.log(userValues);
          axios
            .post(`${process.env.REACT_APP_BASE_URL}/auth/register`, userValues)
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err.message);
            });
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className={classes.registerForm}>
            <h1>Sign up below</h1>
            {currentPage === 1 && <AuthFields />}
            {currentPage === 2 && (
              <ProfileFields
                submitting={isSubmitting}
                setFieldValue={setFieldValue}
              />
            )}
          </Form>
        )}
      </Formik>
      <p>
        Already have an account?{" "}
        <Link to="/login" className="loginLink">
          Login
        </Link>
        .
      </p>
      <MobileStepper
        variant="dots"
        steps={2}
        position="static"
        activeStep={currentPage - 1}
        className="steps"
      />
    </div>
  );
};

export default Register;
