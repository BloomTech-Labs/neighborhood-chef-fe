import gql from "graphql-tag";

export const ADD_EVENT = gql`
  mutation addEvent($input: NewEventInput!) {
    addEvent(input: $input) {
      id
      Date
      Title
      Description
      Start_Time
      End_Time
      user_id
      category_id
      Address
      Latitude
      Longitude
    }
  }
`;

export const UPDATE_EVENT = gql`
  mutation updateEvent($id: ID!, $input: UpdateEventInput!) {
    updateEvent(id: $id, input: $input) {
      id
      Date
      Title
      Description
      Start_Time
      End_Time
      category_id
      Address
      Latitude
      Longitude
    }
  }
`;

export const DELETE_EVENT = gql`
  mutation removeEvent($id: ID!) {
    removeEvent(id: $id) {
      id
    }
  }
`;
