import { makeStyles } from '@material-ui/core/styles';

export const buttonStyles = makeStyles((theme) => ({
    buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginRight: '5%',
        marginBottom: '20px',
        width: '100%',
        [theme.breakpoints.down('800')]: {
            marginRight: '0',
            justifyContent: 'center',
            alignItems: 'center',
        },
    },
    leftBtn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid #e5e5e5',
        background: 'rgba(255, 255, 255, 0.5)',
        padding: '15px 20px',
        borderRadius: '15px',
        margin: '20px 20px',
        color: '#b3b3b3',
        outline: 'none',
        fontSize: '2rem',
        fontWeight: 'bold',
        width: '15%',
        [theme.breakpoints.down('800')]: {
            width: '30%',
        },
    },
    rightBtn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#58d473',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)',
        padding: '15px 20px',
        borderRadius: '15px',
        margin: '20px 0',
        color: 'white',
        outline: 'none',
        fontSize: '2rem',
        fontWeight: 'bold',
        width: '15%',
        [theme.breakpoints.down('800')]: {
            width: '30%',
        },
    },
}));
