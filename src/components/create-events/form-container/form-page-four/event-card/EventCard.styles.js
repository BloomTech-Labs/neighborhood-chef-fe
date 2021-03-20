import { makeStyles } from '@material-ui/core/styles';

export const eventCardStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    border: '2px solid #f3f3f3',
    boxShadow: '0px 4px 15px rgba(179, 179, 179, 0.1)',
    borderRadius: '25px',
    padding: '30px',
    width: '90%',
    alignItems: 'center',
  },
  card: {
    display: 'flex',
    width: '100%',
    minHeight: '200px',
    alignItems: 'center',
    [theme.breakpoints.down('800')]: {
      flexDirection: 'column',
      alignItems: 'center',
      width: '90%',
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
  grayText: {
    color: 'rgba(0, 0, 0, 0.35)',
  },
  greenText: {
    color: '#82DF96',
    fontWeight: '500',
  },
  redText: {
    color: '#ea6565',
    fontWeight: '500',
  },
  h3: {
    fontSize: '2.5rem',
    fontWeight: '500',
    color: '#1A0F2C',
    marginBottom: '5px',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginLeft: '30px',
    textAlign: 'left',
    width: '50%',
    [theme.breakpoints.down('800')]: {
      width: '96%',
      marginTop: '10px',
      height: '100px',
    },
  },
  button: {
    background: '#82df96',
    padding: '15px 20px',
    borderRadius: '5px',
    marginLeft: '5%',
    color: 'white',
    outline: 'none',
    fontSize: '2rem',
    fontWeight: 'bold',
    width: '15%',
    [theme.breakpoints.down('800')]: {
      width: '25%',
    },
  },
}));
