import React from "react";
import FeedCard from "./FeedCard";

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

const Feed = () => {
  return (
    <div className="feed-container">
      <h3>Feed</h3>
      {!!feedList && feedList.map((ele) => <FeedCard {...ele} />)}
    </div>
  );
};

export default Feed;
