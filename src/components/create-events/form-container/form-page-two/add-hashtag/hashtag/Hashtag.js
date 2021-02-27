import React from 'react';
import { hashtagStyles } from './Hashtag.styles';

const Hashtag = ({ hashtag, hashtags, setHashtags }) => {
    const styles = hashtagStyles();
    const removeHashtag = (id) => {
        setHashtags(hashtags.filter((tag) => tag.id !== id));
    };

    return (
        <div key={hashtag.id} className={styles.root}>
            <p className={styles.p}>#{hashtag.title}</p>
            <span
                className={styles.span}
                onClick={() => removeHashtag(hashtag.id)}
            >
                x
            </span>
        </div>
    );
};

export default Hashtag;
