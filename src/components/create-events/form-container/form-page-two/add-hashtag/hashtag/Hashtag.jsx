import React from 'react';
import { hashtagAndWarningStyles } from '../../../../CreateEvent.styles';

const Hashtag = ({ hashtag, getValues, setValue, setForceUpdate }) => {
  const styles = hashtagAndWarningStyles();

  const removeHashtag = () => {
    setValue('hashtags', JSON.stringify(JSON.parse(getValues('hashtags')).filter((tag) => tag !== hashtag)));
    setForceUpdate((prevState) => !prevState);
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
