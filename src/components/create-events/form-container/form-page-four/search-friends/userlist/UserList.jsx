import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../../../../../../utilities/axiosWithAuth';
import { useSelector } from 'react-redux';
import { print } from 'graphql';
import { GET_USER_INVITED_TO_EVENT_BY_CURRENT_USER } from '../../../../../../graphql/events/event-queries';

import UserCard from './user-card/UserCard';

const UserList = ({ event_id, filteredList }) => {
  const user_id = useSelector((state) => state.user.id);
  const [invitedUsers, setAlreadyInvited] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .post(`${process.env.REACT_APP_BASE_URL}/graphql`, {
        query: print(GET_USER_INVITED_TO_EVENT_BY_CURRENT_USER),
        variables: {
          queryParams: {
            id: Number(event_id),
          },
          currentUser: Number(user_id),
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setAlreadyInvited(res.data.data.Events[0].EventUsers.currentUserInvited.map((user) => user.id));
      })
      .catch((err) => console.dir(err));
  }, []);

  useEffect(() => {}, [invitedUsers]);

  return (
    <>
      {filteredList.map((user) => {
        return (
          <UserCard
            key={user.id}
            user={user}
            event_id={event_id}
            invited={invitedUsers.includes(user.id) ? true : false}
            setAlreadyInvited={setAlreadyInvited}
          />
        );
      })}
    </>
  );
};

export default UserList;
