import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeActive } from '../../../../utilities/actions';
import { parseTime } from '../../../../utilities/functions';
import Typography from '@material-ui/core/Typography';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useHistory } from 'react-router-dom';

const CalendarRow = ({ id, title, startTime, eventNum, status }) => {
    const activeEvent = useSelector((state) => state.activeEvent);
    const dispatch = useDispatch();
    const history = useHistory();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    const timeObject = parseTime(startTime, null);

    return (
        <div
            className={`calendar-row ${
                parseInt(eventNum) % 2 === 0 && 'calendar-row-even'
            } ${activeEvent === id && 'calendar-row-active'}`}
            onClick={
                matches
                    ? () => {
                          history.push(`/events/${id}`);
                          history.go();
                      }
                    : () => {
                          dispatch(makeActive(id));
                      }
            }
        >
            <div style={{ width: '15%' }}>
                <Typography color="textSecondary">
                    {timeObject.weekday}
                </Typography>
                <Typography variant="h4">{timeObject.day}</Typography>
            </div>
            <div
                style={{
                    borderLeft: '1px solid rgba(0,0,0,.1)',
                    paddingLeft: '20px',
                    width: '65%',
                }}
            >
                <Typography color="textSecondary">{title}</Typography>
                <div>
                    <Typography
                        variant="caption"
                        component="span"
                        style={
                            status === 'Not Going'
                                ? { color: 'rgba(232, 64, 64, .75)' }
                                : status === 'Maybe'
                                ? { color: 'rgba(255, 169, 40, .75)' }
                                : status === 'Going'
                                ? { color: 'rgba(33, 186, 66, .75)' }
                                : { color: 'rgba(0,0,0, .3)' }
                        }
                    >
                        {status || 'undecided'}
                    </Typography>
                </div>
            </div>
            <Typography variant="caption" color="textSecondary">
                {timeObject.startTime}
            </Typography>
        </div>
    );
};

export default CalendarRow;
