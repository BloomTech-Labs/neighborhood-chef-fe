import React from 'react';
import { formPageOneStyles } from '../FormPageOne.styles';
import { ErrorMessage } from '@hookform/error-message';

export default function DescriptionInput({ register, errors }) {
    const styles = formPageOneStyles();

    return (
        <>
            <input
                as="textarea"
                name="description"
                placeholder="Write a description for your event..."
                ref={register({
                    required: {
                        value: true,
                        message: "'Description' is a required field",
                    },
                })}
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
