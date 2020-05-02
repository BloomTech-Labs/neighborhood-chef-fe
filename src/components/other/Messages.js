import React from "react";
import Sidebar from "../dashboard/Sidebar";

const Messages = () => {
  return (
    <div className="component-main">
      <Sidebar active="messages" />
      <p>Messages Component</p>
    </div>
  );
};

export default Messages;
