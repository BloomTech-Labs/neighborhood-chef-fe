import React from "react";

import { useSelector } from "react-redux";

//style imports
import { cardStyles } from "../../../styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import MessageIcon from "@material-ui/icons/Message";

const shareButtons = [
  {
    name: "Facebook",
    icon: FacebookIcon,
  },
  {
    name: "Twitter",
    icon: TwitterIcon,
  },
  {
    name: "Text",
    icon: MessageIcon,
  },
  {
    name: "Email",
    icon: EmailIcon,
  },
];

const ParticipantCard = (props) => {
  const classes = cardStyles();

  return (
    <>
      <Card className={`${classes.root} ${classes.share}`}>
        <Typography variant="h6" align="left">
          Share
        </Typography>
        <CardContent style={{ display: "flex" }}>
          {shareButtons.map((b) => {
            return (
              <Avatar
                title={b.name}
                aria-label={b.name}
                className={cardStyles({ name: b.name }).shareButtons}
              >
                <b.icon fontSize="large" />
              </Avatar>
            );
          })}
          <div>
            <Typography variant="body1">Copy Link:</Typography>
            <input disabled placeholder="ourneighborhoodchef.com" />
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ParticipantCard;
