import React from 'react';
import { formPageOneStyles } from '../FormPageOne.styles';
import { ErrorMessage } from '@hookform/error-message';
import useTimes from '../../../../../hooks/useTimes';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default function TimeInputs({ errors, setValues, values, validate }) {
  const styles = formPageOneStyles();
  const time = useTimes();

  const handleChange = (e) => {
    e.persist();
    console.log(e.target.value, e.target.name);
    setValues((values) => {
      return { ...values, [e.target.name]: e.target.value };
    });
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
          value={values.startTime}
          onBlur={() => {
            validate('startTime');
          }}
          onChange={handleChange}
        >
          <MenuItem value=""></MenuItem>
          {time.militaryTimes &&
            time.militaryTimes.map((mTime, index) => (
              <MenuItem key={index} value={mTime}>
                {time.normalTimes[index]}
              </MenuItem>
            ))}
        </Select>
      </div>
      {errors.startTime && errors.startTime.length && (
        <ErrorMessage
          name="startTime"
          errors={errors}
          message={errors.startTime[0]}
          render={({ message }) => <p style={{ color: 'crimson' }}>{message}</p>}
        />
      )}

      <div className={styles.timeDiv}>
        <label htmlFor="redSelect" className={styles.label}>
          The event ends at:
        </label>

        <Select
          className={styles.selectRed}
          disableUnderline={true}
          name="endTime"
          value={values.endTime}
          onChange={handleChange}
          onBlur={() => {
            validate('endTime');
          }}
        >
          <MenuItem value=""></MenuItem>
          {time.militaryTimes &&
            time.militaryTimes.map((mTime, index) => (
              <MenuItem key={index} value={mTime}>
                {time.normalTimes[index]}
              </MenuItem>
            ))}
        </Select>
      </div>
    </>
  );
}
