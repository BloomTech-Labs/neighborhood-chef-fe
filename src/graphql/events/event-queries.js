import gql from "graphql-tag";

export const ALL_EVENTS = gql`
  query getAllEvents {
    getAllEvents {
      id
      startTime
      endTime
      createDateTime
      title
      description
      category_id
      user_id
      address
      latitude
      longitude
      hashtags
      modifiers
      allergenWarnings
      dietaryWarnings
      photo
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
        photo
      }
    }
  }
`;

export const EVENT_BY_ID = gql`
  query getEventById($id: ID!) {
    getEventById(id: $id) {
      id
      startTime
      endTime
      createDateTime
      title
      description
      category_id
      user_id
      address
      latitude
      longitude
      modifiers
      hashtags
      allergenWarnings
      dietaryWarnings
      photo
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
        photo
      }
    }
  }
`;

export const GET_EVENT_INGREDIENTS_BY_ID = gql`
query 
getIngredientsByEventId($event_id: Int!) {
  getIngredientsByEventId(event_id: $event_id) {
    id
    event_id
    description
    requested
    user_id
  }
}
` ;