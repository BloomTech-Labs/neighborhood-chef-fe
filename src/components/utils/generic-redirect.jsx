import { useHistory, useParams } from 'react-router-dom';
import ls from 'local-storage';
import jwt from 'jwt-decode';
import { useDispatch } from 'react-redux';

import { axiosWithAuth } from '../../utilities/axiosWithAuth';
import { print } from 'graphql';
import { USER_BY_EMAIL } from '../../graphql/users/user-queries';
import { saveUser } from '../../utilities/actions';

function GenericRedirect(props) {
    const { push } = useHistory();
    const { redirect_path } = useParams();
    const dispatch = useDispatch();

    const getInitialUserDataAndRedirectOnSuccess = () => {
        const token = ls.get('access_token');
        const decodedToken = jwt(token).sub;
        axiosWithAuth()({
            url: `${process.env.REACT_APP_BASE_URL}/graphql`,
            method: 'post',
            data: {
                query: print(USER_BY_EMAIL),
                variables: {
                    queryParams: { email: decodedToken },
                    mileRadius: 10,
                },
            },
        })
            .then((res) => {
                dispatch(saveUser(res.data.data.Users[0]));
                push(`/${redirect_path}`);
            })
            .catch((err) => {
                console.dir(err);
            });
    };

    if (!ls.get('access_token')) {
        push(`/generic-redirect/${redirect_path}`);
    } else {
        getInitialUserDataAndRedirectOnSuccess();
    }

    return null;
}

export default GenericRedirect;
