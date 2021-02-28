import React from 'react';
// import Feed from "./Feed";
import RecentEvents from './recent-events/RecentEvents';

const Dashboard = () => {
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
                <div>
                    <RecentEvents />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
