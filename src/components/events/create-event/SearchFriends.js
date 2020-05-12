import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";

//move to other component
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { print } from "graphql";
import axios from "axios";
import { ALL_USERS } from "../../../graphql/users/user-queries.js";
import { searchForUsersSuccess } from "../../../utilities/actions";
import UserList from "./UserList.js";

const SearchFriends = ({ users, event }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredList, setFilteredList] = useState([]);
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
          <div className="createFormInputDiv" style={{ width: "50%" }}>
            <input
              type="text"
              name="search"
              placeholder="Search"
              onChange={handleChange}
              value={searchTerm}
            />
            <SearchIcon color="disabled" style={{ fontSize: "22px" }} />
          </div>

          {/* <button
            style={{
              background: "#82DF96",
              color: "white",
              borderRadius: "5px",
              width: "16%",
              fontSize: "1.8rem",
              padding: "16px 20px",
              marginLeft: "10%",
              outLine: "none",
            }}
          >
            Invite
          </button> */}
        </div>
      </form>
      <div style={{ width: "90%" }}>
        <UserList event={event} filteredList={filteredList} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.userList,
    event: state.newEvent,
  };
};

export default connect(mapStateToProps, null)(SearchFriends);
