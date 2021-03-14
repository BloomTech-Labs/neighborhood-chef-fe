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
