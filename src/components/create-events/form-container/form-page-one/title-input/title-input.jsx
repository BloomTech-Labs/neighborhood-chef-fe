import React, { useEffect, useState } from 'react';
import { formPageOneStyles } from '../FormPageOne.styles';
import { ErrorMessage } from '@hookform/error-message';
import CreateIcon from '@material-ui/icons/Create';

export default function TitleInput({ register, errors, setValue, getValues }) {
    const [forceUpdate, setforceUpdate] = useState(false);
    const styles = formPageOneStyles();

    useEffect(() => {
        register('title', {
            required: {
                value: true,
                message: "'Title' is a required field",
            },
        });
    }, []);

    useEffect(() => {}, [forceUpdate]);

    const handleChange = (e) => {
        setforceUpdate(!forceUpdate);
        setValue(e.target.name, e.target.value);
    };

    return (
        <>
            <div className={styles.inputDiv}>
                <input
                    type="text"
                    name="title"
                    value={getValues('title')}
                    placeholder="Title"
                    className={styles.input}
                    onChange={handleChange}
                />

                <CreateIcon color="disabled" className={styles.icon} />
            </div>
            <ErrorMessage
                name="title"
                errors={errors}
                render={({ message }) => (
                    <p style={{ color: 'crimson' }}>{message}</p>
                )}
            />
        </>
    );
}
