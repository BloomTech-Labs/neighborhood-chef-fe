import React from 'react';
import { Icon } from '@iconify/react';
import pencilIcon from '@iconify/icons-mdi/pencil';
import createIcon from '@iconify/icons-gridicons/create';
import shareIcon from '@iconify/icons-icons8/share';
import shapeOutline from '@iconify/icons-mdi/shape-outline';
import { useSelector } from 'react-redux';
import { headerStyles } from './CreateEvent.styles';

const CreateEventHeader = () => {
    const page = useSelector((state) => state.page);
    const styles = headerStyles();
    return (
        <div className={`${styles.root}`}>
            <div className={page === 1 ? styles.active : styles.notActive}>
                <Icon icon={pencilIcon} className={`${styles.icon}`} />
                <h3>Details</h3>
            </div>
            <div className={page === 2 ? styles.active : styles.notActive}>
                <Icon icon={shapeOutline} className={`${styles.icon}`} />
                <h3>Preferences</h3>
            </div>
            <div className={page === 3 ? styles.active : styles.notActive}>
                <Icon icon={createIcon} className={`${styles.icon}`} />
                <h3>Create</h3>
            </div>
            <div className={page === 4 ? styles.active : styles.notActive}>
                <Icon icon={shareIcon} className={`${styles.icon}`} />
                <h3>Share</h3>
            </div>
        </div>
    );
};

export default CreateEventHeader;
