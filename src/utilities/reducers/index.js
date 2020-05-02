import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, INCREMENT } from "../actions";

const initialState = {
  loginCredentials: {},
  counter: 0,
  addedEvents: [
    {
      date: "05/06/2020",
      time: "5:30pm",
      title: "Mendez BBQ",
      status: "going",
    },
    {
      date: "05/12/2020",
      time: "11:30am",
      title: "Picnic with kids",
      status: "maybe",
    },
  ],
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
    default:
      return {
        ...state,
        //do nothing
      };
  }
};
