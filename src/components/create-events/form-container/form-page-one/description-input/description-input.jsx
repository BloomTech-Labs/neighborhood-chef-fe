import React, { useEffect, useState } from 'react';
import { formPageOneStyles } from '../FormPageOne.styles';
import { ErrorMessage } from '@hookform/error-message';

export default function DescriptionInput({
    register,
    errors,
    setValue,
    getValues,
}) {
    const [forceUpdate, setforceUpdate] = useState(false);
    const styles = formPageOneStyles();

    useEffect(() => {
        register('description', {
            required: {
                value: true,
                message: "'Description' is a required field",
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
            <input
                type="textarea"
                name="description"
                placeholder="Write a description for your event..."
                onChange={handleChange}
                value={getValues('description')}
                className={styles.textArea}
            />
            <ErrorMessage
                name="description"
                errors={errors}
                render={({ message }) => (
                    <p style={{ color: 'crimson' }}>{message}</p>
                )}
            />
        </>
    );
}
