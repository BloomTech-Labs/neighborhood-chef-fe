import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Dashboard from '../../../dashboard/Dashboard';
import ViewEvents from '../../../calender/ViewEvents';
import CreateEvent from '../../../create-events/CreateEvent';
import FullEvent from '../../../event/FullEvent';

function VariableMainContent(props) {
    const location = useLocation();
    const [urlLocation, setUrlLocation] = useState(
        location.pathname.split('/')[1]
    );
    useEffect(() => {
        setUrlLocation(location.pathname.split('/')[1]);
    }, [location]);

    switch (urlLocation) {
        case !urlLocation:
            return <p>homepage</p>;
        case 'grid':
            return <Dashboard />;
        case 'dashboard':
            return <Dashboard />;
        case 'create-event':
            return <CreateEvent />;
        case 'view-events':
            return <ViewEvents />;
        case 'events':
            return <FullEvent {...props} />;
        default:
            return <p>you did a bad</p>;
    }
}

export default VariableMainContent;
