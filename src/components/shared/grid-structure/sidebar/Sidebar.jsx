import React from 'react';

//icons imports
import houseDoor from '@iconify/icons-bi/house-door';
import calendarOutlined from '@iconify/icons-ant-design/calendar-outlined';
import calendarPlus from '@iconify/icons-mdi/calendar-plus';

//component import
import SidebarButton from './sidebar-button/SidebarButton';

const buttonList = [
    {
        active: false,
        link: 'dashboard',
        text: 'My Neighborhood',
        icon: houseDoor,
    },
    {
        active: false,
        link: 'view-events',
        text: 'Calendar',
        icon: calendarOutlined,
    },
    {
        active: false,
        link: 'create-event',
        text: 'Create Event',
        icon: calendarPlus,
    },
];

const Sidebar = ({ active }) => {
    return (
        <div
            style={{
                paddingRight: '20px',
                width: '255px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            <div>
                <nav
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        textAlign: 'left',
                    }}
                >
                    {buttonList.map((ele) => (
                        <SidebarButton
                            {...ele}
                            active={active === ele.link}
                            key={ele.text}
                        />
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
