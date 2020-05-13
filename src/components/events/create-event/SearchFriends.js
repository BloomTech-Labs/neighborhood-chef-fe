import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";

import { useDispatch, useSelector } from "react-redux";
import { print } from "graphql";
import axios from "axios";
import { ALL_USERS } from "../../../graphql/users/user-queries.js";
import { searchForUsersSuccess } from "../../../utilities/actions";
import UserList from "./UserList.js";

const SearchFriends = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const users = useSelector((state) => state.userList);
  const event = useSelector((state) => state.newEvent);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .post("http://localhost:5000/graphql", {
        query: print(ALL_USERS),
      })
      .then((res) => {
        dispatch(searchForUsersSuccess(res.data.data.getAllUsers));
      })
      .catch((err) => console.log(err.message));
  }, [dispatch]);

  useEffect(() => {
    if (searchTerm !== "") {
      setFilteredList(
        users.filter((user) => {
          return (
            user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase())
          );
        })
      );
    } else {
      setFilteredList([]);
    }
  }, [users, searchTerm]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "2px solid #F3F3F3",
        boxShadow: "0px 4px 15px rgba(179, 179, 179, 0.1)",
        borderRadius: "25px",
        marginTop: "40px",
      }}
    >
      <div style={{ marginLeft: "5%" }}>
        <h3
          style={{
            fontSize: "1.8rem",
            color: "#1A0F2C",
            fontWeight: "normal",
            fontStyle: "normal",
          }}
        >
          Invite Neighbors
        </h3>
        <p
          style={{
            color: "#DEDEDE",
            fontSize: "1.6rem",
            fontWeight: "normal",
            fontStyle: "normal",
          }}
        >
          Search for neighbors by name or email.
        </p>
      </div>

      <form style={{ marginLeft: "5%" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="createFormInputDiv" style={{ width: "70%" }}>
            <input
              type="text"
              name="search"
              placeholder="Search"
              onChange={handleChange}
              value={searchTerm}
            />
            <SearchIcon color="disabled" style={{ fontSize: "22px" }} />
          </div>
        </div>
      </form>
      <div style={{ width: "90%" }}>
        <UserList event={event} filteredList={filteredList} users={users} />
      </div>
    </div>
  );
};

export default SearchFriends;
