import React from 'react';
// import Feed from "./Feed";
import RecentEvents from './recent-events/RecentEvents';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="dashboard-main">
                <div>
                    <RecentEvents />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
