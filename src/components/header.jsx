import React from 'react';
import PersistentHeader from './headerPartitionPersistent';
import VariableHeader from './headerPartitionVariable';
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";

const styles = makeStyles({
    "container": {
        display: "flex",
    },
    "header-persistent":{
        minWidth: "100vw"
    },
    "header-variable": {
       
    }
})


function Header (props) {
    
    const classes = styles();
    
    return (
        <div className={classes["container"]}>
            <VariableHeader className={classes["header-variable"]}/>
            <PersistentHeader openDrawer={props.openDrawer} className={classes["header-persistent"]}/> 
        </div>
    );
}


export default Header; 

