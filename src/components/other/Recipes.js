import React from "react";
import Sidebar from "../dashboard/Sidebar";

const Recipes = () => {
  return (
    <div className="component-main">
      <Sidebar active="recipes" />
      <p>Recipes Component</p>
    </div>
  );
};

export default Recipes;
