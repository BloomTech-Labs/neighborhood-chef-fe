import { makeStyles } from '@material-ui/core/styles';

export const displayEventModifiersStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
    },
    h4: {
        fontWeight: '500',
        fontSize: '2rem',
        marginBottom: '15px',
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
    modifier: {
        display: 'flex',
        width: '100%',
        flexFlow: 'row wrap',
    },
}));
