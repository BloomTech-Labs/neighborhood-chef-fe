import React from 'react';
import { formPageOneStyles } from '../FormPageOne.styles';
import { ErrorMessage } from '@hookform/error-message';
import CreateIcon from '@material-ui/icons/Create';

export default function TitleInput({ register, errors }) {
    const styles = formPageOneStyles();

    return (
        <>
            <div className={styles.inputDiv}>
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    ref={register({
                        required: {
                            value: true,
                            message: "'Title' is a required field",
                        },
                    })}
                    className={styles.input}
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
