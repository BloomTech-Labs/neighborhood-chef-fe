import React from 'react';

const Hashtag = ({ hashtag, hashtags, setHashtags }) => {
  const removeHashtag = (id) => {
    setHashtags(hashtags.filter((tag) => tag.id !== id));
  };

  return (
    <div
      key={hashtag.id}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        background: '#58D473',
        opacity: '0.75',
        borderRadius: '10px',
        marginTop: '20px',
        marginRight: '20px',
        marginBottom: '20px',
        color: 'white',
        fontSize: '1.6rem',
        width: 'auto',
        maxWidth: '400px',
        whiteSpace: 'pre-line',
        padding: '0 20px',
      }}
    >
      <p style={{ wordWrap: 'break-word' }}>{hashtag.title}</p>
      <span
        style={{
          cursor: 'pointer',
          fontWeight: 'bold',
          marginLeft: '10px',
        }}
        onClick={() => removeHashtag(hashtag.id)}
      >
        x
      </span>
    </div>
  );
};

export default Hashtag;
