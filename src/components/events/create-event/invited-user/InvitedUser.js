import React from 'react';
import { Icon } from '@iconify/react';
import checkmarkIcon from '@iconify/icons-gridicons/checkmark';
import { print } from 'graphql';
import { useDispatch, useSelector } from 'react-redux';
import { axiosWithAuth } from '../../../../utilities/axiosWithAuth';
import { cardStyles, buttonStyles } from '../../../../styles';
import Typography from '@material-ui/core/Typography';
import { makeInitials } from '../../../../utilities/functions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import {
  deleteInvitationSuccess,
  filterUserListSuccess,
} from '../../../../utilities/actions/index.js';

import { REMOVE_INVITATION } from '../../../../graphql/events/event-mutations.js';

const InvitedUser = ({ user }) => {
  const buttonClasses = buttonStyles();
  const classes = cardStyles();
  const dispatch = useDispatch();
  const event = useSelector((state) => state.newEvent);
  let users = useSelector((state) => state.userList);

  const deleteInvitation = (user) => {
    const removeInvite = {
      event_id: Number(event.id),
      user_id: Number(user.id),
    };

    axiosWithAuth()
      .post(`${process.env.REACT_APP_BASE_URL}/graphql`, {
        query: print(REMOVE_INVITATION),
        variables: { input: removeInvite },
      })
      .then((res) => {
        dispatch(deleteInvitationSuccess(res.data.data.removeInvitation.users));
        dispatch(filterUserListSuccess((users = [...users, user])));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        margin: '10px',
        opacity: '0.5',
      }}
      key={user.id}
    >
      <div style={{ display: 'flex', alignItems: 'center', width: '80%' }}>
        <Avatar
          aria-label='avatar'
          className={classes.avatar}
          src={user.photo === 'null' ? null : user.photo}
        >
          {user.photo === 'null' && (
            <Typography>{makeInitials(user)}</Typography>
          )}
        </Avatar>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '5%',
          }}
        >
          <div
            style={{
              display: 'flex',
              textAlign: 'left',
              fontSize: '1.4rem',
              fontWeight: '500',
              lineStyle: 'normal',
            }}
          >
            <p>
              {user.firstName}&nbsp;{user.lastName}
            </p>
          </div>
          <p
            style={{
              color: '#000000',
              opacity: '0.3',
            }}
          >
            {user.email.length > 21
              ? user.email.slice(0, 21) + '...'
              : user.email}
          </p>
        </div>
      </div>
      <div style={{ width: '50px' }}>Invited</div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          width: '60px',
        }}
      >
        <IconButton
          className={buttonClasses.iconGreen}
          onClick={() => deleteInvitation(user)}
        >
          <Icon
            icon={checkmarkIcon}
            style={{
              fontSize: '3.5rem',
              color: 'white',
              fontWeight: 'bold',
            }}
          />
        </IconButton>
      </div>
    </div>
  );
};

export default InvitedUser;
