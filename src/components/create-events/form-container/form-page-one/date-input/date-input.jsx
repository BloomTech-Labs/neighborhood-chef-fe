import React, { useEffect, useState } from 'react';
import { formPageOneStyles } from '../FormPageOne.styles';
import TextField from '@material-ui/core/TextField';
import { ErrorMessage } from '@hookform/error-message';
import moment from 'moment';

export default function DateInput({ errors, register, setValue, getValues }) {
    const [forceUpdate, setforceUpdate] = useState(false);
    const today = moment().format('YYYY-MM-DD');
    const styles = formPageOneStyles();

    useEffect(() => {
        register('date', {
            required: {
                value: true,
                message: "'Date' is a required field",
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
            <div className={styles.timeDiv}>
                <label htmlFor="eventFormDate" className={styles.label}>
                    Date
                </label>

                <TextField
                    name="date"
                    type="date"
                    className={styles.date}
                    InputProps={{
                        inputProps: { min: today },
                        disableUnderline: true,
                    }}
                    onChange={handleChange}
                    value={getValues('date')}
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
