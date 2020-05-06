export const MAKEACTIVE = "MAKEACTIVE";
export const CHANGE_MONTH = "CHANGE_MONTH";
export const RSVP = "RSVP";
export const CHANGE_PAGE = "CHANGE_PAGE";

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
