import React from 'react';
import { axiosWithAuth } from '../../../../../../../utilities/axiosWithAuth';
import { print } from 'graphql';
import { useDispatch, useSelector } from 'react-redux';
import { cardStyles, buttonStyles } from '../../../../../../../styles';
import Typography from '@material-ui/core/Typography';
import { makeInitials } from '../../../../../../../utilities/functions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import checkmarkIcon from '@iconify/icons-gridicons/checkmark';
import { Icon } from '@iconify/react';

import { INVITE_USER, REMOVE_INVITATION } from '../../../../../../../graphql/events/event-mutations.js';

const UserCard = ({ user, setAlreadyInvited, event_id, invited }) => {
  console.log(user);
  const buttonClasses = buttonStyles();
  const classes = cardStyles();
  const currentUserId = useSelector((state) => state.user.id);

  const inviteUser = () => {
    axiosWithAuth()
      .post(`${process.env.REACT_APP_BASE_URL}/graphql`, {
        query: print(INVITE_USER),
        variables: {
          inviteInput: {
            event_id: Number(event_id),
            inviter_id: Number(currentUserId),
            user_id: Number(user.id),
          },
        },
      })
      .then((res) => {
        setAlreadyInvited((alreadyInvited) => [...alreadyInvited, user.id]);
      })
      .catch((err) => console.dir(err));
  };

  const removeInvite = () => {
    axiosWithAuth()
      .post(`${process.env.REACT_APP_BASE_URL}/graphql`, {
        query: print(REMOVE_INVITATION),
        variables: {
          inviteInput: {
            event_id: Number(event_id),
            inviter_id: Number(currentUserId),
            user_id: Number(user.id),
          },
        },
      })
      .then((res) => {
        setAlreadyInvited((alreadyInvited) => alreadyInvited.filter((id) => id !== user.id));
      })
      .catch((err) => console.dir(err));
  };
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        margin: '10px',
      }}
      key={user.id}
    >
      <div style={{ display: 'flex', alignItems: 'center', width: '80%' }}>
        <Avatar aria-label="avatar" className={classes.avatar} src={!user.photo ? null : user.photo}>
          {!user.photo && <Typography>{`${user.firstName.charAt(0)}${user.lastName.charAt(0)}`}</Typography>}
        </Avatar>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '5%',
            width: '20%',
          }}
        >
          <div
            style={{
              display: 'flex',
              textAlign: 'left',
              fontSize: '1.4rem',
              color: '#1A0F2C',
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
            {user.email.length > 27 ? user.email.slice(0, 27) + '...' : user.email}
          </p>
        </div>
      </div>
      <div style={{ width: '50px' }}>{/* Not Invited */}</div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          width: '60px',
        }}
      >
        <IconButton
          className={`${buttonClasses.icon} ${invited ? buttonClasses.iconGreen : ''}`}
          onClick={() => (invited ? removeInvite() : inviteUser())}
        >
          {invited ? (
            <Icon
              icon={checkmarkIcon}
              style={{
                fontSize: '3.5rem',
                color: 'white',
                fontWeight: 'bold',
              }}
            />
          ) : (
            <Typography variant="h5">+</Typography>
          )}
        </IconButton>
      </div>
    </div>
  );
};

export default UserCard;
