import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utilities/axiosWithAuth';
import { print } from 'graphql';
import { GET_AUTHORED_EVENTS } from '../../graphql/users/user-queries';
import { useSelector } from 'react-redux';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
// import { useTheme } from "@material-ui/core/styles";
// import useMediaQuery from "@material-ui/core/useMediaQuery";

import { Icon } from '@iconify/react';
import logoutIcon from '@iconify/icons-heroicons-outline/logout';
import closeRectangle from '@iconify/icons-jam/close-rectangle';

import ls from 'local-storage';
import qs from 'querystring';

import { makeInitials } from '../../utilities/functions';
import { cardStyles } from '../../styles';

import AccountEventCard from './AccountEventCard';
import UserEditModalContent from '../UserEditModalContent.jsx';

const drawerWidth = 320;

const styles = makeStyles((theme) => {
    return {
        container: {
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '3.5vh',
            padding: '0 5%',
            height: '100vh',
            background: 'lightgrey',
            overflowY: 'scroll',
        },
        'avatar-container': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '2%',
        },
        avatar: {
            width: theme.spacing(13),
            height: theme.spacing(13),
            fontSize: '200%',
            marginBottom: '3%',
        },
        'middle-content-container': {
            marginTop: '2%',

            '& h6': {
                fontWeight: 'bold',
            },

            '& p': {
                marginTop: '2%',
                marginBottom: '5%',
            },
        },
        'bottom-content-container': {
            '& section': {
                // minHeight: "20vh",
                background: 'white',
                margin: '4% 0',
                borderRadius: '10px',
            },
        },
        'bottom-header-container': {
            display: 'flex',
            marginBottom: '5%',

            '& h6:first-child': {
                fontWeight: 'bold',
                flexBasis: '75%',
            },

            '& h6:last-child': {
                color: 'dark-gray',
                flexBasis: '25%',
            },
        },
        'bottom-content-card': {
            padding: '5px',
        },
    };
});

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    title: {
        flexGrow: 1,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
        backgroundColor: 'lightgray',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
}));

const AccountDrawer = (props) => {
    const styleClasses = styles();
    const me = JSON.parse(sessionStorage.getItem('user'));
    const cardClasses = cardStyles();
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [showAll, setShowAll] = useState(false);
    const [myList, setMyList] = useState(me.eventsOwned);
    const update = useSelector((state) => state.update);

    useEffect(() => {
        if (me) {
            axiosWithAuth()({
                url: `${process.env.REACT_APP_BASE_URL}/graphql`,
                method: 'post',
                data: {
                    query: print(GET_AUTHORED_EVENTS),
                    variables: { id: me.id },
                },
            })
                .then((res) => {
                    setMyList(sortList(res.data.data.getAuthoredEvents));
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }
        // eslint-disable-next-line
    }, [update]);

    const [modalIsOpen, setModelIsOpen] = useState(false);

    const ReffedModalContent = React.forwardRef((props, ref) => (
        <UserEditModalContent {...props} ref={ref} />
    ));

    const toggleModalOpen = (e) => {
        setModelIsOpen(!modalIsOpen);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const sortList = (list) => {
        return list.sort((a, b) => a.startTime - b.startTime);
    };

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const startEditAvatar = () => {
        //Todo
    };

    const logout = async (e) => {
        e.preventDefault();

        try {
            const idToken = ls.get('id_token');
            const url = `https://dev-599411.okta.com/oauth2/default/v1/logout`;

            const body = {
                id_token_hint: idToken,
                post_logout_redirect_uri:
                    process.env.REACT_APP_FRONT_END_BASE_URL,
            };

            localStorage.clear();
            sessionStorage.clear();

            window.location.replace(`${url}?${qs.stringify(body)}`);
        } catch (err) {
            console.dir(err);
        }
    };

    return (
        <div className={classes.root}>
            <Modal open={modalIsOpen} onClose={toggleModalOpen}>
                <ReffedModalContent toggleOpen={toggleModalOpen} />
            </Modal>

            <Avatar
                onClick={handleDrawerOpen}
                className={`${cardClasses.avatar} 
        ${clsx(open && classes.hide)}`}
                style={{
                    border: '2px solid rgba(88, 212, 115, 0.3)',
                    cursor: 'pointer',
                    alignSelf: 'center',
                    display: 'flex',
                    alignItems: 'center',
                }}
                alt="Picture User Avatar"
                src={me.photo !== 'null' ? me.photo : null}
            >
                {me.photo === 'null' && (
                    <Typography>{makeInitials(me)}</Typography>
                )}
            </Avatar>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            ></main>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <section className={styleClasses.container}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: '100%',
                        }}
                    >
                        <Button
                            className={`${styleClasses.root} ${styleClasses.notActive}`}
                            onClick={logout}
                        >
                            <span style={{ marginRight: '5px' }}>
                                <Icon height="20" icon={logoutIcon} />
                            </span>
                            <Typography variant="caption">Logout</Typography>
                        </Button>
                        <Button
                            className={`${styleClasses.root} ${styleClasses.notActive}`}
                            onClick={handleDrawerClose}
                        >
                            <span style={{ marginRight: '5px' }}>
                                <Icon height="20" icon={closeRectangle} />
                            </span>
                            <Typography variant="caption">Close</Typography>
                        </Button>
                    </div>

                    <div className={styleClasses['avatar-container']}>
                        <Avatar
                            onClick={startEditAvatar}
                            aria-label="avatar"
                            className={styleClasses.avatar}
                            src={me.photo !== 'null' ? me.photo : null}
                            alt="Profile Avatar"
                        >
                            {me.photo === 'null' && (
                                <Typography>{makeInitials(me)}</Typography>
                            )}
                        </Avatar>
                        <Typography variant="h5">
                            {me.firstName} {me.lastName}
                        </Typography>
                    </div>
                    <div className={styleClasses['middle-content-container']}>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Typography variant="h6">Details</Typography>
                            <Button onClick={toggleModalOpen}>
                                Edit Profile
                            </Button>
                        </div>
                        <Typography>Address: {me.address} </Typography>
                    </div>
                    <div>
                        <div
                            className={styleClasses['bottom-header-container']}
                        >
                            <Typography variant="h6">My Events</Typography>

                            <Button onClick={toggleShowAll}>
                                {showAll ? 'Show less' : 'Show all'}
                            </Button>
                        </div>
                        {myList ? (
                            sortList(myList).map(
                                (event, ind) =>
                                    (showAll || ind < 3) && (
                                        <AccountEventCard
                                            event={event}
                                            key={ind}
                                        />
                                    )
                            )
                        ) : (
                            <Typography>No created events</Typography>
                        )}
                    </div>
                </section>
            </Drawer>
        </div>
    );
};

export default AccountDrawer;
