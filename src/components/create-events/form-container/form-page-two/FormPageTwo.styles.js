import { makeStyles } from '@material-ui/core/styles';

export const formPageTwoStyles = makeStyles(() => ({
    container: {
        width: '90%',
    },
    modifierContainer: {
        display: 'flex',
        width: '100%',
        flexFlow: 'row wrap',
    },
    modifierLabel: {
        margin: '10px 0',
    },
    typography: {
        marginTop: '25px',
        fontWeight: 'bold',
    },
    pointer: {
        cursor: 'pointer',
    },
}));
