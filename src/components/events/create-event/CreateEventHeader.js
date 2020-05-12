import React from 'react';

import { Icon } from '@iconify/react';
import pencilIcon from '@iconify/icons-mdi/pencil';
import createIcon from '@iconify/icons-gridicons/create';
import shareIcon from '@iconify/icons-icons8/share';

const CreateEventHeader = ({ page }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <div
        className={`createFormHeaderNotActive${
          page === 1 ? ' createFormHeaderActive' : ''
        }`}
      >
        <Icon
          icon={pencilIcon}
          style={{ fontSize: '3.4rem', marginRight: '5px' }}
        />
        <h3>Details</h3>
      </div>
      <div
        className={`createFormHeaderNotActive${
          page === 2 ? ' createFormHeaderActive' : ''
        }`}
      >
        <p>icon</p>
        <h3>Preferences</h3>
      </div>
      <div
        className={`createFormHeaderNotActive${
          page === 3 ? ' createFormHeaderActive' : ''
        }`}
      >
        <Icon
          icon={createIcon}
          style={{ fontSize: '3.5rem', marginRight: '5px' }}
        />
        <h3>Create</h3>
      </div>
      <div
        className={`createFormHeaderNotActive${
          page === 4 ? ' createFormHeaderActive' : ''
        }`}
      >
        <Icon
          icon={shareIcon}
          style={{ fontSize: '4.5rem', marginRight: '5px' }}
        />
        <h3>Share</h3>
      </div>
    </div>
  );
};

export default CreateEventHeader;
