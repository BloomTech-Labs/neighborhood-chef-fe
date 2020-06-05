import React, { useEffect, useState } from 'react';
import Header from './header';
import Sidebar from './dashboard/Sidebar';
import Logo from './logo';
import VariableMainContent from './variableMainContent';
import ProfileDrawerContent from './profileDrawerContent';
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { useLocation } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';


const styles = makeStyles({
    "grid-container":{
        display: "grid",
        "grid-template-columns": "2fr 8fr",
        "grid-template-rows": "1fr 9fr",
        gap: "1px 1px",
        "grid-template-areas":' "Logo Header" "Sidebar Variable" ',
        height: "100vh"
    },
    "grid-container-shifted": {
        display: "grid",
        "grid-template-columns": "2fr 2fr 2fr 2fr",
        "grid-template-rows": "1fr 9fr",
        gap: "1px 1px",
    },
    "Variable":{
        gridArea: "Variable",
        border: "2px solid black"
    },
    "Variable-Shifted" : { 
        "grid-area": "2 / 2 / 3 / 4" 
    },
    "Header":{
        gridArea: "Header",
        height: "10vh"
    },
    "Header-Shifted": { 
        "grid-area": "1 / 2 / 2 / 4" 
    },
    "Sidebar":{
        gridArea: "Sidebar",
        paddingLeft: "5%"
    },
    "Sidebar-Shifted": { 
        "grid-area": "2 / 1 / 3 / 2" 
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
    },
    "Logo-Shifted": { 
        "grid-area": "1 / 1 / 2 / 2",
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
    },
    "Drawer-Container": {
        "grid-area": "1 / 4 / 3 / 5",
        width: "25vw"
    },
    "Drawer": {
        width: "25vw"
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
        <div className={clsx({[classes["grid-container"]]: (!open), [classes["grid-container-shifted"]]: open})}>
            <div className={clsx({[classes["Logo"]]: (!open), [classes["Logo-Shifted"]]: open})} >
                <Logo />
            </div>
            <div className={clsx({[classes["Header"]]: (!open), [classes["Header-Shifted"]]: open})}>
                <Header openDrawer={openDrawer}/>
            </div>
            <div className={clsx({[classes["Sidebar"]]: (!open), [classes["Sidebar-Shifted"]]: open})}>
                <Sidebar active={urlLocation}/>
            </div>
            <div className={clsx({[classes["Variable"]]: (!open), [classes["Variable-Shifted"]]: open})}>
                <VariableMainContent />
            </div>
            <div className={clsx({[classes["Drawer-Container"]]: open})}>
                <Drawer
                variant="persistent"
                open={open}
                anchor="right"
                className={clsx({[classes["Drawer"]]: open})}
                classes={{
                    paper: classes.Drawer
                }}
                >
                    <ProfileDrawerContent closeDrawer={closeDrawer} />
                </Drawer>
            </div>
        </div>
    );
}

export default GridStructure;