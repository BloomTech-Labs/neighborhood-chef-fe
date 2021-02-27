import React, { useState } from 'react';

import { addHashtagStyles } from './AddHashtag.styles';
import Hashtag from './hashtag/Hashtag';
import Typography from '@material-ui/core/Typography';

const AddHashtag = ({ hashtags, setHashtags }) => {
    const [formInput, setFormInput] = useState({ title: '' });
    const styles = addHashtagStyles();

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
        <div className={styles.root}>
            <Typography style={{ marginTop: '25px', marginBottom: '25px' }}>
                Add some hashtags for your event.
            </Typography>
            <div className={styles.container}>
                <input
                    type="text"
                    name="title"
                    value={formInput.title}
                    onChange={handleChange}
                    className={styles.input}
                />
                <button
                    onClick={handleSubmit}
                    disabled={!formInput.title}
                    className={`${styles.button} ${
                        !formInput.title ? styles.inactive : ''
                    }`}
                >
                    Add +
                </button>
            </div>
            <div className={styles.hashtagsContainer}>
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
