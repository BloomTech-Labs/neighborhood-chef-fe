import gql from 'graphql-tag';

export const ALL_EVENT_COMMENTS = gql`
    query getEventComments($id: ID!) {
        getEventComments(id: $id) {
            id
            event_id
            user_id
            parent_id
            root_id
            dateCreated
            comment
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

export const ADD_COMMENT = gql`
    mutation inputComment($comment: CommentInput!) {
        inputComment(comment: $comment) {
            id
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
            comment
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
            comment
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

export const GET_COMMENT_REACTIONS = gql`
    query getCommentReactions($id: ID!) {
        getCommentReactions(id: $id) {
            user_id
            comment_id
            reaction
        }
    }
`;

export const HANDLE_REACTION = gql`
    mutation handleReaction($reaction: ReactionInput!) {
        handleReaction(reaction: $reaction) {
            comment_id
            user_id
            reaction
        }
    }
`;
