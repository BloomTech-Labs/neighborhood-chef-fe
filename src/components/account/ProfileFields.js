import React, { useState } from "react";
import { Field } from "formik";
import { Button, FormControlLabel, Radio } from "@material-ui/core";
import { TextField, RadioGroup, SimpleFileUpload } from "formik-material-ui";
import ReactMapGL from "react-map-gl";
import Geocoder from "react-mapbox-gl-geocoder";
import CircularProgress from "@material-ui/core/CircularProgress";

const ProfileFields = (props) => {
  const mapAccess = {
    mapboxApiAccessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
  };
  const mapStyle = {
    width: "100%",
    height: 600,
  };
  const queryParams = {
    country: "us",
  };
  const [viewport, setViewport] = useState();

  const onSelected = (viewport, item) => {
    setViewport(viewport);
    console.log(item);
    props.setFieldValue("location", {
      address: item.place_name,
      latitude: item.center[1],
      longitude: item.center[0],
    });
    console.log(item);
  };

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
      <Field component={TextField} name="location" className="location" />
      <p style={{ "margin-top": "-60px" }}>Address</p>
      <Geocoder
        {...mapAccess}
        onSelected={onSelected}
        viewport={viewport}
        hideOnSelect={true}
        queryParams={queryParams}
        updateInputOnSelect={true}
        className="geocoder"
      />
      <ReactMapGL
        {...mapAccess}
        {...viewport}
        {...mapStyle}
        onViewportChange={(newViewport) => setViewport(newViewport)}
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
        {props.submitting ? (
          <CircularProgress style={{ color: "white" }} />
        ) : (
          "Submit"
        )}
      </Button>
    </>
  );
};

export default ProfileFields;
