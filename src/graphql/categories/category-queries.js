import gql from "graphql-tag";

export const ALL_CATEGORIES = gql`
  query getCategories {
    getCategories {
      id
      Category
    }
  }
`;

export const CATEGORY_BY_ID = gql`
  query getCategoryById($id: ID!) {
    getCategoryById(id: $id) {
      Category
      id
    }
  }
`;