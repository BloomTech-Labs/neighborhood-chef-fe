import React from 'react';
import moment from 'moment';

import DisplayEventModifiers from './display-event-modifiers/DisplayEventModifiers';
import { scrollToTop } from '../form-page-one/FormPageOne.jsx';
import { useDispatch } from 'react-redux';

import { convertTime, chooseDefaultPicture } from '../../../../utilities/functions';

import { formPageThreeStyles } from './FormPageThree.styles';
import { buttonStyles } from '../../CreateEvent.styles';

const FormPageThree = (props) => {
  const dispatch = useDispatch();
  const styles = formPageThreeStyles();
  const btnStyles = buttonStyles();

  return (
    <div className={styles.root}>
      <h3 className={styles.h3}>
        Double check if your event details are correct. Once finished, click done.
      </h3>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <img
            className={styles.img}
            src={props.values.photo || chooseDefaultPicture(props.values.title.charAt(0))}
            alt="Event Page 3 Img"
          />

          <div className={styles.text}>
            <h4 className={styles.h4}>
              {props.values.title.length < 22 ? props.values.title : `${props.values.title.slice(0, 22)}...`}
            </h4>
            <div className={styles.dateDiv}>
              <p className={styles.grayText}>
                {props.values.date && moment(props.values.date).format('MMMM Do YYYY')}
                &nbsp;
              </p>
              <p className={styles.startTime}>{convertTime(props.values.startTime)}&nbsp;</p>

              {props.values.endTime && (
                <>
                  <p className={styles.grayText}>to&nbsp;</p>
                  <p className={styles.endTime}>{convertTime(props.values.endTime)}</p>
                </>
              )}
            </div>
            <p className={styles.grayText}>{props.values.address}</p>
          </div>
        </div>

        <DisplayEventModifiers values={props.values} setValues={props.setValues} />
      </div>

      <div className={btnStyles.buttonContainer}>
        <button
          className={btnStyles.leftBtn}
          onClick={() => {
            props.setStepper(2);
            scrollToTop();
          }}
        >
          Previous
        </button>
        <button className={btnStyles.rightBtn} onSubmit={props.handleSubmit}>
          Done
        </button>
      </div>
    </div>
  );
};

export default FormPageThree;
