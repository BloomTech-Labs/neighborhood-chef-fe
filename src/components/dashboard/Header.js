import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import outlineEdit from "@iconify/icons-ic/outline-edit";

import SearchButton from "./SearchButton";
import AccountButton from "../account/preferences/AccountButton";
import EditNeighborhood from "./EditNeighborhood";

const Header = () => {
  const neighborhoodName = useSelector((state) => state.neighborhoodName);
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="header-container">
      <div>{/*place holder for flexbox*/} </div>
      {isEditing ? (
        <EditNeighborhood
          currentName={neighborhoodName}
          setIsEditing={setIsEditing}
        />
      ) : (
        <div style={{ display: "flex" }}>
          <h3 style={{ marginRight: "15px" }}>{neighborhoodName}</h3>
          <span
            onClick={() => setIsEditing(true)}
            style={{ opacity: ".65", cursor: "pointer" }}
          >
            <Icon width="1.5em" icon={outlineEdit} />
          </span>
        </div>
      )}
      <div className="header-icons">
        <SearchButton />
        <AccountButton />
      </div>
    </div>
  );
};

export default Header;
