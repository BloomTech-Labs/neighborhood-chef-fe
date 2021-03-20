import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { print } from 'graphql';
import { axiosWithAuth } from '../../../../../utilities/axiosWithAuth';

import { USER_WITHIN_RADIUS } from '../../../../../graphql/users/user-queries.js';
import { searchForUsersSuccess } from '../../../../../utilities/actions';

import UserList from './userlist/UserList';
import { searchFriendsStyles } from './SearchFriends.styles';

const SearchFriends = ({ event_id }) => {
  const user = useSelector((state) => state.user);
  const [usersWithinRadius, setUsersWithinRadius] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredList, setFilteredList] = useState([]);

  const { push } = useHistory();
  const styles = searchFriendsStyles();

  useEffect(() => {
    axiosWithAuth()
      .post(`${process.env.REACT_APP_BASE_URL}/graphql`, {
        query: print(USER_WITHIN_RADIUS),
        variables: {
          queryParams: {
            latitude: user.latitude,
            longitude: user.longitude,
            radius: 1000000,
          },
        },
      })
      .then((res) => {
        setUsersWithinRadius(res.data.data.Users);
      })
      .catch((err) => console.dir(err));
  }, []);

  // filtering userList to allow search by first name, last name and email
  useEffect(() => {
    if (searchTerm !== '') {
      if (searchTerm.match(/^[a-zA-Z0-9_-]*@[a-zA-Z0-9_-]*.[a-zA-Z0-9_-]*$/)) {
        setFilteredList(
          usersWithinRadius.filter((user) => {
            return user.email.toLowerCase().includes(searchTerm.toLowerCase());
          })
        );
      } else if (searchTerm.match(/^\S*\S$/) || searchTerm.match(/(^\w* {1,}$|^\w*. {1,}$)/)) {
        const formattedSearchTerm = searchTerm.replace('.', '').replace(' ', '');
        setFilteredList(
          usersWithinRadius.filter((user) => {
            return (
              user.firstName.toLowerCase().includes(formattedSearchTerm.toLowerCase()) ||
              user.lastName.toLowerCase().includes(formattedSearchTerm.toLowerCase()) ||
              user.email.toLowerCase().includes(formattedSearchTerm.toLowerCase())
            );
          })
        );
      } else if (searchTerm.match(/(^\w*|^\w*.) {1}\w*\w$/)) {
        const firstName = searchTerm.split(' ')[0];
        const lastName = searchTerm.split(' ')[1];
        const firstNameArray = usersWithinRadius.filter((user) =>
          user.firstName.toLowerCase().includes(firstName.toLowerCase())
        );
        const lastNameArray = usersWithinRadius.filter((user) =>
          user.lastName.toLowerCase().includes(lastName.toLowerCase())
        );
        setFilteredList(firstNameArray.filter((user) => lastNameArray.includes(user)));
      } else setFilteredList([]);
    } else setFilteredList([...usersWithinRadius]);
  }, [usersWithinRadius, searchTerm]);

  return (
    <div className={styles.root}>
      <div>
        <h3 className={styles.h3}>Invite Neighbors</h3>
        <p className={styles.p}>Search for neighbors by name or email.</p>
      </div>

      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className={styles.inputDiv} style={{ width: '70%' }}>
            <input
              type="text"
              name="search"
              placeholder="Search"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
              className={styles.input}
            />
            <SearchIcon color="disabled" style={{ fontSize: '22px' }} />
          </div>
          <button onClick={() => push('/view-events')} className={styles.button}>
            Done
          </button>
        </div>
      </div>
      <div style={{ width: '90%' }}>
        <UserList event_id={event_id} filteredList={filteredList} />
      </div>
    </div>
  );
};

export default SearchFriends;
