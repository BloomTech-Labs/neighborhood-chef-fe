import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { HANDLE_REACTION } from '../../../../../../graphql/comments/comment-queries';
import { print } from 'graphql';
import { axiosWithAuth } from '../../../../../../utilities/axiosWithAuth';
import { cardStyles } from '../../../../../../styles';
import Avatar from '@material-ui/core/Avatar';
import { parseTime } from '../../../../../../utilities/functions';

import ReplyButton from './../../reply-button/ReplyButton';
import ReactButton from './../../react-buttom/ReactButton';
import ShowEmoji from './../../show-emoji/ShowEmoji';

import { ADD_COMMENT } from '../../../../../../graphql/comments/comment-queries';

export default function SubComment({
    subcomment,
    parent,
    dateCreated,
    commentOwner,
    root,
    id,
    eventId,
    Reactions,
    setSubComments,
}) {
    const user = useSelector((state) => state.user);
    const timeObject = parseTime(dateCreated);
    const classes = cardStyles();
    const [reactions, setReactions] = useState(Reactions);

    const toggleEmoji = (emoji) => {
        axiosWithAuth()({
            url: `${process.env.REACT_APP_BASE_URL}/graphql`,
            method: 'post',
            data: {
                query: print(HANDLE_REACTION),
                variables: {
                    reaction: {
                        comment_id: Number(id),
                        user_id: Number(user.id),
                        reaction: emoji,
                    },
                },
            },
        })
            .then((res) => {
                console.log(id);
                setReactions(res.data.data.handleReaction);
            })
            .catch((err) => {
                console.dir(err);
            });
    };

    const addReply = (reply) => {
        const newComment = {
            comment: reply,
            root_id: Number(root),
            parent_id: Number(commentOwner.id),
            event_id: Number(eventId),
            user_id: Number(user.id),
        };

        axiosWithAuth()({
            url: `${process.env.REACT_APP_BASE_URL}/graphql`,
            method: 'post',
            data: {
                query: print(ADD_COMMENT),
                variables: {
                    comment: newComment,
                },
            },
        }).then(
            (res) => {
                newComment.id = res.data.data.inputComment.id;
                newComment.User = {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                };
                newComment.dateCreated = Date.now();
                newComment.Parent = {
                    firstName: parent.firstName,
                    lastName: parent.lastName,
                };
                setSubComments((subComments) => [...subComments, newComment]);
            },
            (err) => console.dir(err)
        );
    };

    return (
        <div
            className={classes.singleCommentParent}
            // props.parent_id < 0
            //   ? classes.singleCommentParent
            //   : classes.singleCommentChild
            // }
        >
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                }}
            >
                {commentOwner && (
                    <>
                        <Avatar
                            key={commentOwner.id}
                            title={`${commentOwner.firstName} ${commentOwner.lastName}`}
                            aria-label="avatar"
                            className={classes.avatar}
                            src={
                                !commentOwner.photo ? null : commentOwner.photo
                            }
                            style={{
                                marginRight: '5px',
                                width: '26px',
                                height: '26px',
                            }}
                        >
                            {!commentOwner.photo && (
                                <Typography variant="body2">
                                    {`${commentOwner.firstName.split('')[0]}${
                                        commentOwner.lastName.split('')[0]
                                    }`}
                                </Typography>
                            )}
                        </Avatar>

                        <Typography variant="body1">
                            {`${commentOwner.firstName} ${commentOwner.lastName}`}
                        </Typography>
                    </>
                )}
            </div>
            <div>
                <Typography variant="caption" style={{ color: 'blue' }}>
                    {parent ? `@${parent.firstName} ${parent.lastName} ` : ``}
                </Typography>
                <Typography variant="caption">{subcomment}</Typography>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <div style={{ display: 'flex' }}>
                    <ReplyButton
                        name={`${commentOwner.firstName} ${commentOwner.lastName}`}
                        description={subcomment}
                        addReply={addReply}
                    />
                    <ReactButton
                        name={`${commentOwner.firstName} ${commentOwner.lastName}`}
                        toggleEmoji={toggleEmoji}
                    />
                    {reactions &&
                        reactions.map((item, index) => {
                            return <ShowEmoji key={index} item={item} />;
                        })}
                </div>
                <Typography variant="body2" color="textSecondary">
                    {timeObject.commentTime}
                </Typography>
            </div>
        </div>
    );
}
