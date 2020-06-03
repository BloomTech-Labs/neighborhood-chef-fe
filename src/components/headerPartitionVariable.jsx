import React from 'react';

import { makeStyles, createMuiTheme } from "@material-ui/core/styles";

const styles = makeStyles({
    "container": {
        width: "100%",
        height: "10vh",
        border: "2px solid black"
    }
});


function VariableHeader (props){

    const classes = styles();

    return(
        <section className={classes["container"]} >
            <p>Variable</p>
        </section>
    );
}

export default VariableHeader;