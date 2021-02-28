import { makeStyles } from '@material-ui/core/styles';

export const fullEventStyles = makeStyles((theme) => ({
    singleEventContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        [theme.breakpoints.down('700')]: {
            flexWrap: 'wrap',
        },
    },
    singleEventBox: {
        background: '#f2f2f2',
        padding: '10px',
        borderRadius: '10px',
        height: 'calc(90vh - 20px)',
        maxHeight: 'calc(90vh - 20px)',
        width: '100%',
        display: 'flex',
        [theme.breakpoints.down('700')]: {
            flexWrap: 'wrap',
            maxHeight: '100%',
            height: '100%',
        },
    },
    singleEventRightColumn: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
    },
    singleEventTopRow: {
        display: 'flex',
        [theme.breakpoints.down('700')]: {
            flexWrap: 'wrap',
        },
    },
    singleEventCommentCard: {
        height: '100%',
    },

    hidden: {
        display: 'none',
    },
    emojiContainer: {
        display: 'flex',
        justifyContent: 'space-evenly',
    },
}));
