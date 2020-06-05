import React, { useState, useRef, useEffect } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from "react-router-dom";
import { print } from "graphql";
import { useDispatch, useSelector } from "react-redux";

import { modalStyles } from "../../styles";
import { axiosWithAuth } from "../../utilities/axiosWithAuth";
import WarnRemoveModal from "./WarnRemoveModal";
import { isEventFavorite } from "../../utilities/functions";

// graphql imports
import { REMOVE_INVITATION } from "../../graphql/events/event-mutations";
import {
  ADD_FAVORITE_EVENT,
  REMOVE_FAVORITE_EVENT,
} from "../../graphql/users/user-mutations";

// action imports
import {
  deleteInvitationSuccess,
  forceUpdate,
  addFavoriteEventSuccess,
  removeFavoriteEventSuccess,
} from "../../utilities/actions";

const EventButtonModal = ({ eventId, userId }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const modalClasses = modalStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const favoriteEvents = useSelector((state) => state.favoriteEvents);
  const isFavorite = isEventFavorite(favoriteEvents, eventId);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  };

  const removeInvitation = () => {
    const removeInvite = {
      event_id: Number(eventId),
      user_id: Number(userId),
    };

    axiosWithAuth()
      .post(`${process.env.REACT_APP_BASE_URL}/graphql`, {
        query: print(REMOVE_INVITATION),
        variables: { input: removeInvite },
      })
      .then((res) => {
        dispatch(deleteInvitationSuccess(res.data.data.removeInvitation.users));
        dispatch(forceUpdate());
      })
      .catch((err) => console.log(err));
  };

  const addFavoriteEvent = () => {
    const addFavorite = {
      event_id: Number(eventId),
      user_id: Number(userId),
    };

    axiosWithAuth()
      .post(`${process.env.REACT_APP_BASE_URL}/graphql`, {
        query: print(ADD_FAVORITE_EVENT),
        variables: { input: addFavorite },
      })
      .then((res) => {
        dispatch(addFavoriteEventSuccess(res.data.data.addFavoriteEvent));
      })
      .catch((err) => console.log(err));
  };

  const removeFavoriteEvent = () => {
    const removeFavorite = {
      event_id: Number(eventId),
      user_id: Number(userId),
    };

    axiosWithAuth()
      .post(`${process.env.REACT_APP_BASE_URL}/graphql`, {
        query: print(REMOVE_FAVORITE_EVENT),
        variables: { input: removeFavorite },
      })
      .then((res) => {
        dispatch(removeFavoriteEventSuccess(res.data.data.removeFavoriteEvent));
      })
      .catch((err) => console.log(err));
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <>
      <div className={modalClasses.root}>
        <div>
          <IconButton
            ref={anchorRef}
            aria-controls={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <MoreVertIcon />
          </IconButton>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem
                        onClick={() => history.push(`/events/${eventId}`)}
                      >
                        Open Event
                      </MenuItem>
                      <MenuItem>
                        <WarnRemoveModal removeInvitation={removeInvitation} />
                      </MenuItem>
                      {!isFavorite ? (
                        <MenuItem onClick={() => addFavoriteEvent()}>
                          Add To Favorite List
                        </MenuItem>
                      ) : (
                        <MenuItem onClick={() => removeFavoriteEvent()}>
                          Remove From Favorite List
                        </MenuItem>
                      )}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    </>
  );
};
export default EventButtonModal;
