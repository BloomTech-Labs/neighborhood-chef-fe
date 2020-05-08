import gql from "graphql-tag";

export const ALL_EVENTS = gql`
  query getAllEvents {
    getAllEvents {
      id
      date
      startTime
      endTime
      title
      description
      category_id
      user_id
      address
      latitude
      longitude
      hashtags
      modifiers
      users {
        id
        email
        firstName
        lastName
        longitude
        latitude
        status
        address
        gender
      }
    }
  }
`;

export const EVENT_BY_ID = gql`
  query getEventById($id: ID!) {
    getEventById(id: $id) {
      id
      date
      startTime
    	endTime
      title
      description
      category_id
      user_id
      address
      latitude
      longitude
      modifiers
			hashtags
      users {
        id
        email
        firstName
        lastName
        longitude
        latitude
        status
        address
        gender
      }
    }
  }
`;
