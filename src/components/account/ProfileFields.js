import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Field } from "formik";
import { Button, FormControlLabel, Radio } from "@material-ui/core";
import { TextField, RadioGroup, SimpleFileUpload } from "formik-material-ui";
import ReactMapGL from "react-map-gl";
import Geocoder from "react-mapbox-gl-geocoder";
import CircularProgress from "@material-ui/core/CircularProgress";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { buttonStyles } from "../../styles";
import { changePage } from "../../utilities/actions";
import Typography from "@material-ui/core/Typography";

const ProfileFields = (props) => {
  const dispatch = useDispatch();
  const classes = buttonStyles();
  const [gender, setGender] = useState("");
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

  const handleChange = (e) => {
    setGender(e.target.value);
  };

  const onSelected = (viewport, item) => {
    setViewport(viewport);
    props.setFieldValue("location", {
      address: item.place_name,
      latitude: item.center[1],
      longitude: item.center[0],
    });
  };

  return (
    <>
      <Field
        style={{ marginTop: "10px" }}
        component={TextField}
        type="name"
        name="firstName"
        className="firstName"
        label="First Name"
      />
      <Field
        style={{ marginTop: "10px" }}
        component={TextField}
        type="name"
        name="lastName"
        className="lastName"
        label="Last Name"
      />
      <Field
        style={{ marginTop: "10px" }}
        component={TextField}
        name="location"
        label="Address"
      >
        <Geocoder
          {...mapAccess}
          name="location"
          onSelected={onSelected}
          viewport={viewport}
          hideOnSelect={true}
          queryParams={queryParams}
          updateInputOnSelect={true}
        />
      </Field>
      {/* <p>Address</p> */}

      {/* <ReactMapGL
        {...mapAccess}
        {...viewport}
        {...mapStyle}
        onViewportChange={(newViewport) => setViewport(newViewport)}
      /> */}
      <Field style={{ marginTop: "10px" }} component={FormControl}>
        <InputLabel id="gender-label">Gender</InputLabel>
        <Select
          labelId="gender-label"
          value={gender}
          onChange={handleChange}
          label="Gender"
          name="gender"
        >
          <MenuItem value={"male"}>Male</MenuItem>
          <MenuItem value={"female"}>Female</MenuItem>
          <MenuItem value={"other"}>Other</MenuItem>
        </Select>
      </Field>
      <Field
        style={{ marginTop: "10px" }}
        variant="outlined"
        component={SimpleFileUpload}
        label="Photo"
        name="photo"
      />
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Button
          className={`${classes.root} ${classes.notActive}`}
          onClick={() => dispatch(changePage())}
        >
          <Typography variant="h5">Back</Typography>
        </Button>
        <Button
          className={`${classes.root} ${classes.active}`}
          variant="contained"
          color="primary"
          type="submit"
          disabled={props.submitting}
        >
          <Typography variant="h5">
            {props.submitting ? (
              <CircularProgress style={{ color: "white" }} />
            ) : (
              "Submit"
            )}
          </Typography>
        </Button>
      </div>
    </>
  );
};

export default ProfileFields;
