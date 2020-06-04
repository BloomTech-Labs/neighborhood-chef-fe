import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from "@iconify/react";
import chefIcon from "@iconify/icons-whh/chef";

function Logo(){

    return (
        <Link to="/">
          <div className="left-side-header">
            <span style={{ color: "#58D473", marginRight: "5px" }}>
              <Icon width="1.1em" icon={chefIcon} />
            </span>
            <span>Neighborhood Chef</span>
          </div>
        </Link>
    );

}

export default Logo; 

