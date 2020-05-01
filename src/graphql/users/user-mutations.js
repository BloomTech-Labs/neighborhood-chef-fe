import gql from "graphql-tag";

export const ADD_USER = gql`
  mutation addUser($input: NewUserInput!) {
    addUser(input: $input) {
      id
      Email
      Password
      FirstName
      LastName
      Address
      Longitude
      Latitude
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($id: ID!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      Email
      FirstName
      LastName
      Latitude
      Longitude
      Gender
      Address
    }
  }
`;

export const DELETE_USER = gql`
  mutation removeUser($id: ID!) {
    removeUser(id: $id) {
      id
    }
  }
`;