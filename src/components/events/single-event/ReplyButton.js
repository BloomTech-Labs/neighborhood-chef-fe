import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { buttonStyles } from "../../../styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const ReplyButton = ({ name, description, addComment }) => {
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
      <Button onClick={handleClickOpen}>Reply</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Reply to {name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {description}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="comment"
            type="text"
            fullWidth
            placeholder="Write comment..."
            style={{ minWidth: "300px" }}
          />
        </DialogContent>
        <DialogActions>
          <span
            className={`${classes.root} ${classes.warn}`}
            style={{ cursor: "pointer" }}
            onClick={handleClose}
          >
            Cancel
          </span>
          <span
            className={`${classes.root} ${classes.notActive}`}
            style={{ cursor: "pointer" }}
            onClick={addComment}
          >
            Submit
          </span>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default ReplyButton;
