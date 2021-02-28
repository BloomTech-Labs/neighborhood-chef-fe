import { makeStyles } from '@material-ui/core/styles';

export const registerStyles = makeStyles((theme) => ({
    landingPageContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    landingPageLeft: {
        display: 'flex',
        justifyContent: 'center',
        width: '50vw',
        height: '80vh',
        textAlign: 'center',
        alignSelf: 'center',
        [theme.breakpoints.down('700')]: {
            width: '100vw',
            paddingTop: '35px',
        },
    },
    landingPageRight: {
        height: '90vh',
        width: '50vw',
        [theme.breakpoints.down('700')]: {
            display: 'none',
        },
    },
    geocoderContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    reactGeocoderResults: {
        display: 'relative',
        background: 'white',
        border: '1px solid rgba(0, 0, 0, 0.4)',
        cursor: 'pointer',
        zIndex: '5',
    },
    toggleMap: {
        [theme.breakpoints.down('700')]: {
            visibility: 'hidden',
        },
    },
}));
