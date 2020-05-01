import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  INCREMENT,
  CHANGE_PAGE,
} from "../actions";

const initialState = {
  loginCredentials: {},
  counter: 0,
  page: 1,
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

    case CHANGE_PAGE:
      return {
        ...state,
        page: state.page === 1 ? 2 : 1,
      };
    default:
      return {
        ...state,
        //do nothing
      };
  }
};
