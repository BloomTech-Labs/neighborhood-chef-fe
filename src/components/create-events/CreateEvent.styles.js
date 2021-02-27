import { makeStyles } from '@material-ui/core/styles';

export const headerStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        marginBottom: '20px',
    },
    notActive: {
        display: 'flex',
        alignItems: 'center',
        color: '#d9d9d9',
    },
    active: {
        display: 'flex',
        alignItems: 'center',
        color: '#0c0c41',
    },
    icon: {
        fontSize: '2.5rem',
        marginRight: '5px',
    },
}));
