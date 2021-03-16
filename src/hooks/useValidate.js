import { useState } from 'react';
import ls from 'local-storage';
import axios from 'axios';
import { axiosWithAuth } from '../utilities/axiosWithAuth';
import qs from 'querystring';

function useValidate() {
    const [response, setResponse] = useState(null);
    const [requestMade, setRequestMade] = useState(false);

    const validate = async (env) => {
        let res;
        try {
            if (ls.get('access_token')) {
                if (env === 'production') {
                    const body = {
                        token: ls.get('access_token'),
                        token_type_hint: 'access_token',
                        client_id: process.env.REACT_APP_CLIENT_ID,
                    };
                    res = await axios.post(
                        'https://dev-36383529.okta.com/oauth2/default/v1/introspect',
                        qs.stringify(body)
                    );
                    setResponse(res);
                } else {
                    res = await axiosWithAuth().post(
                        'http://localhost:5100/authenticate',
                        {}
                    );
                    setResponse(res);
                }
                setRequestMade(true);
            }
        } catch (err) {
            console.dir(err);
        }
    };

    return { response, requestMade, validate };
}

export default useValidate;
