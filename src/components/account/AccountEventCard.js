import React from "react";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

//style imports
import { cardStyles } from "../../styles";
import Card from "@material-ui/core/Card";
import { parseTime, chooseDefaultPicture } from "../../utilities/functions";

const AccountEVentCard = ({ event }) => {
  const history = useHistory();
  const classes = cardStyles();
  const timeObject = parseTime(event.startTime);
  const photo =
    event.photo !== "null"
      ? event.photo
      : chooseDefaultPicture(event.category_id);

  return (
    <>
      <Card
        onClick={() => history.push(`/events/${event.id}`)}
        className={classes.accountEvent}
      >
        <img src={photo} alt="event"></img>
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          {event.title}
        </Typography>
        <Typography>{timeObject.commentTime}</Typography>
      </Card>
    </>
  );
};

export default AccountEVentCard;
