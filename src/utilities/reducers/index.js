import {
  MAKEACTIVE,
  CHANGE_MONTH,
  CHANGE_PAGE,
  CHANGE_NEIGHB_NAME,
  GET_EVENTS_SUCCESS,
  UPDATE_STATE,
  CREATE_EVENT_SUCCESS,
  ALL_USERS_SUCCESS,
  INVITE_USER_SUCCESS,
  FILTER_USERS_SUCCESS,
  DELETE_INVITATION_SUCCESS,
  RESET_INVITE_SUCCESS,
  START_EVENT_EDIT,
  CANCEL_EDIT,
  UPDATE_EVENT_SUCCESS,
} from "../actions";

const initialDate = new Date();

const initialState = {
  loginCredentials: {},
  page: 1,
  activeCalendarEvent: null,
  selectedMonth: initialDate,
  neighborhoodName: "My Neighborhood",
  errors: [],
  isGettingEvents: false,
  update: false,
  eventList: [],
  newEvent: {},
  userList: [],
  inviteList: [],
  isEditing: false,
  eventToEdit: {},

  //test user data
  myUser: {
    id: 1,
  },
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_EVENTS_SUCCESS:
      return {
        ...state,
        isGettingEvents: false,
        errors: [],
        eventList: payload,
      };
    case MAKEACTIVE:
      return {
        ...state,
        activeCalendarEvent: payload,
      };
    case CHANGE_MONTH:
      const tempDate = new Date(state.selectedMonth);
      const month = tempDate.getMonth();
      const year = tempDate.getUTCFullYear();
      if (payload === "previous") {
        tempDate.setMonth(month === 0 ? 11 : month - 1);
        if (month === 0) tempDate.setFullYear(year - 1);
      } else {
        tempDate.setMonth(month === 11 ? 0 : month + 1);
        if (month === 11) tempDate.setFullYear(year + 1);
      }
      return {
        ...state,
        selectedMonth: tempDate,
      };
    case UPDATE_STATE:
      return {
        ...state,
        update: !state.update,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        page: state.page === 1 ? 2 : 1,
      };
    case CHANGE_NEIGHB_NAME:
      return {
        ...state,
        neighborhoodName: payload,
      };
    case CREATE_EVENT_SUCCESS:
      return {
        ...state,
        newEvent: payload,
        inviteList: payload.users,
      };
    case ALL_USERS_SUCCESS:
      return {
        ...state,
        userList: payload,
      };
    case INVITE_USER_SUCCESS:
      return {
        ...state,
        inviteList: payload,
      };
    case DELETE_INVITATION_SUCCESS:
      return {
        ...state,
        inviteList: payload,
      };
    case FILTER_USERS_SUCCESS:
      return {
        ...state,
        userList: payload,
      };
    case RESET_INVITE_SUCCESS:
      return {
        ...state,
        inviteList: payload,
      };
    case START_EVENT_EDIT:
      return {
        ...state,
        isEditing: true,
        eventToEdit: payload,
      };
    case CANCEL_EDIT:
      return {
        ...state,
        isEditing: false,
        eventToEdit: {},
      };
    case UPDATE_EVENT_SUCCESS:
      return {
        ...state,
        isEditing: false,
        eventToEdit: {},
        newEvent: payload,
        inviteList: payload.users,
      };
    default:
      return {
        ...state,
        //do nothing
      };
  }
};
