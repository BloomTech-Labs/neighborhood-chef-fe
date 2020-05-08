import React from "react";
import { Icon } from "@iconify/react";
import roundAccountCircle from "@iconify/icons-ic/round-account-circle";

const AccountButton = () => {
  return (
    <div className="account-button">
      <div>
        <Icon width="2em" icon={roundAccountCircle} />
      </div>
    </div>
  );
};

export default AccountButton;
