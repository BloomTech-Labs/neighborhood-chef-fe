import React from 'react';
import PublishIcon from '@material-ui/icons/Publish';

import strollerIcon from '@iconify/icons-vs/stroller';
import baselineOutdoorGrill from '@iconify/icons-ic/baseline-outdoor-grill';
import bottleWine from '@iconify/icons-mdi/bottle-wine';
import dogIcon from '@iconify/icons-whh/dog';
import icon18Plus from '@iconify/icons-uil/18-plus';
import foodApple from '@iconify/icons-mdi/food-apple';

import Modifier from './Modifier.js';
import AddHashtag from './AddHashtag.js';
import { scrollToTop } from './FormPageOne.js';

const modifierData = [
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
}) => {
  return (
    <>
      <div className="createFormPage2Container">
        <div className="createImgDiv">
          <h5
            style={{
              textAlign: 'left',
              fontSize: '1.8rem',
              marginLeft: '10px',
              fontWeight: 'normal',
            }}
          >
            Upload a main picture for your event page.
          </h5>
          <div className="imgUploadDiv">
            <p>Upload</p>
            <PublishIcon
              color="disabled"
              style={{
                fontSize: '22px',
                color: 'white',
                marginLeft: '5px',
                fontWeight: 'normal',
              }}
            />
          </div>
        </div>

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
