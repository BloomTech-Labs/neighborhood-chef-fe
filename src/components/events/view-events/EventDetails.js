import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../../../utilities/axiosWithAuth";

//react router imports
import { useLocation } from "react-router-dom";

//graphql imports
import { USER_BY_ID } from "../../../graphql/users/user-queries";
import { print } from "graphql";
import { EVENT_BY_ID } from "../../../graphql/events/event-queries";

//redux imports
import { useSelector, useDispatch } from "react-redux";
import { getSingleEvent, makeActive } from "../../../utilities/actions";

//style imports
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { cardStyles } from "../../../styles";

//icon imports
import { Icon } from "@iconify/react";
import calendarIcon from "@iconify/icons-flat-color-icons/calendar";
import clockIcon from "@iconify/icons-flat-color-icons/clock";
import globeIcon from "@iconify/icons-flat-color-icons/globe";

//component imports
import StatusButton from "./StatusButton";
import EventButtonModal from "../../dashboard/EventButtonModal";

//data/function imports
import { rsvpButtons } from "../../../data/buttons";
import { parseTime, chooseDefaultPicture } from "../../../utilities/functions";

const EventDetails = () => {
  const location = useLocation();
  const thisURL = location.pathname.split("/");
  const dispatch = useDispatch();
  const classes = cardStyles();
  const idFromStore = useSelector((state) => state.activeEvent);
  const currentEventId = thisURL.length > 2 ? thisURL[2] : idFromStore;
  const me = JSON.parse(sessionStorage.getItem("user"));
  const event = useSelector((state) => state.currentEvent);
  const [creatorName, setCreatorName] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");
  const [participants, setParticipants] = useState([]);

  const photo =
    event.photo !== "null"
      ? event.photo
      : chooseDefaultPicture(event.category_id);

  let timeObject, parsedAddressURL;

  useEffect(() => {
    //get creator name when event loads.  This is a rough and inefficient way to do this, especially if there ends up being protected queries
    if (Object.keys(event).length > 0) {
      axiosWithAuth()({
        url: `${process.env.REACT_APP_BASE_URL}/graphql`,
        method: "post",
        data: {
          query: print(USER_BY_ID),
          variables: { id: event.user_id },
        },
      })
        .then((res) => {
          const data = res.data.data.getUserById;
          setCreatorName(`${data.firstName} ${data.lastName}`);
          setCurrentStatus(
            event.users.filter((ele) => `${ele.id}` === `${me.id}`)[0].status
          );
          setParticipants(
            event.users.filter((user) => user.status === "Going")
          );
          // console.log("event", event);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }

    // eslint-disable-next-line
  }, [event]);

  useEffect(() => {
    if (currentEventId) {
      axiosWithAuth()({
        url: `${process.env.REACT_APP_BASE_URL}/graphql`,
        method: "post",
        data: {
          query: print(EVENT_BY_ID),
          variables: { id: currentEventId },
        },
      })
        .then((res) => {
          dispatch(getSingleEvent(res.data.data.getEventById));
          dispatch(makeActive(currentEventId));
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [dispatch, currentEventId]);

  useEffect(() => {
    return () => {
      dispatch(makeActive(null));
      dispatch(getSingleEvent({}));
    };
  }, [dispatch]);

  if (Object.keys(event).length > 0) {
    timeObject = parseTime(event.startTime, event.endTime);
    parsedAddressURL = `https://www.google.com/maps/search/${event.address.replace(
      " ",
      "+"
    )}`;
  }

  return (
    <div className="event-details-container">
      {Object.keys(event).length > 0 ? (
        <Card className={`${classes.root} ${classes.fullEvent}`}>
          <CardHeader
            action={<EventButtonModal eventId={event.id} userId={me.id} />}
            title={<Typography variant="h3">{event.title}</Typography>}
            subheader={
              <Typography variant="caption">
                <span style={{ opacity: ".6" }}>created by </span>
                {creatorName}
              </Typography>
            }
          />
          <CardMedia
            style={{ height: 130 }}
            component="img"
            src={photo}
            title="Event Details Photo"
          />
          <p style={{ opacity: ".5" }}> {event.description}</p>
          <div>Confirmed Attending: {participants.length}</div>
          <div>
            <span style={{ marginRight: "5px", verticalAlign: "middle" }}>
              <Icon height="20" icon={calendarIcon} />
            </span>
            {timeObject.formattedDate}
          </div>
          <div>
            <span style={{ marginRight: "5px", verticalAlign: "middle" }}>
              <Icon height="20" icon={clockIcon} />
            </span>
            {`${timeObject.startTime} ${
              timeObject.endTime !== "Invalid date"
                ? "- " + timeObject.endTime
                : ""
            }`}
          </div>
          <div>
            <span style={{ marginRight: "5px", verticalAlign: "middle" }}>
              <Icon height="20" icon={globeIcon} />
            </span>
            <a
              href={parsedAddressURL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgb(79, 79, 248)" }}
            >
              {event.address}
            </a>
          </div>
          <div style={{ padding: "20px 0px 10px 0px" }}>
            <Typography variant="h6">
              Will you be attending this event?
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "10px",
              }}
            >
              {rsvpButtons.map((ele) => (
                <StatusButton
                  {...ele}
                  eventStatus={currentStatus}
                  eventId={event.id}
                  userId={me.id}
                  setStatus={setCurrentStatus}
                  key={ele.name}
                />
              ))}
            </div>
          </div>
        </Card>
      ) : (
        <Typography variant="h6" style={{ padding: "10px" }}>
          Please select an event to view its details here
        </Typography>
      )}
    </div>
  );
};

export default EventDetails;
