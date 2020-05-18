import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';



function ChangePassword () {

    const [ passwordData, setPasswordData ] = useState({});

    const { push } = useHistory();
    const { string } = useParams();

    const id = string.split("-")[0];
    const hash = string.split("-")[1];

    const handleChange = e => {
        e.preventDefault();

        setPasswordData({...passwordData, 
                         [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

       try{ 
           const body = {
            hash,
            id,
            password: passwordData.password
        };

        const response = await axios.post("http://localhost:5100/auth/initialChangePassword", body);
        push('/login');
        }catch(err){
            console.dir(err);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="password"placeholder=" Enter your new password" onChange={handleChange}></input>
            <input type="text" name="confirmPassword" placeholder=" Confirm New Password" onChange={handleChange}></input>
            <button>Change Password</button>
        </form>
    )
}

export default ChangePassword; 