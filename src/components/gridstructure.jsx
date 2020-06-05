import React, { useEffect, useState } from 'react';
import Header from './header';
import Sidebar from './dashboard/Sidebar';
import Logo from './logo';
import VariableMainContent from './variableMainContent';
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { useLocation} from 'react-router-dom';

const styles = makeStyles({
    "grid-container":{
        display: "grid",
        "grid-template-columns": "2fr 8fr",
        "grid-template-rows": "1fr 9fr",
        gap: "1px 1px",
        "grid-template-areas":' "Logo Header" "Sidebar Variable" ',
        height: "100vh"
    },
    "Variable":{
        gridArea: "Variable",
        border: "2px solid black"
    },
    "Header":{
        gridArea: "Header",
        height: "10vh"
    },
    "Sidebar":{
        gridArea: "Sidebar",
        paddingLeft: "5%"
    },
    "Logo": {
        gridArea: "Logo",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",

        "& *": {
            width: "100%",

            "&:first-child": {
                width: "20%"
            },

            "&:last-child": {
                width: "115%"
            }
        }
    }
});

function GridStructure (props){

    const classes = styles();

    const location = useLocation();
    const [urlLocation, setUrlLocation ] = useState(location.pathname.split("/")[1]);
    useEffect(() => {
        setUrlLocation(location.pathname.split("/")[1]);
    }, [location]);

    const [ open, setOpen ] = useState(false);

    const openDrawer = () => {
        setOpen(true);
    }

    const closeDrawer = () => {
        setOpen(false);
    }

    return (
        <div className={classes["grid-container"]}>
            <div className={classes["Logo"]} >
                <Logo />
            </div>
            <div className={clsx({[classes["Header"]]: (!open), [classes["Header-Shifted"]]: open})}>
                <Header openDrawer={openDrawer}/>
            </div>
            <div className={classes["Sidebar"]}>
                <Sidebar active={urlLocation}/>
            </div>
            <div className={classes["Variable"]}>
                <VariableMainContent />
            </div>
        </div>
    );
}

export default GridStructure;