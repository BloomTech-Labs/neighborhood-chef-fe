import React from "react";
import FeedCard from "./FeedCard";

import InfiniteScroll from "react-infinite-scroll-component";

import CircularProgress from "@material-ui/core/CircularProgress";

import curry from "../../assets/curry.jpg"; //test image

//test message list
const feedList = [
  {
    name: "Sue",
    photo: "",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    time_created: new Date(),
    likes: 10,
    comments_num: 5,
  },
  {
    name: "Bob",
    photo: curry,
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    time_created: new Date(1132309424029),
    likes: 15,
    comments_num: 8,
  },
  {
    name: "Elaine",
    photo: "",
    message: "test message 3",
    time_created: new Date(),
    likes: 0,
    comments_num: 1,
  },
  {
    name: "Test name",
    photo: "",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    time_created: new Date(),
    likes: 24,
    comments_num: 0,
  },
];

const shownList = [1, 2, 3];

const Feed = () => {
  return (
    <div>
      <h3 style={{ marginLeft: "12px", marginBottom: "5px" }}>
        Recent Messages
      </h3>
      <div style={{ overflow: "scroll", height: "80vh" }}>
        <div className="feed-container">
          {/* infinitescroll not currently working. disabled for now. */}
          <InfiniteScroll
            dataLength={feedList.length}
            // next={fetchData}
            hasMore={shownList.length < feedList.length}
            loader={
              <div style={{ textAlign: "center" }}>
                {/* <CircularProgress /> */}
              </div>
            }
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>This is the end of your feed. Check back later!</b>
              </p>
            }
          >
            {!!feedList &&
              feedList.map((ele) => <FeedCard {...ele} key={ele.name} />)}
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

export default Feed;
