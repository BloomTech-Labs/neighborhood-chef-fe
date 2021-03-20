import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

import { eventCardStyles } from './EventCard.styles';
import { chooseDefaultPicture } from '../../../../../utilities/functions';

const EventCard = ({ values }) => {
  console.log(values);
  const styles = eventCardStyles();

  const photo = values.photo ? values.photo : chooseDefaultPicture(values.title.charAt(0));

  return (
    <div className={styles.root}>
      <div className={styles.card}>
        <img className={styles.img} src={photo} alt="Event Card Img" />
        <div className={styles.textContainer}>
          <h3 className={styles.h3}>
            {values.title.length < 22 ? values.title : `${values.title.slice(0, 22)}...`}
          </h3>

          <p className={styles.grayText}>
            {moment(new Date(`${values.date} ${values.startTime}`).getTime()).format('MMMM Do, YYYY')}
            &nbsp;
          </p>
          <div style={{ display: 'flex' }}>
            <p className={styles.greenText}>
              {moment(parseInt(values.startTime)).format('h:mmA')}
              &nbsp;
            </p>
            {values.endTime && (
              <>
                <p className={styles.grayText}>to&nbsp;</p>
                <p className={styles.redText}>{moment(parseInt(values.endTime)).format('h:mmA')}</p>
              </>
            )}
          </div>

          <p className={styles.grayText}>{values.address}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
