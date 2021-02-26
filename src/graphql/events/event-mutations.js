import gql from 'graphql-tag';

export const ADD_EVENT = gql`
    mutation addEvent($input: NewEventInput!) {
        addEvent(input: $input) {
            id
            title
            description
            startTime
            endTime
            user_id
            category_id
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
                status
                photo
            }
        }
    }
`;

export const UPDATE_EVENT = gql`
    mutation updateEvent($id: ID!, $input: UpdateEventInput!) {
        updateEvent(id: $id, input: $input) {
            id
            title
            description
            startTime
            endTime
            category_id
            address
            latitude
            longitude
            hashtags
            modifiers
            allergenWarnings
            dietaryWarnings
            user_id
            photo
            users {
                id
                email
                firstName
                lastName
                status
                photo
            }
        }
    }
`;

export const DELETE_EVENT = gql`
    mutation removeEvent($id: ID!) {
        removeEvent(id: $id) {
            id
            title
            description
            startTime
            endTime
            category_id
            address
            latitude
            longitude
            hashtags
            modifiers
            allergenWarnings
            dietaryWarnings
        }
    }
`;

export const INVITE_USER = gql`
    mutation inviteUserToEvent($input: EventInviteInput!) {
        inviteUserToEvent(input: $input) {
            id
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
            allergenWarnings
            dietaryWarnings
            photo
            users {
                id
                email
                firstName
                lastName
                gender
                address
                latitude
                longitude
                status
                photo
            }
        }
    }
`;

export const UPDATE_INVITATION = gql`
    mutation updateInvitation($input: UpdateInviteInput!) {
        updateInvitation(input: $input) {
            id
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
            allergenWarnings
            dietaryWarnings
            photo
            users {
                id
                email
                firstName
                lastName
                gender
                address
                latitude
                longitude
                status
                photo
            }
        }
    }
`;

export const REMOVE_INVITATION = gql`
    mutation removeInvitation($input: RemoveInviteInput!) {
        removeInvitation(input: $input) {
            id
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
            allergenWarnings
            dietaryWarnings
            users {
                id
                email
                firstName
                lastName
                gender
                address
                latitude
                longitude
                status
                photo
            }
        }
    }
`;
