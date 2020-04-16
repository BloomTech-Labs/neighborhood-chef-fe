import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, INCREMENT } from "../actions";

const initialState = {
  loginCredentials: {},
  counter: 0,
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
