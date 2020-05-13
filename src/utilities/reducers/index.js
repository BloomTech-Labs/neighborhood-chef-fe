import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  INCREMENT,
  MAKEACTIVE,
  CHANGE_MONTH,
  RSVP,
  CHANGE_PAGE,
  CREATE_EVENT_SUCCESS,
  ALL_USERS_SUCCESS,
  INVITE_USER_SUCCESS,
  FILTER_USERS_SUCCESS,
  DELETE_INVITATION_SUCCESS,
} from "../actions";

const initialDate = new Date();

const initialState = {
  loginCredentials: {},
  counter: 0,
  page: 1,
  activeCalendarEvent: null,
  selectedMonth: initialDate,
  newEvent: {},
  userList: [],
  inviteList: [],

  //test data below.
  eventList: [
    {
      id: 0,
      date: "05/06/2020",
      start_time: "5:30pm",
      end_time: "6:30pm",
      title: "Mendez BBQ",
      description: "We're having a summer kickoff at Sunnyside park",
      categories: ["bbq"],
      creator: "Justin Thyme",
      address: "132 Winter St, Lewiston, ME, 04240",
      latitude: 44.10621,
      longitude: -70.21818,
      status: "Going",
    },
    {
      id: 1,
      date: "05/12/2020",
      start_time: "11:30am",
      end_time: "1:00pm",
      title: "Picnic in the park",
      description:
        "Yes, I'm Justin's younger brother.  Geez, stop asking.  Let's have a parent get together at the better park, possibly across the nation, Bixby Park",
      categories: ["picnic", "kids play"],
      creator: "Nick O. Thyme",
      address: "130 Cherry Ave, Long Beach, CA 90802",
      latitude: 33.76632,
      longitude: -118.16802,
      status: "Maybe",
    },
    {
      id: 2,
      date: "05/29/2020",
      start_time: "7:00pm",
      end_time: "8:30pm",
      title: "Asian cuisine",
      description:
        "My house, the best asian cooking you'll ever have. Trust me",
      categories: ["multi-course meal"],
      creator: "Robert Brownie Jr",
      address: "5100 Spanish Heights Dr, Las Vegas, NV 89148",
      latitude: 36.09621,
      longitude: -115.286324,
      status: "Not Going",
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
    case RSVP:
      return {
        ...state,
        eventList: state.eventList.map((event) =>
          event.id === payload.id
            ? {
                ...event,
                status: payload.name,
              }
            : event
        ),
      };
    case CHANGE_PAGE:
      return {
        ...state,
        page: state.page === 1 ? 2 : 1,
      };
    case CREATE_EVENT_SUCCESS:
      return {
        ...state,
        newEvent: payload,
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
    default:
      return {
        ...state,
        //do nothing
      };
  }
};
