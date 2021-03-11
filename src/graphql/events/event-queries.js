import gql from 'graphql-tag';

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
    query Events($queryParams: EventInput) {
        Events(queryParams: $queryParams) {
            id
            startTime
            endTime
            createDateTime
            title
            description
            category
            User {
                firstName
                lastName
            }
            address
            latitude
            longitude
            modifiers
            hashtags
            allergenWarnings
            dietaryWarnings
            photo
            EventUsers {
                attending {
                    id
                    email
                    firstName
                    lastName
                    photo
                }
                invited {
                    id
                    email
                    firstName
                    lastName
                    photo
                }
            }
            Comments {
                id
                Parent {
                    firstName
                    lastName
                    photo
                }
                root_id
                dateCreated
                comment
                Reactions {
                    reaction
                }
                User {
                    id
                    firstName
                    lastName
                    photo
                }
                Subcomments {
                    id
                    root_id
                    dateCreated
                    comment
                    Parent {
                        firstName
                        lastName
                        photo
                    }
                    User {
                        id
                        firstName
                        lastName
                        photo
                    }
                }
            }
        }
    }
`;
