import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { buttonStyles } from '../../../../../../styles';
import { useLocation, useHistory } from 'react-router-dom';

const WarnRemoveModal = ({ isOwner, deleteEvent, removeInvitation }) => {
    const history = useHistory();
    const location = useLocation();
    const thisURL = location.pathname.split('/');
    const classes = buttonStyles();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div onClick={handleClickOpen}>
                {isOwner ? 'Delete Event' : 'Remove Event'}
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {isOwner
                        ? 'Are you sure you want to delete this event?'
                        : 'Are you sure you want to remove this event from your view? '}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {isOwner
                            ? 'You cannot undo this action.'
                            : 'You will not be able to see it unless the original owner of the event invites you again.'}
                    </DialogContentText>
                </DialogContent>
                <DialogActions
                    style={{ display: 'flex', justifyContent: 'flex-end' }}
                >
                    <span
                        className={`${classes.root} ${classes.notActive}`}
                        style={{ cursor: 'pointer' }}
                        onClick={handleClose}
                    >
                        Keep
                    </span>
                    <span
                        className={`${classes.root} ${classes.warn}`}
                        style={{ cursor: 'pointer' }}
                        onClick={() => {
                            isOwner ? deleteEvent() : removeInvitation();
                            handleClose();
                            (thisURL[1] === 'events' ||
                                thisURL[1] === 'view-events') &&
                                history.push('/dashboard');
                        }}
                    >
                        Delete
                    </span>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default WarnRemoveModal;
