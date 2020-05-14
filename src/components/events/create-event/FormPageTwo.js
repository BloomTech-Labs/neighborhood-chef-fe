import React from 'react';

import strollerIcon from '@iconify/icons-vs/stroller';
import baselineOutdoorGrill from '@iconify/icons-ic/baseline-outdoor-grill';
import bottleWine from '@iconify/icons-mdi/bottle-wine';
import dogIcon from '@iconify/icons-whh/dog';
import icon18Plus from '@iconify/icons-uil/18-plus';
import foodApple from '@iconify/icons-mdi/food-apple';

import EventImageUpload from './EventImageUpload.js';
import Modifier from './Modifier.js';
import AddHashtag from './AddHashtag.js';
import { scrollToTop } from './FormPageOne.js';

export const modifierData = [
  { id: 1, title: 'BBQ', icon: baselineOutdoorGrill, active: false },
  { id: 2, title: 'Kid-Friendly', icon: strollerIcon, active: false },
  { id: 3, title: 'Alcohol Accepted', icon: bottleWine, active: false },
  { id: 4, title: '18+ Event', icon: icon18Plus, active: false },
  { id: 5, title: 'Pet-Friendly', icon: dogIcon, active: false },
  { id: 6, title: 'Vegetarian', icon: foodApple, active: false },
];

const FormPageTwo = ({
  hashtags,
  setHashtags,
  removeHashtag,
  setPage,
  modifiers,
  setModifiers,
  photo,
  setPhoto,
}) => {
  return (
    <>
      <div className="createFormPage2Container">
        <EventImageUpload photo={photo} setPhoto={setPhoto} />
        <AddHashtag
          hashtags={hashtags}
          setHashtags={setHashtags}
          removeHashtag={removeHashtag}
        />
        <div>
          <h5
            style={{
              textAlign: 'left',
              fontSize: '1.8rem',
              marginLeft: '10px',
              fontWeight: 'normal',
            }}
          >
            Pick modifiers for your event.
          </h5>
          <div style={{ display: 'flex', width: '100%', flexFlow: 'row wrap' }}>
            {modifierData.map((modifier) => {
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
        </div>
      </div>

      <div className="createFormButtonDiv">
        <button
          className="createRightBtn"
          onClick={() => {
            setPage(1);
            scrollToTop();
          }}
        >
          Previous
        </button>
        <button
          className="createLeftBtn"
          onClick={() => {
            setPage(3);
            scrollToTop();
          }}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default FormPageTwo;
