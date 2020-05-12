import React from "react";
import FeedCard from "./FeedCard";

import InfiniteScroll from "react-infinite-scroll-component";

import CircularProgress from "@material-ui/core/CircularProgress";

const feedList = [
  {
    name: "Test name",
    photo: "",
    message: "test message",
    time_created: new Date(),
    likes: 10,
    comments_num: 5,
  },
  {
    name: "Test name 2",
    photo: "",
    message: "test message 2",
    time_created: new Date(1132309424029),
    likes: 15,
    comments_num: 8,
  },
  {
    name: "Test name 3",
    photo: "",
    message: "test message 3",
    time_created: new Date(),
    likes: 0,
    comments_num: 1,
  },
  {
    name: "Test name 4",
    photo: "",
    message: "test message 4",
    time_created: new Date(),
    likes: 24,
    comments_num: 0,
  },
];

const shownList = [1, 2, 3, 4];

const Feed = () => {
  return (
    <div className="feed-container">
      <h3 style={{ marginLeft: "12px" }}>Feed</h3>
      <InfiniteScroll
        dataLength={feedList.length} //This is important field to render the next data
        // next={fetchData}
        hasMore={shownList.length < feedList.length}
        loader={
          <div style={{ textAlign: "center" }}>
            <CircularProgress />
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
  );
};

export default Feed;
