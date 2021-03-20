import { makeStyles } from '@material-ui/core/styles';

export const calendarStyles = makeStyles((theme) => ({
  componentMain: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  calendarViewMain: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '10px',
  },
  calendarRow: {
    background: 'white',
    borderRadius: '10px',
    padding: '10px 50px',
    marginBottom: '20px',
    width: 'calc(100%-100px)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'left',
    cursor: 'pointer',
    [theme.breakpoints.down('700')]: {
      width: '60%',
      padding: '10px 100px',
      margin: '10px auto',
    },
  },
  calendarRowEven: {
    background: '#f2f2f2',
  },
  calendarRowActive: {
    clipPath: 'polygon(92% 0, 100% 46%, 100% 54%, 92% 100%, 0 100%, 0% 0%)',
    background: 'rgba(88, 212, 115, 0.1)',
    [theme.breakpoints.down('700')]: {
      clipPath: 'polygon(0, 0, 0, 0)',
    },
  },
  monthPickerContainer: {
    background: '#f2f2f2',
    borderRadius: '10px',
    padding: '10px',
    width: '40%',
    display: 'flex',
    justifyContent: 'space-between',
    color: 'rgba(0, 0, 0, 0.5)',
    alignSelf: 'center',
    [theme.breakpoints.down('700')]: {
      width: '100%',
    },
  },
  middleCalendar: {
    width: '60%',
    marginRight: '5%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('700')]: {
      width: '100%',
      textAlign: 'center',
      margin: '0 auto',
    },
  },
  rightSideCalendar: {
    display: 'flex',
    background: '#f2f2f2',
    height: '85vh',
    borderRadius: '10px',
    padding: '10px',
    marginTop: '10px',
    maxWidth: '400px',
    [theme.breakpoints.down('700')]: {
      display: 'none',
    },
  },
  eventDetailsContainer: {
    width: '100%',
  },
  accountbutton: {
    textAlign: 'right',
  },
  rsvpButtons: {
    height: '60px',
    width: '60px',
    borderRadius: '180px',
    color: 'white',
    fontWeight: 'bolder',
    cursor: 'pointer',
    border: 'none',
    opacity: '0.5',
  },
  rsvpActive: {
    border: '1px solid black',
    opacity: '1',
  },
  greenLink: {
    color: '#58d473',
  },
  loginContainer: {
    margin: '20px auto',
    border: '2px solid #58d473',
    borderRadius: '10px',
    width: '60%',
    padding: '0 20px 50px 20px',
  },
}));
