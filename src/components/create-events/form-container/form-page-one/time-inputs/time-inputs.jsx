import React, { useEffect, useState } from 'react';
import { formPageOneStyles } from '../FormPageOne.styles';
import { ErrorMessage } from '@hookform/error-message';
import useTimes from '../../../../../hooks/useTimes';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default function TimeInputs({ errors, register, setValue, getValues }) {
    const [forceUpdate, setforceUpdate] = useState(false);
    const styles = formPageOneStyles();
    const time = useTimes();

    useEffect(() => {
        register('startTime', {
            required: {
                value: true,
                message: "'Start Time' is a required field",
            },
        });

        register('endTime', {
            required: {
                value: true,
                message: "'End Time' is a required field",
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
                <label htmlFor="greenSelect" className={styles.label}>
                    The event starts at:
                </label>

                <Select
                    className={styles.selectGreen}
                    disableUnderline={true}
                    name="startTime"
                    value={getValues('startTime')}
                    onChange={handleChange}
                >
                    <MenuItem value=""></MenuItem>
                    {time.militaryTimes &&
                        time.militaryTimes.map((mTime, index) => (
                            <MenuItem value={mTime}>
                                {time.normalTimes[index]}
                            </MenuItem>
                        ))}
                </Select>
            </div>
            <ErrorMessage
                name="startTime"
                errors={errors}
                render={({ message }) => (
                    <p style={{ color: 'crimson' }}>{message}</p>
                )}
            />

            <div className={styles.timeDiv}>
                <label htmlFor="redSelect" className={styles.label}>
                    The event ends at:
                </label>

                <Select
                    className={styles.selectRed}
                    disableUnderline={true}
                    name="endTime"
                    value={getValues('endTime')}
                    onChange={handleChange}
                >
                    <MenuItem value=""></MenuItem>
                    {time.militaryTimes &&
                        time.militaryTimes.map((mTime, index) => (
                            <MenuItem value={mTime}>
                                {time.normalTimes[index]}
                            </MenuItem>
                        ))}
                </Select>
            </div>
        </>
    );
}
