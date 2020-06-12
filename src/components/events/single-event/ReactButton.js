import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { buttonStyles } from "../../../styles";
import Button from "@material-ui/core/Button";

//icon imports
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";

import { Icon, InlineIcon } from "@iconify/react";
import bxLaugh from "@iconify/icons-bx/bx-laugh";
import bxSad from "@iconify/icons-bx/bx-sad";
import bxAngry from "@iconify/icons-bx/bx-angry";
import bxHappy from "@iconify/icons-bx/bx-happy";

const ReactButton = ({ name, addReaction }) => {
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
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <FavoriteBorderOutlinedIcon fontSize="large" />
            <ThumbUpOutlinedIcon fontSize="large" />
            <ThumbDownOutlinedIcon fontSize="large" />
            <Icon icon={bxHappy} height="1.5em" />
            <Icon icon={bxLaugh} height="1.5em" />
            <Icon icon={bxSad} height="1.5em" />
            <Icon icon={bxAngry} height="1.5em" />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <span
            className={`${classes.root} ${classes.warn}`}
            style={{ cursor: "pointer" }}
            onClick={handleClose}
          >
            Cancel
          </span>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default ReactButton;
