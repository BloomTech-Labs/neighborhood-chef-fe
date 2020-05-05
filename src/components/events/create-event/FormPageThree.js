import React from 'react';
import moment from 'moment';

import Hashtag from './Hashtag.js';
import Modifier from './Modifier.js';

const FormPageThree = ({
  setPage,
  values,
  hashtags,
  removeHashtag,
  modifiers,
  setModifiers,
}) => {
  return (
    <div>
      <h3 style={{ fontSize: '1.8rem', fontWeight: '500', color: '#1A0F2C' }}>
        Double check if your event details are correct. Once finished, click
        done.
      </h3>
      <div>
        <img
          style={{
            width: '300px',
            border: '8px solid #58D473',
            borderRadius: '25px',
          }}
          src="https://images.pexels.com/photos/1309067/pexels-photo-1309067.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          alt="bbq"
        />

        <div style={{ marginLeft: '30px', textAlign: 'left' }}>
          <h3
            style={{ fontSize: '1.8rem', fontWeight: '500', color: '#1A0F2C' }}
          >
            {values.Title}
          </h3>
          <div>
            <p style={{ fontSize: '1.6rem', color: 'rgba(0, 0, 0, 0.5)' }}>
              {values.Date && moment(values.Date).format('MMM Do YYYY')}
            </p>
            <p style={{ fontSize: '1.6rem', color: 'rgba(0, 0, 0, 0.5)' }}>
              {values.Start_Time && values.Start_Time}{' '}
              {values.End_Time && `to ${values.End_Time}`}
            </p>
            <p style={{ fontSize: '1.6rem', color: 'rgba(0, 0, 0, 0.5)' }}>
              {values.Address}
            </p>
          </div>
        </div>
      </div>
      <div>
        {hashtags.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <p>Hashtags</p>
            {hashtags.map((hashtag) => {
              return (
                <Hashtag
                  key={hashtag.id}
                  hashtag={hashtag}
                  removeModifier={removeHashtag}
                />
              );
            })}
          </div>
        )}

        {modifiers.length > 0 && (
          <div>
            <p>Modifiers</p>
            {modifiers.map((modifier) => {
              return (
                <Modifier
                  key={modifier.id}
                  modifier={modifier}
                  modifiers={modifiers}
                  setModifiers={setModifiers}
                />
              );
            })}
          </div>
        )}
      </div>
      <div className="createFormButtonDiv">
        <button className="createRightBtn" onClick={() => setPage(2)}>
          Previous
        </button>
        <button className="createLeftBtn" type="submit">
          Done
        </button>
      </div>
    </div>
  );
};

export default FormPageThree;
