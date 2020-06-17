// import { ADD_EVENT_INGREDIENTS } from "../../graphql/events/event-mutations";

export const MAKEACTIVE = "MAKEACTIVE";
export const CHANGE_MONTH = "CHANGE_MONTH";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const CHANGE_NEIGHB_NAME = "CHANGE_NEIGHB_NAME";
export const GET_EVENTS_SUCCESS = "GET_EVENTS_SUCCESS";
export const UPDATE_STATE = "UPDATE_STATE";
export const CREATE_EVENT_SUCCESS = "CREATE_EVENT_SUCCESS";
export const ALL_USERS_SUCCESS = "ALL_USERS_SUCCESS";
export const INVITE_USER_SUCCESS = "INVITE_USER_SUCCESS";
export const FILTER_USERS_SUCCESS = "FILTER_USERS_SUCCESS";
export const DELETE_INVITATION_SUCCESS = "DELETE_INVITATION_SUCCESS";
export const RESET_INVITE_SUCCESS = "RESET_INVITE_SUCCESS";
export const START_EVENT_EDIT = "START_EVENT_EDIT";
export const CANCEL_EDIT = "CANCEL_EDIT";
export const UPDATE_EVENT_SUCCESS = "UPDATE_EVENT_SUCCESS";
export const SINGLE_EVENT_FETCH_SUCCESS = "SINGLE_EVENT_FETCH_SUCCESS";
export const UPDATE_STATUS = "UPDATE_STATUS";
export const GET_FAVORITE_EVENTS_SUCCESS = "GET_FAVORITE_EVENTS";
export const ADD_FAVORITE_EVENT_SUCCESS = "ADD_FAVORITE_EVENT_SUCCESS";
export const REMOVE_FAVORITE_EVENT_SUCCESS = "REMOVE_FAVORITE_EVENT_SUCCESS";
export const SET_PAGE = "SET_PAGE";
export const SET_CURRENT_INGREIDENTS = "SET_CURRENT_INGREIDENTS"; 

export const getEventsSuccess = (events) => ({
  type: GET_EVENTS_SUCCESS,
  payload: events,
});
export const makeActive = (id) => ({
  type: MAKEACTIVE,
  payload: id,
});

export const setMonth = (type) => ({
  type: CHANGE_MONTH,
  payload: type,
});

export const forceUpdate = () => ({
  type: UPDATE_STATE,
});

export const changeStatus = (eventId, newStatus) => ({
  type: UPDATE_STATUS,
  payload: {
    eventId: eventId,
    newStatus: newStatus,
  },
});

export const changePage = (page) => ({
  type: CHANGE_PAGE,
  payload: page,
});

export const changeNeighborhoodName = (newName) => ({
  type: CHANGE_NEIGHB_NAME,
  payload: newName,
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

export const startEventEdit = (event) => ({
  type: START_EVENT_EDIT,
  payload: event,
});

export const cancelEdit = () => ({
  type: CANCEL_EDIT,
});

export const updateEventSuccess = (event) => ({
  type: UPDATE_EVENT_SUCCESS,
  payload: event,
});

export const getSingleEvent = (event) => ({
  type: SINGLE_EVENT_FETCH_SUCCESS,
  payload: event,
});

export const getFavoriteEventsSuccess = (events) => ({
  type: GET_FAVORITE_EVENTS_SUCCESS,
  payload: events,
});

export const addFavoriteEventSuccess = (events) => ({
  type: ADD_FAVORITE_EVENT_SUCCESS,
  payload: events,
});

export const removeFavoriteEventSuccess = (events) => ({
  type: REMOVE_FAVORITE_EVENT_SUCCESS,
  payload: events,
});

export const setPage = (page) => ({
  type: SET_PAGE,
  payload: page,
});

export const setCurrentIngredients = ingredients => ({
  type: SET_CURRENT_INGREIDENTS,
  payload: ingredients
});


