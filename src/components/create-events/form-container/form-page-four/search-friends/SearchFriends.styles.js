import { makeStyles } from '@material-ui/core/styles';

export const searchFriendsStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        border: '2px solid #f3f3f3',
        boxShadow: '0px 4px 15px rgba(179, 179, 179, 0.1)',
        borderRadius: '25px',
        marginTop: '15px',
        marginBottom: '120px',
        padding: '30px',
        width: '90%',
    },
    h3: {
        fontSize: '1.8rem',
        color: '#1a0f2c',
        fontWeight: 'normal',
        fontStyle: 'normal',
        marginTop: '10px',
        marginBottom: '10px',
    },
    p: {
        color: '#dedede',
        fontSize: '1.6rem',
        fontWeight: 'normal',
        fontStyle: 'normal',
        marginTop: '10px',
    },
    inputDiv: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '2px solid #f0f0f0',
        borderRadius: '15px',
        margin: '40px 0',
        padding: '10px 15px',
        [theme.breakpoints.down('800')]: {
            margin: '20px 0',
        },
    },
    input: {
        height: '35px',
        border: 'none',
        borderRadius: '15px',
        outline: 'none',
        fontSize: '1.6rem',
        width: '90%',
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
