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
    SINGLE_EVENT_FETCH_SUCCESS,
    UPDATE_STATUS,
    GET_FAVORITE_EVENTS_SUCCESS,
    ADD_FAVORITE_EVENT_SUCCESS,
    REMOVE_FAVORITE_EVENT_SUCCESS,
    SET_PAGE,
    SAVE_USER_UPDATE_INFO,
    SAVE_USER,
    ADD_LOGGED_IN_USER_INFO,
} from '../actions';

const initialDate = new Date();

const initialState = {
    user: {},
    loginCredentials: {},
    page: 1,
    activeEvent: null,
    selectedMonth: initialDate.setDate(15),
    neighborhoodName: 'My Neighborhood',
    errors: [],
    isGettingEvents: false,
    update: false,
    eventList: [],
    newEvent: {},
    userList: [],
    inviteList: [],
    isEditing: false,
    eventToEdit: {},
    currentEvent: {},
    favoriteEvents: [],
    savedUserUpdateInfo: {},
};

export const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_LOGGED_IN_USER_INFO:
            console.log(payload);
            return { ...state, user: payload };
        case SAVE_USER:
            return {
                ...state,
                user: payload,
            };
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
                activeEvent: payload,
            };
        case CHANGE_MONTH:
            const tempDate = new Date(state.selectedMonth);
            const month = tempDate.getMonth();
            const year = tempDate.getUTCFullYear();
            if (payload === 'previous') {
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
        case UPDATE_STATUS:
            const newListWithChange = state.eventList.map((ele) => {
                if (`${ele.id}` === `${payload.eventId}`)
                    ele.status = payload.newStatus;
                return ele;
            });
            return {
                ...state,
                eventList: newListWithChange,
            };
        case CHANGE_PAGE:
            return {
                ...state,
                page: payload,
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
        case SINGLE_EVENT_FETCH_SUCCESS:
            return {
                ...state,
                currentEvent: payload,
            };
        case GET_FAVORITE_EVENTS_SUCCESS:
            return {
                ...state,
                favoriteEvents: payload,
            };
        case ADD_FAVORITE_EVENT_SUCCESS:
            return {
                ...state,
                favoriteEvents: payload,
            };
        case REMOVE_FAVORITE_EVENT_SUCCESS:
            return {
                ...state,
                favoriteEvents: payload,
            };
        case SET_PAGE:
            return {
                ...state,
                page: payload,
            };

        case SAVE_USER_UPDATE_INFO:
            const userInfo = JSON.parse(sessionStorage.getItem('user'));

            const formattedUserinfo = {
                firstName: userInfo.firstName,
                lastName: userInfo.lastName,
                latitude: userInfo.latitude,
                longitude: userInfo.longitude,
                gender: userInfo.gender,
            };

            // console.log(Object.values(payload));
            // console.log(formattedUserinfo);

            const compareInputToCurrentUserData = Object.values(
                formattedUserinfo
            ).filter((attribute) => {
                return Object.values(payload).includes(attribute);
            });
            // console.log("here1", compareInputToCurrentUserData);
            if (
                Object.values(state.savedUserUpdateInfo).length === 0 ||
                compareInputToCurrentUserData.length <
                    Object.values(formattedUserinfo).length + 1
            ) {
                // console.log("here");
                return {
                    ...state,
                    savedUserUpdateInfo: {
                        ...state.savedUserUpdateInfo,
                        ...payload,
                    },
                };
            } else {
                return state;
            }

        default:
            return {
                ...state,
                //do nothing
            };
    }
};
