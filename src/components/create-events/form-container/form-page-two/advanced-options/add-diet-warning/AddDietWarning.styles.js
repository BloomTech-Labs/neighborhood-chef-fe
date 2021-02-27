import { makeStyles } from '@material-ui/core/styles';

export const addDietWarningStyles = makeStyles(() => ({
    root: {
        marginTop: '55px',
        marginBottom: '25px',
    },
    input: {
        fontSize: '1.6rem',
        border: 'none',
        borderBottom: '2px solid #f0f0f0',
        width: '40%',
        outline: 'none',
        borderRadius: '10px',
        padding: '15px 15px',
    },
    dietWarningContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '60%',
    },
    button: {
        color: 'white',
        fontSize: '1.6rem',
        background: '#82df96',
        borderRadius: '10px',
        border: 'none',
        fontWeight: 'bold',
        wordSpacing: '15px',
        cursor: 'pointer',
        padding: '15px 20px',
        marginLeft: '2%',
    },
    inactive: {
        opacity: '0.75',
    },
}));
