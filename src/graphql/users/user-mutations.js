import gql from 'graphql-tag';

export const UPDATE_USER = gql`
    mutation updateUser($id: ID!, $input: UpdateUserInput!) {
        updateUser(id: $id, input: $input) {
            id
            email
            firstName
            lastName
            gender
            address
            latitude
            longitude
            photo
        }
    }
`;

export const ADD_FAVORITE_EVENT = gql`
    mutation favoriteEventInput($favoriteEvent: FavoriteEventInput!) {
        favoriteEventInput(favoriteEvent: $favoriteEvent) {
            id
        }
    }
`;

export const REMOVE_FAVORITE_EVENT = gql`
    mutation removeFavoriteEvent($favoriteEvent: FavoriteEventInput!) {
        removeFavoriteEvent(favoriteEvent: $favoriteEvent) {
            id
        }
    }
`;
