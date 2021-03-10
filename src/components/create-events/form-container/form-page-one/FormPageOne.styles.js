import { makeStyles } from '@material-ui/core/styles';

export const formPageOneStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        [theme.breakpoints.down('800')]: {
            flexDirection: 'column',
            width: '95%',
        },
    },
    leftContainer: {
        width: '50%',
        [theme.breakpoints.down('1000')]: {
            marginLeft: '5%',
        },
        [theme.breakpoints.down('800')]: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '90%',
        },
    },
    inputDiv: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: '2px solid #f0f0f0',
        borderRadius: '15px',
        margin: '40px 0',
        padding: '10px 15px',
        [theme.breakpoints.down('800')]: {
            margin: '20px 0',
        },
    },
    input: {
        height: '35px',
        border: 'none',
        borderRadius: '15px',
        outline: 'none',
        fontSize: '1.6rem',
        width: '90%',
        '&::placeholder': {
            color: '#b7b7b7',
        },
    },
    geo: {
        width: '90%',
    },
    label: {
        color: '#b7b7b7',
        fontSize: '1.6rem',
        marginRight: '6px',
    },
    textArea: {
        height: '150px',
        border: '2px dashed #f0f0f0',
        borderRadius: '15px',
        outline: 'none',
        padding: '10px 12px',
        fontSize: '1.6rem',
        width: '94%',
        '&::placeholder': {
            color: '#b7b7b7',
        },
        [theme.breakpoints.down('800')]: {
            width: '95%',
            margin: '20px 0',
        },
        [theme.breakpoints.down('600')]: {
            width: '93%',
        },
    },
    rightContainer: {
        width: '40%',
        marginLeft: '5%',
        paddingRight: '30px',
        [theme.breakpoints.down('800')]: {
            display: 'flex',
            flexDirection: 'column',
            width: '90%',
            paddingRight: '0',
        },
    },
    timeDiv: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        border: '2px solid #f0f0f0',
        borderRadius: '15px',
        margin: '40px 0',
        [theme.breakpoints.down('800')]: {
            margin: '20px 0',
        },
    },
    date: {
        border: 'none',
        borderRadius: '15px',
        color: 'black',
        padding: '14px 30px',
        fontSize: '1.6rem',
    },
    select: {
        display: 'flex',
        alignItems: 'center',
        margin: '10px 5px',
        opacity: '0.75',
        borderRadius: '5px',
        color: 'white',
        padding: '5px 20px',
        border: 'none',
        borderBottom: 'none',
        fontSize: '1.4rem',
    },
    categoryDiv: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        border: '2px solid #f0f0f0',
        borderRadius: '15px',
        color: '#b7b7b7',
        margin: '40px 0',
        padding: '7px',
        [theme.breakpoints.down('800')]: {
            margin: '20px 0',
        },
    },
    category: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: '15px',
        marginLeft: '5%',
        background: 'white',
        fontSize: '1.6rem',
        padding: '6px 30px',
        outline: 'none',
        color: 'black',
    },
}));
