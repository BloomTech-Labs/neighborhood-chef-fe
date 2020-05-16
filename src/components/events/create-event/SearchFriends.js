import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { print } from "graphql";
import axios from "axios";
import { ALL_USERS } from "../../../graphql/users/user-queries.js";
import { searchForUsersSuccess } from "../../../utilities/actions";
import UserList from "./UserList.js";

const SearchFriends = ({ history }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  let users = useSelector((state) => state.userList);
  const event = useSelector((state) => state.newEvent);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .post(process.env.REACT_APP_URL, {
        query: print(ALL_USERS),
      })
      .then((res) => {
        dispatch(searchForUsersSuccess(res.data.data.getAllUsers));
      })
      .catch((err) => console.log(err.message));
  }, [dispatch]);

  // filtering userList to allow search by first name, last name and email
  useEffect(() => {
    if (searchTerm !== "") {
      if (searchTerm.match(/^[a-zA-Z0-9_-]*@[a-zA-Z0-9_-]*.[a-zA-Z0-9_-]*$/)) {
        setFilteredList(
          users.filter((user) => {
            return user.email.toLowerCase().includes(searchTerm.toLowerCase());
          })
        );
      } else if (
        searchTerm.match(/^\S*\S$/) ||
        searchTerm.match(/(^\w* {1,}$|^\w*. {1,}$)/)
      ) {
        const formattedSearchTerm = searchTerm
          .replace(".", "")
          .replace(" ", "");
        setFilteredList(
          users.filter((user) => {
            return (
              user.firstName
                .toLowerCase()
                .includes(formattedSearchTerm.toLowerCase()) ||
              user.lastName
                .toLowerCase()
                .includes(formattedSearchTerm.toLowerCase()) ||
              user.email
                .toLowerCase()
                .includes(formattedSearchTerm.toLowerCase())
            );
          })
        );
      } else if (searchTerm.match(/(^\w*|^\w*.) {1}\w*\w$/)) {
        const firstName = searchTerm.split(" ")[0];
        const lastName = searchTerm.split(" ")[1];
        const firstNameArray = users.filter((user) =>
          user.firstName.toLowerCase().includes(firstName.toLowerCase())
        );
        const lastNameArray = users.filter((user) =>
          user.lastName.toLowerCase().includes(lastName.toLowerCase())
        );
        setFilteredList(
          firstNameArray.filter((user) => lastNameArray.includes(user))
        );
      } else setFilteredList([]);
    } else setFilteredList([]);
  }, [users, searchTerm]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "2px solid #F3F3F3",
        boxShadow: "0px 4px 15px rgba(179, 179, 179, 0.1)",
        borderRadius: "25px",
        marginTop: "40px",
        marginBottom: "120px",
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

      <div style={{ marginLeft: "5%" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="createFormInputDiv" style={{ width: "70%" }}>
            <input
              type="text"
              name="search"
              placeholder="Search"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
            <SearchIcon color="disabled" style={{ fontSize: "22px" }} />
          </div>
          <button
            onClick={() => history.push("/view-events")}
            style={{
              background: "#82DF96",
              padding: "15px 20px",
              borderRadius: "5px",
              marginLeft: "5%",
              color: "white",
              outline: "none",
              fontSize: "2rem",
              fontWeight: "bold",
              width: "15%",
            }}
          >
            Done
          </button>
        </div>
      </div>
      <div style={{ width: "90%" }}>
        <UserList event={event} filteredList={filteredList} />
      </div>
    </div>
  );
};

export default withRouter(SearchFriends);
