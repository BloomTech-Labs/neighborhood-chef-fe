import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
import chefIcon from "@iconify/icons-whh/chef";
import roundAccountCircle from "@iconify/icons-ic/round-account-circle";

const Header = () => {
  return (
    <div className="header-container">
      <div>
        <Icon width="1.5em" icon={chefIcon} />
        <span>Neighborhood Chef</span>
      </div>
      <div>
        <Icon width="3em" icon={roundAccountCircle} />
      </div>
    </div>
  );
};

export default Header;
