import React, { useState } from 'react';
import { useSelector } from 'react-redux';

//style imports
import { cardStyles, buttonStyles } from '../../../styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Comment from './comment/Comment';

import { ADD_COMMENT } from '../../../graphql/comments/comment-queries';
import { print } from 'graphql';
import { axiosWithAuth } from '../../../utilities/axiosWithAuth';

const CommentsCard = ({ initialComments, eventId }) => {
    const user = useSelector((state) => state.user);
    const classes = cardStyles();
    const buttonClass = buttonStyles();
    const [commentFormInput, setCommentFormInput] = useState('');
    const [comments, setComments] = useState(initialComments);

    const handleChange = (e) => {
        setCommentFormInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newComment = {
            comment: commentFormInput,
            root_id: 0,
            parent_id: 0,
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
                setComments([...comments, newComment]);
                setCommentFormInput('');
            },
            (err) => console.dir(err)
        );
    };

    return (
        <div style={{ height: '100%' }}>
            <Card className={`${classes.root} ${classes.comments}`}>
                <Typography variant="h6" align="left">
                    Comments
                </Typography>
                <CardContent>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            overflowY: 'auto',
                            height: '35vh',
                            maxHeight: '35vh',
                        }}
                    >
                        {comments &&
                            comments.map((comment) => (
                                <Comment
                                    key={comment.id}
                                    {...comment}
                                    eventId={eventId}
                                />
                            ))}
                    </div>
                </CardContent>
                <CardContent>
                    <form
                        noValidate
                        autoComplete="off"
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                        onSubmit={handleSubmit}
                    >
                        <TextField
                            name="comment"
                            required
                            variant="outlined"
                            placeholder="Write a comment..."
                            style={{ width: '60%' }}
                            onChange={handleChange}
                            value={commentFormInput}
                        />
                        <Button
                            type="submit"
                            disabled={!commentFormInput}
                            className={`${buttonClass.root} ${buttonClass.single}`}
                        >
                            <Typography>Add Comment</Typography>
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default CommentsCard;
