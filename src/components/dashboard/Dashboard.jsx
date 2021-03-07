import React, { useState } from 'react';
// import Feed from "./Feed";
import RecentEvents from './recent-events/RecentEvents';
import DashboardTabs from './dashboard-tabs';
import EventView from './event-view';
const Dashboard = () => {
    const [currentTab, selectCurrentTab] = useState(1);

    return (
        <div style={{ display: 'flex', width: '100%' }}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    alignItems: 'center',
                }}
            >
                <DashboardTabs
                    currentTab={currentTab}
                    selectCurrentTab={selectCurrentTab}
                />

                <EventView currentTab={currentTab} />
            </div>
        </div>
    );
};

export default Dashboard;
