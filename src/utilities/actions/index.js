import axios from "axios";
import { ALL_EVENTS } from "../../graphql/events/event-queries";

export const MAKEACTIVE = "MAKEACTIVE";
export const CHANGE_MONTH = "CHANGE_MONTH";
export const RSVP = "RSVP";
export const CHANGE_PAGE = "CHANGE_PAGE";
export const GET_EVENTS_START = "GET_EVENTS";
export const GET_EVENTS_SUCCESS = "GET_EVENTS_SUCCESS";

// export const getEvents = () => (dispatch) => {
//   // dispatch({ type: GET_EVENTS_START });
//   axios({
//     url: "http://localhost:5100/graphql",
//     method: "post",
//     data: {
//       query: `
//         query getAllEvents {
//         getAllEvents {
//           id
//           Date
//           Start_Time
//           End_Time
//           Title
//           Description
//           category_id
//           user_id
//           Address
//           Latitude
//           Longitude
//         }
//       }`,
//     },
//   })
//     .then((res) => {
//       console.log(res);
//       dispatch({
//         type: GET_EVENTS_SUCCESS,
//         payload: res.data.data.getAllEvents,
//       });
//     })
//     .catch((err) => {
//       console.log(err.message);
//       // dispatch({ type: GET_EVENTS_FAIL, payload: err.message });
//     });

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
