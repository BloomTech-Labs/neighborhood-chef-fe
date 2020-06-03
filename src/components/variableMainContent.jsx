import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import VariableHeader from './headerPartitionVariable';
import Dashboard from './dashboard/Dashboard';
import ViewEvents from "./events/view-events/ViewEvents";
import CreateEvent from "./events/create-event/CreateEvent";



function VariableMainContent (props){
    const location = useLocation();
    const [urlLocation, setUrlLocation ] = useState(location.pathname.split("/")[1]);
    useEffect(() => {
        setUrlLocation(location.pathname.split("/")[1]);
    }, [location]);

    switch(urlLocation) {

        case(!urlLocation):
            return <p>homepage</p>;
            break;
        case "grid":
            return (<Dashboard />)
            break;
        case "dashboard": 
            return <Dashboard />
            break;
        case "create-event":
            return <CreateEvent />
            break;
        case "view-events":
            return <ViewEvents />
            break;
        default: 
            return <p>you did a bad</p>
    }
}

export default VariableMainContent;