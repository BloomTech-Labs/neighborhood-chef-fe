import { makeStyles } from '@material-ui/core/styles';

export const dietaryWarningStyles = makeStyles(() => ({
    warning: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        background: '#ea6565',
        opacity: '0.75',
        borderRadius: '10px',
        marginRop: '10px',
        marginRight: '20px',
        color: 'white',
        fontSize: '1.6rem',
        width: 'auto',
        maxWidth: '400px',
        whiteSpace: 'pre-line',
        padding: '12px 20px',
        cursor: 'pointer',
    },
    p: {
        wordWrap: 'break-word',
    },
    span: {
        cursor: 'pointer',
        fontWeight: 'bold',
        marginLeft: '10px',
    },
}));
