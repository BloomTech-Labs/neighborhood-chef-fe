import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { Icon } from "@iconify/react";
// import outlineEdit from "@iconify/icons-ic/outline-edit";

// import SearchButton from "./SearchButton";
// import AccountButton from "../account/preferences/AccountButton";
import EditNeighborhood from "./EditNeighborhood";

const Header = () => {
  const neighborhoodName = useSelector((state) => state.neighborhoodName);
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="header-container">
      {isEditing ? (
        <EditNeighborhood
          currentName={neighborhoodName}
          setIsEditing={setIsEditing}
        />
      ) : (
        <div style={{ display: "flex" }}>
          <h1 style={{ width: "270px" }}>{neighborhoodName}</h1>
          {/* need to add this to localstorage or backend storage to be actually functional */}
          {/* <span
            onClick={() => setIsEditing(true)}
            style={{ opacity: ".65", cursor: "pointer" }}
          >
            <Icon width="1.5em" icon={outlineEdit} />
          </span> */}
        </div>
      )}
      {/* <div className="header-icons"> */}
      {/* search functionality not working yet, not needed for first iteration of site */}
      {/* <SearchButton /> */}
      {/* account button functionality not working yet. */}
      {/* <AccountButton /> */}
      {/* </div> */}
    </div>
  );
};

export default Header;
