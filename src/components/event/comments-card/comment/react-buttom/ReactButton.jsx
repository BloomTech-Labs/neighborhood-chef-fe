import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { buttonStyles } from '../../../../../styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

//icon imports
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';

import { Icon } from '@iconify/react';
import bxLaugh from '@iconify/icons-bx/bx-laugh';
import bxSad from '@iconify/icons-bx/bx-sad';
import bxAngry from '@iconify/icons-bx/bx-angry';
import bxHappy from '@iconify/icons-bx/bx-happy';

const ReactButton = ({ name, toggleEmoji }) => {
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
            <Button onClick={handleClickOpen}>React</Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {`React to ${name}'s comment`}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText
                        id="alert-dialog-description"
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <IconButton
                            onClick={() => {
                                toggleEmoji('heart');
                                handleClose();
                            }}
                        >
                            <FavoriteBorderOutlinedIcon fontSize="large" />
                        </IconButton>
                        <IconButton
                            onClick={() => {
                                toggleEmoji('thumbsUp');
                                handleClose();
                            }}
                        >
                            <ThumbUpOutlinedIcon fontSize="large" />
                        </IconButton>
                        <IconButton
                            onClick={() => {
                                toggleEmoji('thumbsDown');
                                handleClose();
                            }}
                        >
                            <ThumbDownOutlinedIcon fontSize="large" />
                        </IconButton>
                        <IconButton
                            onClick={() => {
                                toggleEmoji('Happy');
                                handleClose();
                            }}
                        >
                            <Icon icon={bxHappy} height="1.5em" />
                        </IconButton>
                        <IconButton
                            onClick={() => {
                                toggleEmoji('Laugh');
                                handleClose();
                            }}
                        >
                            <Icon icon={bxLaugh} height="1.5em" />
                        </IconButton>
                        <IconButton
                            onClick={() => {
                                toggleEmoji('Sad');
                                handleClose();
                            }}
                        >
                            <Icon icon={bxSad} height="1.5em" />
                        </IconButton>
                        <IconButton
                            onClick={() => {
                                toggleEmoji('Angry');
                                handleClose();
                            }}
                        >
                            <Icon icon={bxAngry} height="1.5em" />
                        </IconButton>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        className={`${classes.root} ${classes.warn}`}
                        onClick={handleClose}
                    >
                        <Typography>Cancel</Typography>
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default ReactButton;
