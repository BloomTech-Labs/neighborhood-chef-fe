import React from 'react';
import moment from 'moment';

import DisplayEventModifiers from './display-event-modifiers/DisplayEventModifiers';
import { scrollToTop } from '../form-page-one/FormPageOne.jsx';
import { useDispatch } from 'react-redux';
import { setPage } from '../../../../utilities/actions';

import {
    convertTime,
    chooseDefaultPicture,
} from '../../../../utilities/functions';

import { formPageThreeStyles } from './FormPageThree.styles';
import { buttonStyles } from '../../CreateEvent.styles';

const FormPageThree = (props) => {
    const dispatch = useDispatch();
    const styles = formPageThreeStyles();
    const btnStyles = buttonStyles();
    const values = props.getValues();

    return (
        <div className={styles.root}>
            <h3 className={styles.h3}>
                Double check if your event details are correct. Once finished,
                click done.
            </h3>
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <img
                        className={styles.img}
                        src={props.photo || chooseDefaultPicture()}
                        alt="Event Page 3 Img"
                    />

                    <div className={styles.text}>
                        <h4 className={styles.h4}>{values.title}</h4>
                        <div style={{ display: 'flex' }}>
                            <p
                                style={{
                                    fontSize: '1.6rem',
                                    color: 'rgba(0, 0, 0, 0.5)',
                                }}
                            >
                                {values.date &&
                                    moment(values.date).format('MMMM Do YYYY')}
                                &nbsp;
                            </p>
                            <p
                                style={{
                                    fontSize: '1.6rem',
                                    color: '#82DF96',
                                    fontWeight: '500',
                                }}
                            >
                                {/* {convertTime(values.startTime)}&nbsp; */}
                            </p>

                            {values.endTime && (
                                <>
                                    <p
                                        style={{
                                            fontSize: '1.6rem',
                                            color: 'rgba(0, 0, 0, 0.5)',
                                        }}
                                    >
                                        to&nbsp;
                                    </p>
                                    <p
                                        style={{
                                            fontSize: '1.6rem',
                                            color: '#ea6565',
                                            fontWeight: '500',
                                        }}
                                    >
                                        {/* {convertTime(values.endTime)} */}
                                    </p>
                                </>
                            )}
                        </div>
                        <p
                            style={{
                                fontSize: '1.6rem',
                                color: 'rgba(0, 0, 0, 0.5)',
                            }}
                        >
                            {values.address}
                        </p>
                    </div>
                </div>

                <DisplayEventModifiers
                    hashtags={props.hashtags}
                    setHashtags={props.setHashtags}
                    modifiers={props.modifiers}
                    setModifiers={props.setModifiers}
                    allergenList={props.allergenList}
                    setAllergenList={props.setAllergenList}
                    dietWarnings={props.dietWarnings}
                    setDietWarnings={props.setDietWarnings}
                />
            </div>

            <div className={btnStyles.buttonContainer}>
                <button
                    className={btnStyles.leftBtn}
                    onClick={() => {
                        dispatch(setPage(2));
                        scrollToTop();
                    }}
                >
                    Previous
                </button>
                <button className={btnStyles.rightBtn} type="submit">
                    Done
                </button>
            </div>
        </div>
    );
};

export default FormPageThree;
