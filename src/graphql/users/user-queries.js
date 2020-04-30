import gql from "graphql-tag";

export const ALL_USERS = gql`
  query getAllUsers {
    getAllUsers {
      id
      Email
      FirstName
      LastName
      Gender
      Address
      Latitude
      Longitude
      Events_Owned {
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
      Events_Invited {
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
      Events_Attending {
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
  }
`;

export const USER_BY_ID = gql`
  query getUserById($id: ID!) {
    getUserById(id: $id) {
      id
      Email
      FirstName
      LastName
      Gender
      Address
      Latitude
      Longitude
      Events_Owned {
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
      Events_Invited {
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
      Events_Attending {
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
  }
`;