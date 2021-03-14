import gql from 'graphql-tag';

const getBYEmailEventString = `
id
startTime
endTime
createDateTime
title
description
category
address
latitude
longitude
modifiers
hashtags
status
User {
    id
    firstName
    lastName
}
EventUsers {
    attending {
        id
        email
        firstName
        lastName
        address
        longitude
        latitude
        status
    }
    invited {
        id
        email
        firstName
        lastName
        address
        longitude
        latitude
        status
    }
}`;

export const ALL_USERS = gql`
    query getAllUsers {
        getAllUsers {
            id
            email
            firstName
            lastName
            gender
            address
            latitude
            longitude
            photo
            eventsOwned {
                id
                title
                description
                startTime
                endTime
                photo
                createDateTime
                address
                latitude
                longitude
                hashtags
                modifiers
                user_id
                users {
                    id
                    email
                    firstName
                    lastName
                    address
                    longitude
                    latitude
                    status
                    photo
                }
            }
        }
    }
`;

export const USER_WITHIN_RADIUS = gql`
    query getUserWithinRadius($queryParams: UserInput!) {
        Users(queryParams: $queryParams) {
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

export const USER_BY_ID = gql`
    query getUserById($id: ID!) {
        getUserById(id: $id) {
            id
            email
            firstName
            lastName
            gender
            address
            latitude
            longitude
            photo
            eventsOwned {
                id
                startTime
                endTime
                createDateTime
                title
                photo
                description
                category_id
                user_id
                address
                latitude
                longitude
                modifiers
                hashtags
                users {
                    id
                    email
                    firstName
                    lastName
                    address
                    longitude
                    latitude
                    status
                    photo
                }
            }
        }
    }
`;

export const USER_BY_EMAIL = gql`
    query getUserByEmail($queryParams: UserInput!, $mileRadius: Int!) {
        Users(queryParams: $queryParams) {
            id
            email
            firstName
            lastName
            gender
            address
            latitude
            longitude
            UserEvents {
                attending {
                    ${getBYEmailEventString}
                }
                invited {
                    ${getBYEmailEventString}
                }
                favorited 
                owned {
                    ${getBYEmailEventString}
                }
                local(mileRadius: $mileRadius) {
                    ${getBYEmailEventString}
                }
            }
    }
}
`;

export const RECENT_EVENTS = gql`
    query recentEvents($queryParams: UserInput!) {
        Users(queryParams: $queryParams) {
            id
            UserEvents {
                attending {
                    User {
                        id
                        firstName
                        lastName
                        status
                    }
                    ${getBYEmailEventString}
                }
                invited {
                    User {
                        id
                        firstName
                        lastName
                        status
                    }
                    ${getBYEmailEventString}
                }
                favorited {
                    id
                }
                owned {
                    User {
                        id
                        firstName
                        lastName
                        status
                    }
                    ${getBYEmailEventString}
                }
            }
    }
}
`;

export const GET_AUTHORED_EVENTS = gql`
    query getAuthoredEvents($queryParams: UserInput!) {
        Users(queryParams: $queryParams) {
            id
            firstName
            UserEvents {
                owned {
                    ${getBYEmailEventString} 
                }
            }
        }
    }
`;

export const GET_INVITED_EVENTS = gql`
    query getInvitedEvents($id: ID!) {
        getInvitedEvents(id: $id) {
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

export const GET_ATTENDING_EVENTS = gql`
    query getAttendingEvents($id: ID!) {
        getAttendingEvents(id: $id) {
            id
            startTime
            endTime
            createDateTime
            title
            description
            category_id
            user_id
            address
            photo
            latitude
            longitude
            modifiers
            hashtags
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

export const GET_UNINVITED_USERS = gql`
    query getUninvitedUsers($id: ID!) {
        getUninvitedUsers(id: $id) {
            id
            firstName
            lastName
            email
            status
            photo
        }
    }
`;

export const GET_FAVORITE_EVENTS = gql`
    query getFavoriteEvents($id: ID!) {
        getFavoriteEvents(id: $id) {
            id
            startTime
            endTime
            title
            description
            category_id
            user_id
            address
            photo
            latitude
            longitude
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
