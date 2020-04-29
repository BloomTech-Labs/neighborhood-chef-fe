import React from "react";
import { Icon } from "@iconify/react";
import roundAccountCircle from "@iconify/icons-ic/round-account-circle";

const Header = () => {
  return (
    <div className="header-container">
      <div>
        <Icon width="2em" icon={roundAccountCircle} />
      </div>
    </div>
  );
};

export default Header;
