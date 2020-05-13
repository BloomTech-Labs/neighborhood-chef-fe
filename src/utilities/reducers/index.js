import {
  MAKEACTIVE,
  CHANGE_MONTH,
  CHANGE_PAGE,
  CHANGE_NEIGHB_NAME,
  GET_EVENTS_SUCCESS,
  UPDATE_STATE,
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
    default:
      return {
        ...state,
        //do nothing
      };
  }
};
