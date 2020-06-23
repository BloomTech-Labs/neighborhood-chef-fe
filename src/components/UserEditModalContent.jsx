import React, { useEffect, useState, useRef } from 'react'

import {makeStyles} from '@material-ui/styles';
import { textBoxStyles } from "../styles";

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Geocoder from "react-mapbox-gl-geocoder";

import { UPDATE_USER } from '../graphql/users/user-mutations';
import { axiosWithAuth } from '../utilities/axiosWithAuth';
import { print } from 'graphql'

import { saveUserUpdateInfo } from '../utilities/actions'
import { useDispatch, useSelector } from 'react-redux';


const styles = makeStyles( theme =>{

    return({
        container: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "white",
            width: "33vw",
            height: '75vh',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            
            "& p:first-child": {
                alignSelf: "flex-end",
                marginRight: "5%",
                marginTop: "5%",
                fontWeight: "bolder"
            },

            "& h4": {
                marginTop: "5%"
            },

            [theme.breakpoints.down('md')] : {
                width: "66vw"
            },

            [theme.breakpoints.down('sm')] : {
                width: "88vw"
            }


        },
        formContainer: {

            width: "100%",
            marginTop: "7%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            "& button": {
                margin: "6% auto",
                fontSize: "125%"
            }
        },
        labels: {

            width: "90%",
            marginTop: "3%",

            "& > span": {
                alignSelf: "flex-start",
                marginLeft: "10%"
            },

            "& > div": {
                width: "75%"
            }
        }
    })
})



function UserEditModalContent (props) {

    const mapAccess = {
    mapboxApiAccessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
    };

    const userInfoFromSessionStorage  = JSON.parse(sessionStorage.getItem('user'));  

    const classes = styles();
    const textBoxClass = textBoxStyles();

    const addressLabel = useRef();
    const geoInput = useRef();

    const dispatch = useDispatch();
    const userInputInfo = useSelector(state => state.savedUserUpdateInfo);

    const [userInputs, setUserInputs] = useState({
        firstName: userInfoFromSessionStorage.firstName,
        lastName: userInfoFromSessionStorage.lastName,
        gender: userInfoFromSessionStorage.gender,
        address: userInfoFromSessionStorage.address
    });

    const {firstName, lastName, gender, address} = userInputs;

    useEffect(() => {

        console.log("here");

        const geocoder = document.querySelector(".geocoder-container");

        console.log(geocoder);

        geoInput.current = geocoder.children[0].children[0];
        
        geoInput.current.name = "address";

        geoInput.current.classList.add(textBoxClass.addressInput);
        geoInput.current.style.marginTop = 0;
        geoInput.current.style.paddingBottom = "3%";

        address ? (
        geoInput.current.value = address
        ) : (
        geoInput.current.value = userInputInfo.address
        )

        addressLabel.current = geoInput.current;

      }, []);


      const handleChange = e => {

        if(e.preventDefault) e.preventDefault();

        setUserInputs({
            ...userInputs,
            [e.target.name]: e.target.value
          });

        dispatch(saveUserUpdateInfo({
            ...userInputInfo,
            [e.target.name]: e.target.value
          }));

      }

      const handleAddressChange = e => {

        setUserInputs({
            ...userInputs,
            latitude: e.latitude,
            longitude: e.longitude
          });
        
        dispatch(saveUserUpdateInfo({
            ...userInputInfo,
            latitude: e.latitude,
            longitude: e.longitude
        }))

      }

      const handleSubmit = async e => {
        
        e.preventDefault();
        
        try{
           const updateResponse = await axiosWithAuth()({
                                url: `${process.env.REACT_APP_BASE_URL}/graphql`,
                                method: "post",
                                data: {
                                query: print(UPDATE_USER),
                                variables: { 
                                    input: {
                                    ...userInputInfo,
                                    address: geoInput.current.value
                                    },
                                    id: userInfoFromSessionStorage.id },
                                },
                                });
            
            if(!(updateResponse.status === 200)) throw new Error("Problem with update request");
            else {

                const userInfoFromSessionStorage = JSON.parse(sessionStorage.getItem('user'));
                sessionStorage.setItem('user', JSON.stringify({...userInfoFromSessionStorage, 
                                                               ...userInputInfo, 
                                                               address: geoInput.current.value}));
                props.toggleOpen();
            }

        } catch(err){
            console.dir(err);
        }
      }
        
    return (
        <div className={classes.container}>
            <Typography onClick={props.toggleOpen}>X</Typography>
            <Typography variant="h4">Change User Information</Typography>
            <div className={classes.formContainer}>
                <FormControlLabel 
                className={classes.labels}
                label="First Name"
                labelPlacement="top"
                control={<TextField
                            name="firstName"
                            type="text"
                            onChange={handleChange}
                            value={firstName ? firstName : userInputInfo.firstName}
                            />}
                />
                <FormControlLabel 
                className={classes.labels}
                label="Last Name"
                labelPlacement="top"
                control={<TextField
                            name="lastName"
                            type="text"
                            onChange={handleChange}
                            value={lastName ? lastName : userInputInfo.lastName}
                            />}
                />
                <FormControlLabel
                className={classes.labels}
                label="Gender"
                labelPlacement="top"
                control={
                    <Select
                        labelId="gender-label"
                        value={gender ? gender : userInputInfo.gender}                    
                        onChange={handleChange}
                        label="Gender"
                        name="gender"
                        >
                            <MenuItem value={"male"}>Male</MenuItem>
                            <MenuItem value={"female"}>Female</MenuItem>
                            <MenuItem value={"other"}>Other</MenuItem>
                    </Select>
                    }
                />
                <FormControlLabel
                className={classes.labels}

                label="Address"
                labelPlacement="top"
                control={<div className="geocoder-container">
                            <Geocoder
                                {...mapAccess}
                                name="address"
                                onSelected={handleAddressChange}
                                limit={2}
                                viewport={"viewport"}
                                hideOnSelect={true}
                                queryParams={"queryParams"}
                                updateInputOnSelect={true}
                            />
                        </div>}
                />
                <Button type="submit" onClick={handleSubmit}>Update</Button>

            </div>
        </div>
    )
 
}

export default UserEditModalContent