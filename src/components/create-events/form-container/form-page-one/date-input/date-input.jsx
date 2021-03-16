import React from 'react';
import { formPageOneStyles } from '../FormPageOne.styles';
import { Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import { ErrorMessage } from '@hookform/error-message';
import moment from 'moment';

export default function DateInput({ errors, control }) {
    const today = moment().format('YYYY-MM-DD');
    const styles = formPageOneStyles();

    return (
        <>
            <div className={styles.timeDiv}>
                <label htmlFor="eventFormDate" className={styles.label}>
                    Date
                </label>
                <Controller
                    control={control}
                    name="date"
                    rules={{
                        required: {
                            value: true,
                            message: "'Date' is a required field",
                        },
                    }}
                    as={
                        <TextField
                            type="date"
                            className={styles.date}
                            InputProps={{
                                inputProps: { min: today },
                                disableUnderline: true,
                            }}
                        />
                    }
                />
            </div>
            <ErrorMessage
                name="date"
                errors={errors}
                render={({ message }) => (
                    <p style={{ color: 'crimson' }}>{message}</p>
                )}
            />
        </>
    );
}
