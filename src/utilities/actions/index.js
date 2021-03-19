import { axiosWithAuth } from '../axiosWithAuth';
import { print } from 'graphql';
import { UPDATE_EVENT_STATUS } from '../../graphql/events/event-mutations';

export const CHANGE_MONTH = 'CHANGE_MONTH';
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
export const UPDATE_STATE = 'UPDATE_STATE';
export const CREATE_EVENT_SUCCESS = 'CREATE_EVENT_SUCCESS';
export const FILTER_USERS_SUCCESS = 'FILTER_USERS_SUCCESS';
export const DELETE_INVITATION_SUCCESS = 'DELETE_INVITATION_SUCCESS';
export const RESET_INVITE_SUCCESS = 'RESET_INVITE_SUCCESS';
export const UPDATE_EVENT_SUCCESS = 'UPDATE_EVENT_SUCCESS';
export const SAVE_USER = 'SAVE_USER';
export const CHANGE_STATUS_FOR_SINGLE_EVENT = 'CHANGE_STATUS_FOR_SINGLE_EVENT';

export const changeStatusForSingleEvent = (data) => (dispatch) => {
  axiosWithAuth()
    .post(`${process.env.REACT_APP_BASE_URL}/graphql`, {
      query: print(UPDATE_EVENT_STATUS),
      variables: {
        eventStatus: {
          event_id: parseInt(data.eventId),
          user_id: parseInt(data.userId),
          status: data.status,
        },
      },
    })
    .then(() => {
      dispatch({
        type: CHANGE_STATUS_FOR_SINGLE_EVENT,
        payload: { event_id: data.eventId, status: data.status },
      });
    })
    .catch((err) => {
      console.dir(err);
    });
};

export const saveUser = (user) => ({
  type: SAVE_USER,
  payload: user,
});

export const setMonth = (type) => ({
  type: CHANGE_MONTH,
  payload: type,
});

export const forceUpdate = () => ({
  type: UPDATE_STATE,
});

export const createEventSuccess = (event) => ({
  type: CREATE_EVENT_SUCCESS,
  payload: event,
});

export const filterUserListSuccess = (users) => ({
  type: FILTER_USERS_SUCCESS,
  payload: users,
});

export const deleteInvitationSuccess = (invite) => ({
  type: DELETE_INVITATION_SUCCESS,
  payload: invite,
});

export const updateEventSuccess = (event) => ({
  type: UPDATE_EVENT_SUCCESS,
  payload: event,
});
