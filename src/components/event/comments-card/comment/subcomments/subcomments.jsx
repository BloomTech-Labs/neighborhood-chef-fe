import React from 'react';
import SubComment from './subcomment/subcomment';

export default function SubComments({
    subcomments,
    eventId,
    setSubComments,
    userId,
}) {
    return (
        <div>
            {subcomments &&
                subcomments.map((comment) => (
                    <SubComment
                        key={comment.id}
                        id={comment.id}
                        subcomment={comment.comment}
                        parent={comment.Parent}
                        commentOwner={comment.User}
                        dateCreated={comment.dateCreated}
                        root={comment.root_id}
                        eventId={eventId}
                        Reactions={comment.Reactions}
                        setSubComments={setSubComments}
                        User={comment.User}
                    />
                ))}
        </div>
    );
}
