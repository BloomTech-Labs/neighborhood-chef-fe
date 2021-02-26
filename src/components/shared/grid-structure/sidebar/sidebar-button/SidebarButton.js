import React from 'react';

import { Link } from 'react-router-dom';

//icons imports
import { Icon } from '@iconify/react';

//material-ui styles imports
import Button from '@material-ui/core/Button';
import { buttonStyles } from '../../../../../styles';
import Typography from '@material-ui/core/Typography';

const SidebarButton = ({ active, link, icon, text }) => {
    const classes = buttonStyles();
    return (
        <Link to={`/${link}`}>
            <Button
                className={`${classes.root} ${
                    active ? classes.active : classes.notActive
                }`}
            >
                <span style={{ marginRight: '5px' }}>
                    <Icon height="20" icon={icon} />
                </span>
                <Typography variant="caption">{text}</Typography>
            </Button>
        </Link>
    );
};

export default SidebarButton;
