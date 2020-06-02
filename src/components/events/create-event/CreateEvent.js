import React from "react";
import Sidebar from "../../dashboard/Sidebar";
import FormContainer from "./FormContainer";

const CreateEvent = () => {
  return (
    <div className="component-main">
      <Sidebar active="create-event" />
      <FormContainer />
    </div>
  );
};

export default CreateEvent;
