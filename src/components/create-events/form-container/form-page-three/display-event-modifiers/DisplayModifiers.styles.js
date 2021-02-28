import { makeStyles } from '@material-ui/core/styles';

export const displayEventModifiersStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
    },
    modifierContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '45%',
        marginTop: '30px',
        marginLeft: '3%',
        [theme.breakpoints.down('600')]: {
            marginTop: '25px',
            width: '100%',
        },
    },
}));
