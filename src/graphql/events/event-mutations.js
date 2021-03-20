import gql from 'graphql-tag';

export const CREATE_EVENT = gql`
  mutation inputEvent($input: EventInput!) {
    inputEvent(input: $input) {
      id
    }
  }
`;

export const UPDATE_EVENT_STATUS = gql`
  mutation inputEventStatus($eventStatus: EventStatusInput!) {
    inputEventStatus(eventStatus: $eventStatus) {
      id
    }
  }
`;

export const INVITE_USER = gql`
  mutation inviteUserToEvent($inviteInput: EventInviteInput!) {
    inputEventInvite(inviteInput: $inviteInput)
  }
`;

export const REMOVE_INVITATION = gql`
  mutation removeEventInvite($inviteInput: EventInviteInput!) {
    removeEventInvite(inviteInput: $inviteInput)
  }
`;

export const ADD_COMMENT = gql`
  mutation inputComment($comment: CommentInput!) {
    inputComment(comment: $comment) {
      id
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
