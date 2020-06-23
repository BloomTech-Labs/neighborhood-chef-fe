import React, { useState } from "react";
import axios from "axios";
import { Formik, Form } from "formik";
import AuthFields from "./AuthFields.js";
import ProfileFields from "./ProfileFields.js";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { MobileStepper } from "@material-ui/core";
import { cardStyles } from "../../styles";
import AuthHeader from "../other/AuthHeader.js";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import food from "../../assets/food.jpg";

const Register = () => {
  const history = useHistory();
  const currentPage = useSelector((state) => state.page);
  const cardClass = cardStyles();
  const [errMessage, setErrMessage] = useState("");

  return (
    <div>
      <AuthHeader />
      <div className="landing-page-container">
        <div className="landing-page-left">
          <Card
            className={`${cardClass.root} ${cardClass.landingPage}`}
            style={{ overflowY: "auto" }}
          >
            <CardContent style={{ marginTop: "2%" }}>
              <Typography variant="h4">Create a new account with us</Typography>
              <Typography variant="caption" color="textSecondary">
                Start eating well while making friends!
              </Typography>
              <Formik
                initialValues={{
                  allergens: [],
                  dietaryRestrictions: [],
                  dietaryPreferences: [],
                  children: [],
                  pets: [],
                }}
                validate={(values) => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = "Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
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
                    photo: values.photo,
                    allergens: JSON.stringify(values.allergens),
                    dietaryRestrictions: JSON.stringify(
                      values.dietaryRestrictions
                    ),
                    dietaryPreferences: JSON.stringify(
                      values.dietaryPreferences
                    ),
                    children: JSON.stringify(values.children),
                    pets: JSON.stringify(values.pets),
                  };
                  axios
                    .post(
                      `${process.env.REACT_APP_BASE_URL}/auth/register`,
                      userValues
                    )
                    .then((res) => {
                      setSubmitting(false);
                      history.push("/register-check-email");
                    })
                    .catch((err) => {
                      setSubmitting(false);
                      setErrMessage(err.response.data.message);
                      console.dir({
                        err,
                        message: err.message,
                        stack: err.stack,
                      });
                    });
                }}
              >
                {({ isSubmitting, setFieldValue, values }) => (
                  <Form style={{ display: "flex", flexDirection: "column" }}>
                    {currentPage === 1 && <AuthFields />}
                    {currentPage === 2 && (
                      <ProfileFields
                        submitting={isSubmitting}
                        setFieldValue={setFieldValue}
                        values={values}
                        errMessage={errMessage}
                      />
                    )}
                  </Form>
                )}
              </Formik>
            </CardContent>
            <CardActions
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <MobileStepper
                style={{ background: "white" }}
                variant="dots"
                steps={2}
                position="static"
                activeStep={currentPage - 1}
              />
            </CardActions>
          </Card>
        </div>
        <div className="landing-page-right" style={{ overflow: "hidden" }}>
          <img src={food} alt="food community" height="100%" />
        </div>
      </div>
    </div>
  );
};

export default Register;
