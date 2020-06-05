import React from 'react';
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { Icon, InlineIcon } from '@iconify/react';
import bxBell from '@iconify/icons-bx/bx-bell';
import magnifyingGlass from '@iconify/icons-entypo/magnifying-glass';
import Avatar from '@material-ui/core/Avatar';

const styles = makeStyles(theme => ({
    "container": {
        width: "20vw",
        height: "10vh",
        border: "2px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        "& *":{
            margin: "0 4%"
        },
        
        "& svg":{
            fontSize: "180%",
            color: "gray"
        }
    },
    "avatar": {
       width: theme.spacing(3),
       height: theme.spacing(3),
       border: "1px solid green"
    }
}));

function PersistentHeader (props){

    const classes = styles();

    return(
        <section className={classes["container"]} >
            <Icon icon={bxBell} />
            <Icon icon={magnifyingGlass} />
            <Avatar onClick={props.openDrawer} className={classes["avatar"]} alt="Picture User Avatar" src="#" /> 
        </section>
    );
}

export default PersistentHeader;