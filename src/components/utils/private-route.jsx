import React, { useEffect } from 'react';
import { useHistory, Route } from 'react-router-dom';
import useValidate from '../../hooks/useValidate';

//const qs = require('querystring');

function PrivateRoute({ component: Component, path, ...props }) {
    const { push } = useHistory();

    let env = process.env.REACT_APP_FRONT_END_BASE_URL.includes('localhost')
        ? 'development'
        : 'production';

    const { validate, response, requestMade } = useValidate();

    useEffect(() => {
        validate(env);
        // eslint-disable-next-line
    }, [path, Component]);

    console.log(response);

    if (!response) {
        return <p>...loading</p>;
    }

    if (
        env === 'production' &&
        response.status.toString().match(/2[0-9][0-9]/) &&
        response.data.active
    ) {
        return <Route {...props} path={path} component={Component} />;
    } else if (env === 'development' && response.data.success) {
        return <Route {...props} path={path} component={Component} />;
    } else if (requestMade) {
        push('/');
    }
    return null;
}

export default PrivateRoute;
