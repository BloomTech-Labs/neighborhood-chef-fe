import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';

const SearchFriends = () => {
  const [searchInput, setSearchInput] = useState({ search: '' });

  const handleChange = (e) => {
    setSearchInput({ search: e.target.value });
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: '2px solid #F3F3F3',
        boxShadow: '0px 4px 15px rgba(179, 179, 179, 0.1)',
        borderRadius: '25px',
        marginTop: '40px',
      }}
    >
      <div style={{ marginLeft: '5%' }}>
        <h3
          style={{
            fontSize: '1.8rem',
            color: '#1A0F2C',
            fontWeight: 'normal',
            fontStyle: 'normal',
          }}
        >
          Invite Neighbors
        </h3>
        <p
          style={{
            color: '#DEDEDE',
            fontSize: '1.6rem',
            fontWeight: 'normal',
            fontStyle: 'normal',
          }}
        >
          Search for neighbors by name or email.
        </p>
      </div>

      <form style={{ marginLeft: '5%' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="createFormInputDiv" style={{ width: '50%' }}>
            <input
              type="text"
              name="search"
              placeholder="Search"
              onChange={handleChange}
              value={searchInput.search}
            />
            <SearchIcon color="disabled" style={{ fontSize: '22px' }} />
          </div>

          <button
            style={{
              background: '#82DF96',
              color: 'white',
              borderRadius: '5px',
              width: '16%',
              fontSize: '1.8rem',
              padding: '16px 20px',
              marginLeft: '10%',
              outLine: 'none',
            }}
          >
            Invite
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchFriends;
