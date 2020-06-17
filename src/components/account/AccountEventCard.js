import React from "react";

//style imports
import { cardStyles } from "../../styles";
import Card from "@material-ui/core/Card";

const AccountEVentCard = ({ event }) => {
  const classes = cardStyles();

  return (
    <>
      <Card className={`${classes.root} ${classes.accountEvent}`}>
        {event.title}
      </Card>
    </>
  );
};

export default AccountEVentCard;
