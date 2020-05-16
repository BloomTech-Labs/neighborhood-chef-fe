import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Field } from "formik";
import { withRouter } from "react-router-dom";
import CreateIcon from "@material-ui/icons/Create";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import { cancelEdit } from "../../../utilities/actions";

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const FormPageOne = ({
  handleChange,
  values,
  setPage,
  resetForm,
  initialState,
  history,
}) => {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const validateAndTurnPage = () => {
    if (
      values.title &&
      values.address &&
      values.description &&
      values.date &&
      values.startTime &&
      values.endTime &&
      values.category_id
    ) {
      setPage(2);
      scrollToTop();
    } else {
      setError(true);
    }
  };

  return (
    <>
      <div className="createFormPage1TopRow">
        <div className="createFormPage1LeftContainer">
          <div className="createFormInputDiv">
            <Field
              type="text"
              name="title"
              placeholder="Title"
              onChange={handleChange}
              value={values.title}
            />
            <CreateIcon color="disabled" style={{ fontSize: "22px" }} />
          </div>

          <div className="createFormInputDiv">
            <Field
              type="text"
              name="address"
              placeholder="Location"
              onChange={handleChange}
              value={values.address}
            />
            <SearchIcon color="disabled" style={{ fontSize: "22px" }} />
          </div>
          <Field
            as="textarea"
            name="description"
            placeholder="Write a description for your event..."
            onChange={handleChange}
            value={values.description}
            className="createFormTextArea"
          />
        </div>

        <div className="createFormPage1RightContainer">
          <div className="eventDateDiv">
            <label htmlFor="eventFormDate">Date</label>
            <TextField
              type="date"
              name="date"
              id="eventFormDate"
              value={values.date}
              onChange={handleChange}
              InputProps={{ disableUnderline: true }}
            />
          </div>

          <div className="eventTimeDiv">
            <label htmlFor="Start_Time">The event starts at:</label>
            <Select
              name="startTime"
              id="Start_Time"
              value={values.startTime}
              onChange={handleChange}
              disableUnderline={true}
            >
              <MenuItem></MenuItem>
              <MenuItem value={"12:00am"}>12:00am</MenuItem>
              <MenuItem value={"12:30am"}>12:30am</MenuItem>
              <MenuItem value={"01:00am"}>01:00am</MenuItem>
              <MenuItem value={"01:30am"}>01:30am</MenuItem>
              <MenuItem value={"02:00am"}>02:00am</MenuItem>
              <MenuItem value={"02:30am"}>02:30am</MenuItem>
              <MenuItem value={"03:00am"}>03:00am</MenuItem>
              <MenuItem value={"03:30am"}>03:30am</MenuItem>
              <MenuItem value={"04:00am"}>04:00am</MenuItem>
              <MenuItem value={"04:30am"}>04:30am</MenuItem>
              <MenuItem value={"05:00am"}>05:00am</MenuItem>
              <MenuItem value={"05:30am"}>05:30am</MenuItem>
              <MenuItem value={"06:00am"}>06:00am</MenuItem>
              <MenuItem value={"06:30am"}>06:30am</MenuItem>
              <MenuItem value={"07:00am"}>07:00am</MenuItem>
              <MenuItem value={"07:30am"}>07:30am</MenuItem>
              <MenuItem value={"08:00am"}>08:00am</MenuItem>
              <MenuItem value={"08:30am"}>08:30am</MenuItem>
              <MenuItem value={"09:00am"}>09:00am</MenuItem>
              <MenuItem value={"09:30am"}>09:30am</MenuItem>
              <MenuItem value={"10:00am"}>10:00am</MenuItem>
              <MenuItem value={"10:30am"}>10:30am</MenuItem>
              <MenuItem value={"11:00am"}>11:00am</MenuItem>
              <MenuItem value={"11:30am"}>11:30am</MenuItem>
              <MenuItem value={"12:00pm"}>12:00pm</MenuItem>
              <MenuItem value={"12:30pm"}>12:30pm</MenuItem>
              <MenuItem value={"01:00pm"}>01:00pm</MenuItem>
              <MenuItem value={"01:30pm"}>01:30pm</MenuItem>
              <MenuItem value={"02:00pm"}>02:00pm</MenuItem>
              <MenuItem value={"02:30pm"}>02:30pm</MenuItem>
              <MenuItem value={"03:00pm"}>03:00pm</MenuItem>
              <MenuItem value={"03:30pm"}>03:30pm</MenuItem>
              <MenuItem value={"04:00pm"}>04:00pm</MenuItem>
              <MenuItem value={"04:30pm"}>04:30pm</MenuItem>
              <MenuItem value={"05:00pm"}>05:00pm</MenuItem>
              <MenuItem value={"05:30pm"}>05:30pm</MenuItem>
              <MenuItem value={"06:00pm"}>06:00pm</MenuItem>
              <MenuItem value={"06:30pm"}>06:30pm</MenuItem>
              <MenuItem value={"07:00pm"}>07:00pm</MenuItem>
              <MenuItem value={"07:30pm"}>07:30pm</MenuItem>
              <MenuItem value={"08:00pm"}>08:00pm</MenuItem>
              <MenuItem value={"08:30pm"}>08:30pm</MenuItem>
              <MenuItem value={"09:00pm"}>09:00pm</MenuItem>
              <MenuItem value={"09:30pm"}>09:30pm</MenuItem>
              <MenuItem value={"10:00pm"}>10:00pm</MenuItem>
              <MenuItem value={"10:30pm"}>10:30pm</MenuItem>
              <MenuItem value={"11:00pm"}>11:00pm</MenuItem>
              <MenuItem value={"11:30pm"}>11:30pm</MenuItem>
            </Select>
          </div>

          <div className="eventTimeDiv">
            <label htmlFor="End_Time">The event ends at:</label>
            <Select
              name="endTime"
              id="End_Time"
              value={values.endTime}
              onChange={handleChange}
              disableUnderline={true}
            >
              <MenuItem></MenuItem>
              <MenuItem value={"12:00am"}>12:00am</MenuItem>
              <MenuItem value={"12:30am"}>12:30am</MenuItem>
              <MenuItem value={"01:00am"}>01:00am</MenuItem>
              <MenuItem value={"01:30am"}>01:30am</MenuItem>
              <MenuItem value={"02:00am"}>02:00am</MenuItem>
              <MenuItem value={"02:30am"}>02:30am</MenuItem>
              <MenuItem value={"03:00am"}>03:00am</MenuItem>
              <MenuItem value={"03:30am"}>03:30am</MenuItem>
              <MenuItem value={"04:00am"}>04:00am</MenuItem>
              <MenuItem value={"04:30am"}>04:30am</MenuItem>
              <MenuItem value={"05:00am"}>05:00am</MenuItem>
              <MenuItem value={"05:30am"}>05:30am</MenuItem>
              <MenuItem value={"06:00am"}>06:00am</MenuItem>
              <MenuItem value={"06:30am"}>06:30am</MenuItem>
              <MenuItem value={"07:00am"}>07:00am</MenuItem>
              <MenuItem value={"07:30am"}>07:30am</MenuItem>
              <MenuItem value={"08:00am"}>08:00am</MenuItem>
              <MenuItem value={"08:30am"}>08:30am</MenuItem>
              <MenuItem value={"09:00am"}>09:00am</MenuItem>
              <MenuItem value={"09:30am"}>09:30am</MenuItem>
              <MenuItem value={"10:00am"}>10:00am</MenuItem>
              <MenuItem value={"10:30am"}>10:30am</MenuItem>
              <MenuItem value={"11:00am"}>11:00am</MenuItem>
              <MenuItem value={"11:30am"}>11:30am</MenuItem>
              <MenuItem value={"12:00pm"}>12:00pm</MenuItem>
              <MenuItem value={"12:30pm"}>12:30pm</MenuItem>
              <MenuItem value={"01:00pm"}>01:00pm</MenuItem>
              <MenuItem value={"01:30pm"}>01:30pm</MenuItem>
              <MenuItem value={"02:00pm"}>02:00pm</MenuItem>
              <MenuItem value={"02:30pm"}>02:30pm</MenuItem>
              <MenuItem value={"03:00pm"}>03:00pm</MenuItem>
              <MenuItem value={"03:30pm"}>03:30pm</MenuItem>
              <MenuItem value={"04:00pm"}>04:00pm</MenuItem>
              <MenuItem value={"04:30pm"}>04:30pm</MenuItem>
              <MenuItem value={"05:00pm"}>05:00pm</MenuItem>
              <MenuItem value={"05:30pm"}>05:30pm</MenuItem>
              <MenuItem value={"06:00pm"}>06:00pm</MenuItem>
              <MenuItem value={"06:30pm"}>06:30pm</MenuItem>
              <MenuItem value={"07:00pm"}>07:00pm</MenuItem>
              <MenuItem value={"07:30pm"}>07:30pm</MenuItem>
              <MenuItem value={"08:00pm"}>08:00pm</MenuItem>
              <MenuItem value={"08:30pm"}>08:30pm</MenuItem>
              <MenuItem value={"09:00pm"}>09:00pm</MenuItem>
              <MenuItem value={"09:30pm"}>09:30pm</MenuItem>
              <MenuItem value={"10:00pm"}>10:00pm</MenuItem>
              <MenuItem value={"10:30pm"}>10:30pm</MenuItem>
              <MenuItem value={"11:00pm"}>11:00pm</MenuItem>
              <MenuItem value={"11:30pm"}>11:30pm</MenuItem>
            </Select>
          </div>

          <div className="categoryDiv">
            <label htmlFor="category_id">Category</label>
            <Select
              name="category_id"
              id="category_id"
              value={values.category_id}
              onChange={handleChange}
              disableUnderline
            >
              <MenuItem></MenuItem>
              <MenuItem value={1}>BBQ</MenuItem>
              <MenuItem value={2}>Picnic</MenuItem>
              <MenuItem value={3}>Wine and Cheese</MenuItem>
              <MenuItem value={4}>Multi-course meal</MenuItem>
              <MenuItem value={5}>Sunday Sports</MenuItem>
              <MenuItem value={6}>Kids Play Date</MenuItem>
              <MenuItem value={7}>Puppy Play Date</MenuItem>
              <MenuItem value={8}>Puppy Play Date</MenuItem>
            </Select>
          </div>
        </div>
      </div>

      {error && (
        <p style={{ textAlign: "center", color: "crimson" }}>
          *Title, Address, Description, Date, Start Time, End Time and Category
          are required
        </p>
      )}

      <div className="createFormButtonDiv">
        <button
          className="createRightBtn"
          onClick={() => {
            resetForm(initialState);
            dispatch(cancelEdit());
            history.push("/dashboard");
          }}
        >
          Cancel
        </button>
        <button
          type="button"
          className="createLeftBtn"
          onClick={() => validateAndTurnPage()}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default withRouter(FormPageOne);
