import React from "react";
import Sidebar from "../dashboard/Sidebar";
import Header from "../dashboard/Header";

const CreateEvent = () => {
  return (
    <div>
      <Header />
      <h1>CreateEvent Component</h1>
      <Sidebar active="createevent" />
    </div>
  );
};

export default CreateEvent;
