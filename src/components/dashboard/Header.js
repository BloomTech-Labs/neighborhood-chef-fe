import React from "react";
import { Icon } from "@iconify/react";
import chefIcon from "@iconify/icons-whh/chef";
import roundAccountCircle from "@iconify/icons-ic/round-account-circle";

const Header = () => {
  return (
    <div className="header-container">
      <div className="left-side-header">
        <span style={{ color: "#58D473", marginRight: "5px" }}>
          <Icon width="1.1em" icon={chefIcon} />
        </span>

        <span>Neighborhood Chef</span>
      </div>
      <div>
        <Icon width="2em" icon={roundAccountCircle} />
      </div>
    </div>
  );
};

export default Header;
