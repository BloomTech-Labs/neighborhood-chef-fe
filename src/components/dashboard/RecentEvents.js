import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../../utilities/axiosWithAuth";
import { useSelector, useDispatch } from "react-redux";
import RecentCard from "./RecentCard";
import { print } from "graphql";
import {
  GET_INVITED_EVENTS,
  GET_FAVORITE_EVENTS,
} from "../../graphql/users/user-queries";
import {
  getEventsSuccess,
  getFavoriteEventsSuccess,
} from "../../utilities/actions";
import Typography from "@material-ui/core/Typography";

//icon imports
import CircularProgress from "@material-ui/core/CircularProgress";

const RecentEvents = () => {
  const me = JSON.parse(sessionStorage.getItem("user"));
  const update = useSelector((state) => state.update);
  const eventList = useSelector((state) => state.eventList);
  console.log(eventList);
  const dispatch = useDispatch();
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    if (me) {
      setIsFetching(true);
      axiosWithAuth()({
        url: `${process.env.REACT_APP_BASE_URL}/graphql`,
        method: "post",
        data: {
          query: print(GET_INVITED_EVENTS),
          variables: { id: me.id },
        },
      })
        .then((res) => {
          const sorted = res.data.data.getInvitedEvents.sort(
            (a, b) => b.createDateTime - a.createDateTime
          );
          const limitSet = sorted.slice(
            0,
            process.env.REACT_APP_DASHBOARD_EVENT_LIMIT
          );
          dispatch(getEventsSuccess(limitSet));
        })
        .catch((err) => {
          console.log(err.message);
        })
        .finally((res) => {
          setIsFetching(false);
        });
    }
    // eslint-disable-next-line
  }, [update]);

  useEffect(() => {
    if (me) {
      axiosWithAuth()({
        url: `${process.env.REACT_APP_BASE_URL}/graphql`,
        method: "post",
        data: {
          query: print(GET_FAVORITE_EVENTS),
          variables: { id: me.id },
        },
      })
        .then((res) => {
          dispatch(getFavoriteEventsSuccess(res.data.data.getFavoriteEvents));
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h2
        //with minimal elements on dashboard, moving this to center for better styling. to be moved back once feed and other components are added back
        style={
          { textAlign: "center", marginBottom: "10px" } // {{ marginLeft: "12px", marginBottom: "5px" }}
        }
      >
        Newest Events
      </h2>
      <div style={{ overflow: "auto", height: "80vh" }}>
        <div className="recent-events-container">
          {isFetching ? (
            <div style={{ textAlign: "center" }}>
              <CircularProgress style={{ color: "#58D573" }} />
            </div>
          ) : eventList.length > 0 ? (
            eventList.map((ele, id) => (
              <RecentCard
                {...ele}
                key={ele.id}
                currentStatus={
                  ele.users.filter((u) => `${u.id}` === `${me.id}`)[0].status
                }
              />
            ))
          ) : (
            <Typography style={{ marginTop: "20px" }}>
              No recently created events.
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentEvents;
