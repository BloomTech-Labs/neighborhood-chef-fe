import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  INCREMENT,
  MAKEACTIVE,
} from "../actions";

const initialState = {
  loginCredentials: {},
  counter: 0,

  //test data below.
  eventList: [
    {
      id: 0,
      date: "05/06/2020",
      time: "5:30pm",
      title: "Mendez BBQ",
      status: "Going",
    },
    {
      id: 1,
      date: "05/12/2020",
      time: "11:30am",
      title: "Picnic with kids",
      status: "Maybe",
    },
    {
      id: 2,
      date: "05/29/2020",
      time: "7:00pm",
      title: "Asian cuisine night",
      status: "Not Going",
    },
  ],
  activeCalendarEvent: null,
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_START:
      return {
        ...state,
        //do something
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        //do something
      };
    case LOGIN_FAIL:
      return {
        ...state,
        //do something
      };

    //works with redux example from App.js
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case MAKEACTIVE:
      return {
        ...state,
        activeCalendarEvent: payload,
      };
    default:
      return {
        ...state,
        //do nothing
      };
  }
};
