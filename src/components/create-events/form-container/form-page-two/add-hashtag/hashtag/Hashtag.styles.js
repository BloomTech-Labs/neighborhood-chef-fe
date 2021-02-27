import { makeStyles } from '@material-ui/core/styles';

export const hashtagStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        background: '#58D473',
        opacity: '0.75',
        borderRadius: '10px',
        marginTop: '10px',
        marginRight: '20px',
        color: 'white',
        fontSize: '1.6rem',
        width: 'auto',
        maxWidth: '400px',
        whiteSpace: 'pre-line',
        padding: '12px 20px',
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
