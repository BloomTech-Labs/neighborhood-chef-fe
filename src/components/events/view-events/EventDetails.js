import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../../../utilities/axiosWithAuth";

//graphql imports
import { USER_BY_ID } from "../../../graphql/users/user-queries";
import { print } from "graphql";

//redux imports
import { useSelector } from "react-redux";

//style imports
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

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
import { parseTime } from "../../../utilities/functions";

const EventDetails = () => {
  const currentEventId = useSelector((state) => state.activeEvent);
  const eventList = useSelector((state) => state.eventList);
  const me = JSON.parse(sessionStorage.getItem("user"));

  const event = eventList && eventList.find((ele) => ele.id === currentEventId);

  const [creatorName, setCreatorName] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");
  const [participants, setParticipants] = useState([]);

  let timeObject, parsedAddressURL;

  useEffect(() => {
    //get creator name when event loads.  This is a rough and inefficient way to do this, especially if there ends up being protected queries
    event &&
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
        })
        .catch((err) => {
          console.log(err.message);
        });
    // eslint-disable-next-line
  }, [event]);

  if (event) {
    timeObject = parseTime(event.startTime, event.endTime);
    parsedAddressURL = `https://www.google.com/maps/search/${event.address.replace(
      " ",
      "+"
    )}`;
  }
  return (
    <div className="event-details-container">
      {!!event && (
        <Card className="event-details-card">
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
          <p style={{ opacity: ".5" }}> {event.description}</p>
          <div>Confirmed Participants: {participants.length}</div>
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
      )}
    </div>
  );
};

export default EventDetails;
