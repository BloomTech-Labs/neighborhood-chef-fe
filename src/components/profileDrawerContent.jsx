import React from 'react';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles'


const styles = makeStyles(theme => {

    return {
        "container": {
            display: "flex",
            flexDirection: "column",
            paddingTop: "3.5vh",
            padding: "0 5%",
            background: "lightgrey",
            height: "100vh",
            overflowY: "scroll"
        },
        "avatar-container": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "2%"
        },
        "avatar": {
            width: theme.spacing(13),
            height: theme.spacing(13),
            fontSize: "200%",
            marginBottom: "3%"
        },
        "middle-content-container": {
            marginTop: "2%",

            "& h6": {
                fontWeight: "bold"
            },

            "& p": {
                marginTop: "2%",
                marginBottom: "5%"
            }
        },
        "bottom-content-container": {

            "& section" : {
                minHeight: "20vh",
                background: "white",
                margin: "4% 0",
                borderRadius: "10px"
            }
        },
        "bottom-header-container": {
            display: "flex",
            marginBottom: "5%",
            
            "& h6:first-child": {
                flexBasis: "75%"
            },

            "& h6:last-child": {
                flexBasis: "25%"
            }
        }
    }
})

function ProfileDrawerContent (props) {

    const classes = styles();

    return (
        <section className={classes.container}>
            <Typography variant="h5" onClick={props.closeDrawer}>{"> Profile"}</Typography>
            <div className={classes["avatar-container"]}>
                <Avatar className={classes.avatar} src="#" alt="Profile Avatar" />
                <Typography>First Last</Typography>
                <Typography>Edit Profile</Typography>
            </div>
            <div className={classes["middle-content-container"]}>
                <Typography variant="h6">Description</Typography>
                <Typography >Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Accusantium debitis 
                    voluptatum nisi iste?</Typography>
                <Typography variant="h6">Dietary Restrictions</Typography>
                <Typography>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Accusantium debitis 
                    voluptatum nisi iste?</Typography>
            </div>
            <div className={classes["bottom-content-container"]}>
                <div className={classes["bottom-header-container"]}>
                    <Typography variant="h6">Posts and Events</Typography>
                    <Typography variant="h6">See all</Typography>
                </div>
                <section>
                    card
                </section>
                <section>
                    card
                </section>
                <section>
                    card
                </section>
            </div>
        </section>

    )
}

export default ProfileDrawerContent;