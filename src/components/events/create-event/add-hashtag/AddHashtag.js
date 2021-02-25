import React, { useState } from 'react';

import Hashtag from '../hashtag/Hashtag';
import Typography from '@material-ui/core/Typography';

const AddHashtag = ({ hashtags, setHashtags }) => {
  const [formInput, setFormInput] = useState({ title: '' });

  const handleChange = (e) => {
    e.preventDefault();
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHashtag = {
      id: hashtags.length + 1,
      title: formInput.title,
    };
    setHashtags([...hashtags, newHashtag]);
    setFormInput({ title: '' });
  };

  return (
    <div style={{ margin: '15px 0' }}>
      <Typography style={{ marginTop: '25px', marginBottom: '25px' }}>
        Add some hashtags for your event.
      </Typography>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flexStart',
          marginTop: '25px',
          marginBottom: '25px',
        }}
      >
        <input
          type='text'
          name='title'
          value={formInput.title}
          onChange={handleChange}
          style={{
            fontSize: '1.6rem',
            border: 'none',
            borderBottom: '2px solid #f0f0f0',
            width: '40%',
            outline: 'none',
            borderRadius: '10px',
            padding: '15px 15px',
          }}
        />
        <button
          onClick={handleSubmit}
          disabled={!formInput.title}
          className={!formInput.title ? 'inactive' : ''}
          style={{
            color: 'white',
            fontSize: '1.6rem',
            background: '#82df96',
            borderRadius: '10px',
            border: 'none',
            fontWeight: 'bold',
            wordSpacing: '15px',
            cursor: 'pointer',
            padding: '15px 20px',
            marginLeft: '2%',
          }}
        >
          Add +
        </button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', width: '60%' }}>
        {hashtags.map((hashtag) => {
          return (
            <Hashtag
              key={hashtag.id}
              hashtag={hashtag}
              hashtags={hashtags}
              setHashtags={setHashtags}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AddHashtag;
