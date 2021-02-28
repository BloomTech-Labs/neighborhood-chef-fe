import React from 'react';
import { hashtagAndWarningStyles } from '../../../../CreateEvent.styles';

const Hashtag = ({ hashtag, hashtags, setHashtags }) => {
    const styles = hashtagAndWarningStyles();
    const removeHashtag = (id) => {
        setHashtags(hashtags.filter((tag) => tag.id !== id));
    };

    return (
        <div
            key={hashtag.id}
            className={styles.root}
            style={{ background: '#58D473' }}
        >
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
