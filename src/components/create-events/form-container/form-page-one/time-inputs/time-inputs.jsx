import React from 'react';
import { formPageOneStyles } from '../FormPageOne.styles';
import { Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import useTimes from '../../../../../hooks/useTimes';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default function TimeInputs({ errors, control }) {
    const styles = formPageOneStyles();
    const time = useTimes();

    return (
        <>
            <div className={styles.timeDiv}>
                <label htmlFor="greenSelect" className={styles.label}>
                    The event starts at:
                </label>
                <Controller
                    control={control}
                    name="startTime"
                    rules={{
                        required: {
                            value: true,
                            message: "'Start Time' is a required field",
                        },
                    }}
                    as={
                        <Select
                            className={styles.selectGreen}
                            disableUnderline={true}
                        >
                            <MenuItem value=""></MenuItem>
                            {time.militaryTimes &&
                                time.militaryTimes.map((mTime, index) => (
                                    <MenuItem value={mTime}>
                                        {time.normalTimes[index]}
                                    </MenuItem>
                                ))}
                        </Select>
                    }
                />
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
                <Controller
                    control={control}
                    name="endTime"
                    as={
                        <Select
                            className={styles.selectRed}
                            disableUnderline={true}
                        >
                            <MenuItem value=""></MenuItem>
                            {time.militaryTimes &&
                                time.militaryTimes.map((mTime, index) => (
                                    <MenuItem value={mTime}>
                                        {time.normalTimes[index]}
                                    </MenuItem>
                                ))}
                        </Select>
                    }
                />
            </div>
        </>
    );
}
