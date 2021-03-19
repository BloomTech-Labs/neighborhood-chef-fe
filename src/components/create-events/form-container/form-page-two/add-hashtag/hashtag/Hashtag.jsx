import React from 'react';
import { hashtagAndWarningStyles } from '../../../../CreateEvent.styles';

const Hashtag = ({ hashtag, values, setValues }) => {
  const styles = hashtagAndWarningStyles();

  const removeHashtag = () => {
    setValues({ ...values, hashtags: values.hashtags.filter((tag) => tag !== hashtag) });
  };

  return (
    <div className={styles.root} style={{ background: '#58D473' }}>
      <p className={styles.p}>#{hashtag}</p>
      <span className={styles.span} onClick={() => removeHashtag()}>
        x
      </span>
    </div>
  );
};

export default Hashtag;
