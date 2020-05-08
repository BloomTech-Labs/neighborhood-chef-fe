import React from "react";

import { Icon } from '@iconify/react';
import pencilIcon from '@iconify/icons-mdi/pencil';
import createIcon from '@iconify/icons-gridicons/create';
import shareIcon from '@iconify/icons-icons8/share';

const CreateEventHeader = ({ page }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Icon
                    width="1.1em"
                    icon={pencilIcon}
                    style={{ fontSize: '3.4rem', color: 'gray' }}
                />
                <h3>Details</h3>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <p>icon</p>
                <h3>Preferences</h3>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Icon
                    width="1.1em"
                    icon={createIcon}
                    style={{ fontSize: '3.4rem', color: 'gray' }}
                />
                <h3>Create</h3>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Icon
                    width="1.1em"
                    icon={shareIcon}
                    style={{ fontSize: '3.4rem', color: 'gray' }}
                />
                <h3>Share</h3>
            </div>

        </div>
    )
}

export default CreateEventHeader;