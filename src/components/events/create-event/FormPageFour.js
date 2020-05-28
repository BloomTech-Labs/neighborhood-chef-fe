import React from "react";
import EventCard from "./EventCard.js";
import SearchFriends from "./SearchFriends.js";

const FormPageFour = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <EventCard />
      <SearchFriends />
    </div>
  );
};

export default FormPageFour;
