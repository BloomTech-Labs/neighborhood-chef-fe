import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import PublishIcon from '@material-ui/icons/Publish';

import AddHashtag from './AddHashtag.js';

const FormPageTwo = ({
  hashtags,
  setHashtags,
  removeHashtag,
  values,
  handleChange,
  errors,
  touched,
  setPage,
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
        </div>
      </div>

      <div className="createFormButtonDiv">
        <button className="createRightBtn" onClick={() => setPage(1)}>
          Previous
        </button>
        <button className="createLeftBtn" onClick={() => setPage(3)}>
          Next
        </button>
      </div>
    </>
  );
};

export default FormPageTwo;
