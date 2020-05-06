import gql from "graphql-tag";

export const ADD_CATEGORY = gql`
  mutation addCategory($input: NewCategoryInput!) {
    addCategory(input: $input) {
      id
      Category
    }
  }
`;