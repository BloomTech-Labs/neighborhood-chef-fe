import { makeStyles } from '@material-ui/core/styles';

export const eventImageUploadStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
    },
    p: {
        marginTop: '10px',
        marginBottom: '25px',
        textAlign: 'left',
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '70%',
    },
    img: {
        maxWidth: '40%',
        maxHeight: '120px',
        borderRadius: '10px',
        border: '2px solid rgba(0,0,0,.4)',
        cursor: 'pointer',
    },
}));
