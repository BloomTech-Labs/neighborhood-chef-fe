import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import RecentCard from "./RecentCard";
import { print } from "graphql";
import { GET_INVITED_EVENTS } from "../../graphql/users/user-queries";
import { getEventsSuccess } from "../../utilities/actions";

const RecentEvents = () => {
  const me = useSelector((state) => state.myUser);
  const eventList = useSelector((state) => state.eventList);
  // const [sortedList, setSortedList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios({
      url: process.env.REACT_APP_URL,
      method: "post",
      data: {
        query: print(GET_INVITED_EVENTS),
        variables: { id: me.id },
      },
    })
      .then((res) => {
        dispatch(
          getEventsSuccess(
            res.data.data.getInvitedEvents.sort(
              (a, b) => b.createDateTime - a.createDateTime
            )
          )
        );
      })
      // .then((res) => {
      //   setSortedList(
      //     eventList.sort((a, b) => a.createDateTime - b.createDateTime)
      //   );
      // })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      <h3 style={{ marginLeft: "12px", marginBottom: "5px" }}>Newest Events</h3>
      <div style={{ overflow: "scroll", height: "80vh" }}>
        <div className="recent-events-container">
          {!!eventList &&
            eventList.map((ele) => (
              <RecentCard
                {...ele}
                key={ele.id}
                currentStatus={
                  ele.users.filter((u) => `${u.id}` === `${me.id}`)[0].status
                }
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default RecentEvents;
