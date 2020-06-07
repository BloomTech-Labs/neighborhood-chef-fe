import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Field } from "formik";
import { Button } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import ReactMapGL, { Marker } from "react-map-gl";
import Geocoder from "react-mapbox-gl-geocoder";
import CircularProgress from "@material-ui/core/CircularProgress";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { buttonStyles } from "../../styles";
import { changePage } from "../../utilities/actions";
import Typography from "@material-ui/core/Typography";
import EventImageUpload from "../events/create-event/EventImageUpload";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import MapIcon from "@material-ui/icons/Map";
import IconButton from "@material-ui/core/IconButton";
import RoomIcon from "@material-ui/icons/Room";

const ProfileFields = (props) => {
  const dispatch = useDispatch();
  const classes = buttonStyles();
  const [gender, setGender] = useState("");
  const [photo, setPhoto] = useState(null);
  const [mapOpen, setMapOpen] = useState(false);
  const changePhoto = (photo) => {
    setPhoto(photo);
    props.setFieldValue("photo", photo);
  };
  const mapAccess = {
    mapboxApiAccessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
  };
  const mapStyle = {
    width: "40vw",
    height: "50vh",
  };
  const queryParams = {
    country: "us",
  };
  const [viewport, setViewport] = useState();
  const [longLat, setLongLat] = useState("");

  const handleChange = (e) => {
    setGender(e.target.value);
    props.setFieldValue("gender", e.target.value);
  };

  const onSelected = (viewport, item) => {
    setLongLat({ longitude: viewport.longitude, latitude: viewport.latitude });
    setViewport(viewport);
    props.setFieldValue("location", {
      address: item.place_name,
      latitude: item.center[1],
      longitude: item.center[0],
    });
  };

  useEffect(() => {
    return () => {
      dispatch(changePage(1));
    };
  }, [dispatch]);

  return (
    <>
      <Field
        style={{ marginTop: "10px" }}
        component={TextField}
        type="name"
        name="firstName"
        className="firstName"
        label="First Name"
        required
      />
      <Field
        style={{ marginTop: "10px" }}
        component={TextField}
        type="name"
        name="lastName"
        className="lastName"
        label="Last Name"
        required
      />

      <FormControl required style={{ marginTop: "10px" }}>
        <InputLabel htmlFor="location-form">Address</InputLabel>
        <Input
          id="location-form"
          name="address"
          value=" "
          // disabled
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle show map"
                onClick={() => setMapOpen(!mapOpen)}
              >
                <MapIcon />
              </IconButton>
            </InputAdornment>
          }
        ></Input>
      </FormControl>
      <div style={{ marginTop: "-25px", width: "100%" }}>
        <Geocoder
          {...mapAccess}
          name="location"
          onSelected={onSelected}
          limit={2}
          viewport={viewport}
          hideOnSelect={true}
          queryParams={queryParams}
          updateInputOnSelect={true}
        />
      </div>

      <ReactMapGL
        className={mapOpen ? "" : "hidden"}
        style={{ position: "absolute", right: 40, top: 100 }}
        {...mapAccess}
        {...viewport}
        {...mapStyle}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        // mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={(newViewport) => setViewport(newViewport)}
      >
        {longLat && mapOpen && (
          <Marker {...longLat} offsetLeft={-15} offsetTop={-15}>
            <RoomIcon fontSize="large" />
          </Marker>
        )}
      </ReactMapGL>
      <Field
        style={{ marginTop: "30px", marginBottom: "10px" }}
        component={FormControl}
        required
      >
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
      <EventImageUpload
        photo={photo}
        setPhoto={changePhoto}
        title="Upload a picture for your avatar (optional)"
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
          onClick={() => dispatch(changePage(1))}
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
