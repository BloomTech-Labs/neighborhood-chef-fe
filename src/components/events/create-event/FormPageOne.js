import React from 'react';
import { Field } from 'formik';
import CreateIcon from '@material-ui/icons/Create';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const FormPageOne = ({
  handleChange,
  values,
  errors,
  touched,
  setPage,
  resetForm,
  initialState,
  props,
}) => {
  return (
    <>
      <div className="createFormPage1TopRow">
        <div className="createFormPage1LeftContainer">
          <div className="createFormInputDiv">
            <Field
              type="text"
              name="Title"
              placeholder="Title"
              onChange={handleChange}
              value={values.Title}
            />
            <CreateIcon color="disabled" style={{ fontSize: '22px' }} />
          </div>
          {touched.Title && errors.Title && (
            <p className="createFormError">{errors.Title}</p>
          )}

          <div className="createFormInputDiv">
            <Field
              type="text"
              name="Address"
              placeholder="Location"
              onChange={handleChange}
              value={values.Address}
            />
            <SearchIcon color="disabled" style={{ fontSize: '22px' }} />
          </div>
          {touched.Address && errors.Address && (
            <p className="createFormError">{errors.Address}</p>
          )}

          <Field
            as="textarea"
            name="Description"
            placeholder="Write a description for your event..."
            onChange={handleChange}
            value={values.Description}
            className="createFormTextArea"
          />
          {touched.Description && errors.Description && (
            <p className="createFormError">{errors.Description}</p>
          )}
        </div>

        <div className="createFormPage1RightContainer">
          <div className="eventDateDiv">
            <label htmlFor="eventFormDate">Date</label>
            <TextField
              type="date"
              name="Date"
              id="eventFormDate"
              value={values.Date}
              onChange={handleChange}
              InputProps={{ disableUnderline: true }}
            />
            {touched.Date && errors.Date && (
              <p className="createFormError">{errors.Date}</p>
            )}
          </div>

          <div className="eventTimeDiv">
            <label htmlFor="Start_Time">The event starts at:</label>
            <Select
              name="Start_Time"
              id="Start_Time"
              value={values.Start_Time}
              onChange={handleChange}
              disableUnderline={true}
            >
              <MenuItem></MenuItem>
              <MenuItem value={'12:00am'}>12:00am</MenuItem>
              <MenuItem value={'12:30am'}>12:30am</MenuItem>
              <MenuItem value={'1:00am'}>1:00am</MenuItem>
              <MenuItem value={'1:30am'}>1:30am</MenuItem>
              <MenuItem value={'2:00am'}>2:00am</MenuItem>
              <MenuItem value={'2:30am'}>2:30am</MenuItem>
              <MenuItem value={'3:00am'}>3:00am</MenuItem>
              <MenuItem value={'3:30am'}>3:30am</MenuItem>
              <MenuItem value={'4:00am'}>4:00am</MenuItem>
              <MenuItem value={'4:30am'}>4:30am</MenuItem>
              <MenuItem value={'5:00am'}>5:00am</MenuItem>
              <MenuItem value={'5:30am'}>5:30am</MenuItem>
              <MenuItem value={'6:00am'}>6:00am</MenuItem>
              <MenuItem value={'6:30am'}>6:30am</MenuItem>
              <MenuItem value={'7:00am'}>7:00am</MenuItem>
              <MenuItem value={'7:30am'}>7:30am</MenuItem>
              <MenuItem value={'8:00am'}>8:00am</MenuItem>
              <MenuItem value={'8:30am'}>8:30am</MenuItem>
              <MenuItem value={'9:00am'}>9:00am</MenuItem>
              <MenuItem value={'9:30am'}>9:30am</MenuItem>
              <MenuItem value={'10:00am'}>10:00am</MenuItem>
              <MenuItem value={'10:30am'}>10:30am</MenuItem>
              <MenuItem value={'11:00am'}>11:00am</MenuItem>
              <MenuItem value={'11:30am'}>11:30am</MenuItem>
              <MenuItem value={'12:00pm'}>12:00pm</MenuItem>
              <MenuItem value={'12:30pm'}>12:30pm</MenuItem>
              <MenuItem value={'1:00pm'}>1:00pm</MenuItem>
              <MenuItem value={'1:30pm'}>1:30pm</MenuItem>
              <MenuItem value={'2:00pm'}>2:00pm</MenuItem>
              <MenuItem value={'2:30pm'}>2:30pm</MenuItem>
              <MenuItem value={'3:00pm'}>3:00pm</MenuItem>
              <MenuItem value={'3:30pm'}>3:30pm</MenuItem>
              <MenuItem value={'4:00pm'}>4:00pm</MenuItem>
              <MenuItem value={'4:30pm'}>4:30pm</MenuItem>
              <MenuItem value={'5:00pm'}>5:00pm</MenuItem>
              <MenuItem value={'5:30pm'}>5:30pm</MenuItem>
              <MenuItem value={'6:00pm'}>6:00pm</MenuItem>
              <MenuItem value={'6:30pm'}>6:30pm</MenuItem>
              <MenuItem value={'7:00pm'}>7:00pm</MenuItem>
              <MenuItem value={'7:30pm'}>7:30pm</MenuItem>
              <MenuItem value={'8:00pm'}>8:00pm</MenuItem>
              <MenuItem value={'8:30pm'}>8:30pm</MenuItem>
              <MenuItem value={'9:00pm'}>9:00pm</MenuItem>
              <MenuItem value={'9:30pm'}>9:30pm</MenuItem>
              <MenuItem value={'10:00pm'}>10:00pm</MenuItem>
              <MenuItem value={'10:30pm'}>10:30pm</MenuItem>
              <MenuItem value={'11:00pm'}>11:00pm</MenuItem>
              <MenuItem value={'11:30pm'}>11:30pm</MenuItem>
            </Select>
          </div>
          {touched.Start_Time && errors.Start_Time && (
            <p className="createFormError">{errors.Start_Time}</p>
          )}

          <div className="eventTimeDiv">
            <label htmlFor="End_Time">The event ends at:</label>
            <Select
              name="End_Time"
              id="End_Time"
              value={values.End_Time}
              onChange={handleChange}
              disableUnderline={true}
            >
              <MenuItem></MenuItem>
              <MenuItem value={'12:00am'}>12:00am</MenuItem>
              <MenuItem value={'12:30am'}>12:30am</MenuItem>
              <MenuItem value={'1:00am'}>1:00am</MenuItem>
              <MenuItem value={'1:30am'}>1:30am</MenuItem>
              <MenuItem value={'2:00am'}>2:00am</MenuItem>
              <MenuItem value={'2:30am'}>2:30am</MenuItem>
              <MenuItem value={'3:00am'}>3:00am</MenuItem>
              <MenuItem value={'3:30am'}>3:30am</MenuItem>
              <MenuItem value={'4:00am'}>4:00am</MenuItem>
              <MenuItem value={'4:30am'}>4:30am</MenuItem>
              <MenuItem value={'5:00am'}>5:00am</MenuItem>
              <MenuItem value={'5:30am'}>5:30am</MenuItem>
              <MenuItem value={'6:00am'}>6:00am</MenuItem>
              <MenuItem value={'6:30am'}>6:30am</MenuItem>
              <MenuItem value={'7:00am'}>7:00am</MenuItem>
              <MenuItem value={'7:30am'}>7:30am</MenuItem>
              <MenuItem value={'8:00am'}>8:00am</MenuItem>
              <MenuItem value={'8:30am'}>8:30am</MenuItem>
              <MenuItem value={'9:00am'}>9:00am</MenuItem>
              <MenuItem value={'9:30am'}>9:30am</MenuItem>
              <MenuItem value={'10:00am'}>10:00am</MenuItem>
              <MenuItem value={'10:30am'}>10:30am</MenuItem>
              <MenuItem value={'11:00am'}>11:00am</MenuItem>
              <MenuItem value={'11:30am'}>11:30am</MenuItem>
              <MenuItem value={'12:00pm'}>12:00pm</MenuItem>
              <MenuItem value={'12:30pm'}>12:30pm</MenuItem>
              <MenuItem value={'1:00pm'}>1:00pm</MenuItem>
              <MenuItem value={'1:30pm'}>1:30pm</MenuItem>
              <MenuItem value={'2:00pm'}>2:00pm</MenuItem>
              <MenuItem value={'2:30pm'}>2:30pm</MenuItem>
              <MenuItem value={'3:00pm'}>3:00pm</MenuItem>
              <MenuItem value={'3:30pm'}>3:30pm</MenuItem>
              <MenuItem value={'4:00pm'}>4:00pm</MenuItem>
              <MenuItem value={'4:30pm'}>4:30pm</MenuItem>
              <MenuItem value={'5:00pm'}>5:00pm</MenuItem>
              <MenuItem value={'5:30pm'}>5:30pm</MenuItem>
              <MenuItem value={'6:00pm'}>6:00pm</MenuItem>
              <MenuItem value={'6:30pm'}>6:30pm</MenuItem>
              <MenuItem value={'7:00pm'}>7:00pm</MenuItem>
              <MenuItem value={'7:30pm'}>7:30pm</MenuItem>
              <MenuItem value={'8:00pm'}>8:00pm</MenuItem>
              <MenuItem value={'8:30pm'}>8:30pm</MenuItem>
              <MenuItem value={'9:00pm'}>9:00pm</MenuItem>
              <MenuItem value={'9:30pm'}>9:30pm</MenuItem>
              <MenuItem value={'10:00pm'}>10:00pm</MenuItem>
              <MenuItem value={'10:30pm'}>10:30pm</MenuItem>
              <MenuItem value={'11:00pm'}>11:00pm</MenuItem>
              <MenuItem value={'11:30pm'}>11:30pm</MenuItem>
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
          {touched.category_id && errors.category_id && (
            <p className="createFormError">{errors.category_id}</p>
          )}
        </div>
      </div>

      <div className="createFormButtonDiv">
        <button
          className="createRightBtn"
          onClick={() => {
            resetForm(initialState);
            props.history.push('/dashboard');
          }}
        >
          Cancel
        </button>
        <button className="createLeftBtn" onClick={() => setPage(2)}>
          Next
        </button>
      </div>
    </>
  );
};

export default FormPageOne;
