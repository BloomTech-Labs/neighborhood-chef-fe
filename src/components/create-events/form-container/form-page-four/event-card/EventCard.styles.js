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
    },
    card: {
        display: 'flex',
        width: '100%',
        minHeight: '200px',
        [theme.breakpoints.down('600')]: {
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
        [theme.breakpoints.down('600')]: {
            maxwidth: '90%',
        },
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginLeft: '30px',
        textAlign: 'left',
        width: '50%',
        [theme.breakpoints.down('600')]: {
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
