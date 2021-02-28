import React from 'react';
import moment from 'moment';

import DisplayEventModifiers from './display-event-modifiers/DisplayEventModifiers.js';
import { scrollToTop } from '../form-page-one/FormPageOne.js';
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
                        src={
                            props.photo ||
                            chooseDefaultPicture(props.values.category_id)
                        }
                        alt="Event Page 3 Img"
                    />

                    <div className={styles.text}>
                        <h3
                            style={{
                                fontSize: '2.5rem',
                                fontWeight: '500',
                                color: '#1A0F2C',
                                margin: '0',
                            }}
                        >
                            {props.values.title}
                        </h3>
                        <div style={{ display: 'flex' }}>
                            <p
                                style={{
                                    fontSize: '1.6rem',
                                    color: 'rgba(0, 0, 0, 0.5)',
                                }}
                            >
                                {props.values.date &&
                                    moment(props.values.date).format(
                                        'MMMM Do YYYY'
                                    )}
                                &nbsp;
                            </p>
                            <p
                                style={{
                                    fontSize: '1.6rem',
                                    color: '#82DF96',
                                    fontWeight: '500',
                                }}
                            >
                                {convertTime(props.values.startTime)}&nbsp;
                            </p>

                            {props.values.endTime && (
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
                                        {convertTime(props.values.endTime)}
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
                            {props.values.address}
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
