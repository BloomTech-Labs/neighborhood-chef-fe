import React, { useState } from 'react';
import { Field } from 'formik';
import { useHistory } from 'react-router-dom';
import CreateIcon from '@material-ui/icons/Create';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Geocoder from 'react-mapbox-gl-geocoder';
import { useDispatch } from 'react-redux';
import { setPage } from '../../../../utilities/actions';
import moment from 'moment';
import { formPageOneStyles } from './FormPageOne.styles';
import CreateFormButtons from '../../create-form-buttons/CreateFormButtons';

export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

const FormPageOne = ({ handleChange, values, setFieldValue }) => {
    const [error, setError] = useState(false);
    const [viewport, setViewport] = useState({});
    const { push } = useHistory();
    const dispatch = useDispatch();
    const styles = formPageOneStyles();
    const today = moment().format('YYYY-MM-DD');

    const mapAccess = {
        mapboxApiAccessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
    };

    const queryParams = {
        country: 'us',
    };

    // Geocoder component doesn't allow placeholder without passing a component in
    const Placeholder = (props) => <input {...props} placeholder="Address" />;

    const onSelected = (viewport, item) => {
        setViewport(viewport);
        setFieldValue('address', item.place_name);
        setFieldValue('latitude', item.center[1]);
        setFieldValue('longitude', item.center[0]);
    };

    const validateAndTurnPage = () => {
        if (
            values.title &&
            values.address &&
            values.description &&
            values.date &&
            values.startTime &&
            values.category_id
        ) {
            dispatch(setPage(2));
            scrollToTop();
        } else {
            setError(true);
        }
    };

    return (
        <>
            <div className={styles.root}>
                <div className={styles.leftContainer}>
                    <div className={styles.inputDiv}>
                        <Field
                            type="text"
                            name="title"
                            placeholder="Title"
                            onChange={handleChange}
                            value={values.title}
                            className={styles.input}
                        />
                        <CreateIcon
                            color="disabled"
                            style={{ fontSize: '22px' }}
                        />
                    </div>

                    <div className="createFormInputDiv">
                        <Geocoder
                            {...mapAccess}
                            name="location"
                            onSelected={onSelected}
                            viewport={viewport}
                            hideOnSelect={true}
                            queryParams={queryParams}
                            updateInputOnSelect={true}
                            inputComponent={Placeholder}
                            initialInputValue={
                                values.address ? values.address : ''
                            }
                            className={styles.geo}
                        />
                        <SearchIcon
                            color="disabled"
                            style={{ fontSize: '22px' }}
                        />
                    </div>

                    <Field
                        as="textarea"
                        name="description"
                        placeholder="Write a description for your event..."
                        onChange={handleChange}
                        value={values.description}
                        className={styles.textArea}
                    />
                </div>

                <div className={styles.rightContainer}>
                    <div className={styles.timeDiv}>
                        <label htmlFor="eventFormDate" className={styles.label}>
                            Date
                        </label>
                        <TextField
                            type="date"
                            name="date"
                            className={styles.date}
                            value={values.date}
                            onChange={handleChange}
                            InputProps={{
                                inputProps: { min: today },
                                disableUnderline: true,
                            }}
                        />
                    </div>

                    <div className={styles.timeDiv}>
                        <label htmlFor="greenSelect" className={styles.label}>
                            The event starts at:
                        </label>
                        <Select
                            name="startTime"
                            className={styles.select}
                            style={{ background: '#58d573' }}
                            value={values.startTime}
                            onChange={handleChange}
                            disableUnderline={true}
                        >
                            <MenuItem value=""></MenuItem>
                            <MenuItem value={'00:00:00'}>12:00am</MenuItem>
                            <MenuItem value={'00:30:00'}>12:30am</MenuItem>
                            <MenuItem value={'01:00:00'}>1:00am</MenuItem>
                            <MenuItem value={'01:30:00'}>1:30am</MenuItem>
                            <MenuItem value={'02:00:00'}>2:00am</MenuItem>
                            <MenuItem value={'02:30:00'}>2:30am</MenuItem>
                            <MenuItem value={'03:00:00'}>3:00am</MenuItem>
                            <MenuItem value={'03:30:00'}>3:30am</MenuItem>
                            <MenuItem value={'04:00:00'}>4:00am</MenuItem>
                            <MenuItem value={'04:30:00'}>4:30am</MenuItem>
                            <MenuItem value={'05:00:00'}>5:00am</MenuItem>
                            <MenuItem value={'05:30:00'}>5:30am</MenuItem>
                            <MenuItem value={'06:00:00'}>6:00am</MenuItem>
                            <MenuItem value={'06:30:00'}>6:30am</MenuItem>
                            <MenuItem value={'07:00:00'}>7:00am</MenuItem>
                            <MenuItem value={'07:30:00'}>7:30am</MenuItem>
                            <MenuItem value={'08:00:00'}>8:00am</MenuItem>
                            <MenuItem value={'08:30:00'}>8:30am</MenuItem>
                            <MenuItem value={'09:00:00'}>9:00am</MenuItem>
                            <MenuItem value={'09:30:00'}>9:30am</MenuItem>
                            <MenuItem value={'10:00:00'}>10:00am</MenuItem>
                            <MenuItem value={'10:30:00'}>10:30am</MenuItem>
                            <MenuItem value={'11:00:00'}>11:00am</MenuItem>
                            <MenuItem value={'11:30:00'}>11:30am</MenuItem>
                            <MenuItem value={'12:00:00'}>12:00pm</MenuItem>
                            <MenuItem value={'12:30:00'}>12:30pm</MenuItem>
                            <MenuItem value={'13:00:00'}>1:00pm</MenuItem>
                            <MenuItem value={'13:30:00'}>1:30pm</MenuItem>
                            <MenuItem value={'14:00:00'}>2:00pm</MenuItem>
                            <MenuItem value={'14:30:00'}>2:30pm</MenuItem>
                            <MenuItem value={'15:00:00'}>3:00pm</MenuItem>
                            <MenuItem value={'15:30:00'}>3:30pm</MenuItem>
                            <MenuItem value={'16:00:00'}>4:00pm</MenuItem>
                            <MenuItem value={'16:30:00'}>4:30pm</MenuItem>
                            <MenuItem value={'17:00:00'}>5:00pm</MenuItem>
                            <MenuItem value={'17:30:00'}>5:30pm</MenuItem>
                            <MenuItem value={'18:00:00'}>6:00pm</MenuItem>
                            <MenuItem value={'18:30:00'}>6:30pm</MenuItem>
                            <MenuItem value={'19:00:00'}>7:00pm</MenuItem>
                            <MenuItem value={'19:30:00'}>7:30pm</MenuItem>
                            <MenuItem value={'20:00:00'}>8:00pm</MenuItem>
                            <MenuItem value={'20:30:00'}>8:30pm</MenuItem>
                            <MenuItem value={'21:00:00'}>9:00pm</MenuItem>
                            <MenuItem value={'21:30:00'}>9:30pm</MenuItem>
                            <MenuItem value={'22:00:00'}>10:00pm</MenuItem>
                            <MenuItem value={'22:30:00'}>10:30pm</MenuItem>
                            <MenuItem value={'23:00:00'}>11:00pm</MenuItem>
                            <MenuItem value={'23:30:00'}>11:30pm</MenuItem>
                        </Select>
                    </div>

                    <div className={styles.timeDiv}>
                        <label htmlFor="redSelect" className={styles.label}>
                            The event ends at:
                        </label>
                        <Select
                            name="endTime"
                            className={styles.select}
                            style={{ background: '#ea6565' }}
                            value={values.endTime}
                            onChange={handleChange}
                            disableUnderline={true}
                        >
                            <MenuItem value=""></MenuItem>
                            <MenuItem value={'00:00:00'}>12:00am</MenuItem>
                            <MenuItem value={'00:30:00'}>12:30am</MenuItem>
                            <MenuItem value={'01:00:00'}>1:00am</MenuItem>
                            <MenuItem value={'01:30:00'}>1:30am</MenuItem>
                            <MenuItem value={'02:00:00'}>2:00am</MenuItem>
                            <MenuItem value={'02:30:00'}>2:30am</MenuItem>
                            <MenuItem value={'03:00:00'}>3:00am</MenuItem>
                            <MenuItem value={'03:30:00'}>3:30am</MenuItem>
                            <MenuItem value={'04:00:00'}>4:00am</MenuItem>
                            <MenuItem value={'04:30:00'}>4:30am</MenuItem>
                            <MenuItem value={'05:00:00'}>5:00am</MenuItem>
                            <MenuItem value={'05:30:00'}>5:30am</MenuItem>
                            <MenuItem value={'06:00:00'}>6:00am</MenuItem>
                            <MenuItem value={'06:30:00'}>6:30am</MenuItem>
                            <MenuItem value={'07:00:00'}>7:00am</MenuItem>
                            <MenuItem value={'07:30:00'}>7:30am</MenuItem>
                            <MenuItem value={'08:00:00'}>8:00am</MenuItem>
                            <MenuItem value={'08:30:00'}>8:30am</MenuItem>
                            <MenuItem value={'09:00:00'}>9:00am</MenuItem>
                            <MenuItem value={'09:30:00'}>9:30am</MenuItem>
                            <MenuItem value={'10:00:00'}>10:00am</MenuItem>
                            <MenuItem value={'10:30:00'}>10:30am</MenuItem>
                            <MenuItem value={'11:00:00'}>11:00am</MenuItem>
                            <MenuItem value={'11:30:00'}>11:30am</MenuItem>
                            <MenuItem value={'12:00:00'}>12:00pm</MenuItem>
                            <MenuItem value={'12:30:00'}>12:30pm</MenuItem>
                            <MenuItem value={'13:00:00'}>1:00pm</MenuItem>
                            <MenuItem value={'13:30:00'}>1:30pm</MenuItem>
                            <MenuItem value={'14:00:00'}>2:00pm</MenuItem>
                            <MenuItem value={'14:30:00'}>2:30pm</MenuItem>
                            <MenuItem value={'15:00:00'}>3:00pm</MenuItem>
                            <MenuItem value={'15:30:00'}>3:30pm</MenuItem>
                            <MenuItem value={'16:00:00'}>4:00pm</MenuItem>
                            <MenuItem value={'16:30:00'}>4:30pm</MenuItem>
                            <MenuItem value={'17:00:00'}>5:00pm</MenuItem>
                            <MenuItem value={'17:30:00'}>5:30pm</MenuItem>
                            <MenuItem value={'18:00:00'}>6:00pm</MenuItem>
                            <MenuItem value={'18:30:00'}>6:30pm</MenuItem>
                            <MenuItem value={'19:00:00'}>7:00pm</MenuItem>
                            <MenuItem value={'19:30:00'}>7:30pm</MenuItem>
                            <MenuItem value={'20:00:00'}>8:00pm</MenuItem>
                            <MenuItem value={'20:30:00'}>8:30pm</MenuItem>
                            <MenuItem value={'21:00:00'}>9:00pm</MenuItem>
                            <MenuItem value={'21:30:00'}>9:30pm</MenuItem>
                            <MenuItem value={'22:00:00'}>10:00pm</MenuItem>
                            <MenuItem value={'22:30:00'}>10:30pm</MenuItem>
                            <MenuItem value={'23:00:00'}>11:00pm</MenuItem>
                            <MenuItem value={'23:30:00'}>11:30pm</MenuItem>
                        </Select>
                    </div>

                    <div className={styles.categoryDiv}>
                        <label htmlFor="category_id" className={styles.labels}>
                            Category
                        </label>
                        <Select
                            name="category_id"
                            className={styles.category}
                            value={values.category_id}
                            onChange={handleChange}
                            disableUnderline
                        >
                            <MenuItem value=""></MenuItem>
                            <MenuItem value={1}>BBQ</MenuItem>
                            <MenuItem value={2}>Picnic</MenuItem>
                            <MenuItem value={3}>Wine and Cheese</MenuItem>
                            <MenuItem value={4}>Multi-course meal</MenuItem>
                            <MenuItem value={5}>Sunday Sports</MenuItem>
                            <MenuItem value={6}>Kids Play Date</MenuItem>
                            <MenuItem value={7}>Puppy Play Date</MenuItem>
                            <MenuItem value={8}>Cat Play Date</MenuItem>
                        </Select>
                    </div>
                </div>
            </div>

            {error && (
                <p
                    style={{
                        textAlign: 'center',
                        color: 'crimson',
                        width: '90%',
                    }}
                >
                    *Title, Address, Description, Date, Start Time, and Category
                    are required
                </p>
            )}

            <div className={styles.buttonContainer}>
                <button
                    className={styles.leftBtn}
                    onClick={() => {
                        push('/dashboard');
                    }}
                >
                    Cancel
                </button>
                <button
                    type="button"
                    className={styles.rightBtn}
                    onClick={() => validateAndTurnPage()}
                >
                    Next
                </button>
            </div>
        </>
    );
};

export default FormPageOne;
