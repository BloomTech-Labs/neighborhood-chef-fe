import { makeStyles } from '@material-ui/core/styles';

export const formPageThreeStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  h3: {
    textAlign: 'left',
    width: '100%',
    fontSize: '1.8rem',
    fontWeight: '500',
    color: '#1a0f2c',
    margin: '5px 0',
    marginLeft: '2%',
  },
  h4: {
    fontSize: '2.5rem',
    fontWeight: '500',
    color: '#1A0F2C',
    margin: '0',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    border: '2px solid #f3f3f3',
    boxShadow: '0px 4px 15px rgba(179, 179, 179, 0.1)',
    borderRadius: '25px',
    marginTop: '10px',
    padding: '30px',
    width: '90%',
  },
  card: {
    display: 'flex',
    width: '100%',
    minHeight: '200px',
    [theme.breakpoints.down('800')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  img: {
    maxWidth: '50%',
    border: '8px solid #58d473',
    borderRadius: '25px',
    maxHeight: '300px',
    [theme.breakpoints.down('800')]: {
      maxWidth: '90%',
    },
  },
  dateDiv: {
    display: 'flex',
  },
  grayText: {
    fontSize: '1.6rem',
    color: 'rgba(0, 0, 0, 0.5)',
  },
  startTime: {
    fontSize: '1.6rem',
    color: '#82DF96',
    fontWeight: '500',
  },
  endTime: {
    fontSize: '1.6rem',
    color: '#ea6565',
    fontWeight: '500',
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginLeft: '30px',
    textAlign: 'left',
    width: '50%',
    [theme.breakpoints.down('800')]: {
      width: '82%',
      marginTop: '10px',
      height: '100px',
    },
    [theme.breakpoints.down('695')]: {
      width: '96%',
    },
  },
}));
