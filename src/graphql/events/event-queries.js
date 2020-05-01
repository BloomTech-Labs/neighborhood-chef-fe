import gql from "graphql-tag";

export const ALL_EVENTS = gql`
  query getAllEvents {
    getAllEvents {
      id
      Date
      Start_Time
      End_Time
      Title
      Description
      category_id
      user_id
      Address
      Latitude
      Longitude
    }
  }
`;

export const EVENT_BY_ID = gql`
  query getEventById($id: ID!) {
    getEventById(id: $id) {
      id
      Date
      Start_Time
      End_Time
      Title
      Description
      category_id
      user_id
      Address
      Latitude
      Longitude
    }
  }
`;

export const AUTHORED_EVENTS = gql`
  query getAuthoredEvents($id: ID!) {
    getAuthoredEvents(id: $id) {
      id
      Start_Time
      End_Time
      Description
      Title
      Address
      Latitude
      Longitude
      user_id
    }
  }
`;