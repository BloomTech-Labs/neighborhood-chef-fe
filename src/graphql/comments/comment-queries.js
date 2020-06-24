import gql from "graphql-tag";

export const ALL_EVENT_COMMENTS = gql`
  query getEventComments($id: ID!) {
    getEventComments(id: $id) {
      id
      event_id
      user_id
      parent_id
      root_id
      dateCreated
      description
      user {
        id
        firstName
        lastName
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($input: NewCommentInput!) {
    addComment(input: $input) {
      id
      event_id
      user_id
      parent_id
      root_id
      dateCreated
      description
      user {
        id
        email
        firstName
        lastName
        photo
      }
    }
  }
`;

export const UPDATE_COMMENT = gql`
  mutation updateComment($id: ID!, $input: UpdateCommentInput!) {
    updateComment(id: $id, input: $input) {
      id
      event_id
      user_id
      parent_id
      root_id
      dateCreated
      description
      user {
        id
        email
        firstName
        lastName
        photo
      }
    }
  }
`;

export const REMOVE_COMMENT = gql`
  mutation removeComment($id: ID!) {
    removeComment(id: $id) {
      id
      event_id
      user_id
      parent_id
      root_id
      dateCreated
      description
      user {
        id
        email
        firstName
        lastName
        photo
      }
    }
  }
`;
