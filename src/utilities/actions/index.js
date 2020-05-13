export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const INCREMENT = "INCREMENT";
export const MAKEACTIVE = "MAKEACTIVE";
export const CHANGE_MONTH = "CHANGE_MONTH";
export const RSVP = "RSVP";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const CREATE_EVENT_SUCCESS = "CREATE_EVENT_SUCCESS";
export const ALL_USERS_SUCCESS = "ALL_USERS_SUCCESS";
export const INVITE_USER_SUCCESS = "INVITE_USER_SUCCESS";
export const FILTER_USERS_SUCCESS = "FILTER_USERS_SUCCESS";
export const DELETE_INVITATION_SUCCESS = "DELETE_INVITATION_SUCCESS";
export const RESET_INVITE_SUCCESS = "RESET_INVITE_SUCCESS";

export const makeActive = (id) => ({
  type: MAKEACTIVE,
  payload: id,
});

export const setMonth = (type) => ({
  type: CHANGE_MONTH,
  payload: type,
});

export const rsvp = (event, id) => {
  event.preventDefault();
  return {
    type: RSVP,
    payload: {
      name: event.target.innerHTML,
      id: id,
    },
  };
};

export const changePage = () => ({
  type: CHANGE_PAGE,
});

export const createEventSuccess = (event) => ({
  type: CREATE_EVENT_SUCCESS,
  payload: event,
});

export const searchForUsersSuccess = (users) => ({
  type: ALL_USERS_SUCCESS,
  payload: users,
});

export const filterUserListSuccess = (users) => ({
  type: FILTER_USERS_SUCCESS,
  payload: users,
});

export const inviteUserSuccess = (invite) => ({
  type: INVITE_USER_SUCCESS,
  payload: invite,
});

export const deleteInvitationSuccess = (invite) => ({
  type: DELETE_INVITATION_SUCCESS,
  payload: invite,
});

export const resetInviteSuccess = (invite) => ({
  type: RESET_INVITE_SUCCESS,
  payload: invite,
});
