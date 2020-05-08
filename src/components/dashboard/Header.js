import React from "react";
import { Icon } from "@iconify/react";
import roundSearch from "@iconify/icons-ic/round-search";

const Header = () => {
  return (
    <div className="header-container">
      <h3>neighborhood name</h3>
      <div className="header-icons">
        <Icon height="25" icon={roundSearch} />
      </div>
    </div>
  );
};

export default Header;
