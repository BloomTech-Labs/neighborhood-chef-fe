import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { buttonStyles } from "../../styles";

const WarnRemoveModal = ({ removeInvitation }) => {
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
      <div onClick={handleClickOpen}>Remove Event</div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to remove this event from your view? "}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You will not be able to see it unless the original owner of the
            event invites you again.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <span
            className={`${classes.root} ${classes.notActive}`}
            style={{ cursor: "pointer" }}
            onClick={handleClose}
          >
            Keep
          </span>
          <span
            className={`${classes.root} ${classes.warn}`}
            style={{ cursor: "pointer" }}
            onClick={removeInvitation}
          >
            Delete
          </span>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default WarnRemoveModal;
