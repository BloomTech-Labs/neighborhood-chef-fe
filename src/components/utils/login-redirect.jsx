import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import ls from 'local-storage';
const qs = require('querystring');

function LoginRedirect (props){

    const [authenticated, setAuthenticated] = useState(false);
    const { push } = useHistory();

    useEffect(() => {

        const getToken = async () => {
           try {

            const code = props.location.search.split('=')[1].split("&")[0];
            const verifier = ls.get('code_verifier');

            const headers = {
                "accept": "application/json",
                "cache-control": "no-cache",
                "content-type": "application/x-www-form-urlencoded"
            }
            const url = `https://dev-599411.okta.com/oauth2/default/v1/token`;
            const body = {
                grant_type: "authorization_code",
                client_id: "0oa9qxckmhGd2aLsZ4x6",
                redirect_uri: `${process.env.REACT_APP_FRONT_END_BASE_URL}/login-redirect-url`,
                code,
                code_verifier: verifier
            }

            const response = await axios.post(url, qs.stringify(body), {headers});
            if(response.status === 200) { 
             
                ls.set("access_token", response.data.access_token);
                ls.set("id_token", response.data.id_token);
                setAuthenticated(true);
            }
        }catch(err){
            console.dir(err.message);
        }
    }

    getToken();
  
    }, []);

    if (authenticated) push("/generic-redirect/dashboard")

    if (!authenticated) return <p>redirecting...</p>
    else return null
    
};

export default LoginRedirect;
