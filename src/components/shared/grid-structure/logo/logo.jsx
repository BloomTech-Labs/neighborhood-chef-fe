import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import chefIcon from '@iconify/icons-whh/chef';

import { makeStyles } from '@material-ui/core/styles';

export const logoStyles = makeStyles((theme) => ({
    leftSideHeader: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '1.7rem',
        fontWeight: '500',
        marginLeft: '5px',
        [theme.breakpoints.down('700')]: {
            margintop: '10px',
        },
    },
}));

function Logo() {
    const styles = logoStyles();

    return (
        <Link to="/dashboard">
            <div className={styles.leftSideHeader}>
                <span style={{ color: '#58D473', marginRight: '5px' }}>
                    <Icon width="1.1em" icon={chefIcon} />
                </span>
                <span>Neighborhood Chef</span>
            </div>
        </Link>
    );
}

export default Logo;
