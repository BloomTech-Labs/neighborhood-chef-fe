import React from "react";
//icon imports
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";

import { Icon } from "@iconify/react";
import bxLaugh from "@iconify/icons-bx/bx-laugh";
import bxSad from "@iconify/icons-bx/bx-sad";
import bxAngry from "@iconify/icons-bx/bx-angry";
import bxHappy from "@iconify/icons-bx/bx-happy";

const ShowEmoji = ({ item }) => {
  const returnEmoji = () => {
    switch (item.reaction) {
      case "heart":
        return (
          <div style={{ color: "pink" }}>
            <FavoriteBorderOutlinedIcon fontSize="large" />
          </div>
        );
      case "thumbsUp":
        return (
          <div style={{ color: "green" }}>
            <ThumbUpOutlinedIcon fontSize="large" />
          </div>
        );
      case "thumbsDown":
        return (
          <div style={{ color: "red" }}>
            <ThumbDownOutlinedIcon fontSize="large" />
          </div>
        );
      case "Happy":
        return (
          <div style={{ color: "orange" }}>
            <Icon icon={bxHappy} height="1.5em" />
          </div>
        );
      case "Laugh":
        return (
          <div style={{ color: "orange" }}>
            <Icon icon={bxLaugh} height="1.5em" />
          </div>
        );
      case "Sad":
        return (
          <div style={{ color: "blue" }}>
            <Icon icon={bxSad} height="1.5em" />
          </div>
        );
      case "Angry":
        return (
          <div style={{ color: "red" }}>
            <Icon icon={bxAngry} height="1.5em" />
          </div>
        );
      default:
        break;
    }
  };

  return <div>{item && returnEmoji()}</div>;
};

export default ShowEmoji;
