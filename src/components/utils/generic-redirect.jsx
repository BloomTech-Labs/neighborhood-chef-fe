import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ls from 'local-storage';
import jwt from "jwt-decode";
import { axiosWithAuth } from "../../utilities/axiosWithAuth";
import { print } from "graphql";
import { USER_BY_EMAIL } from "../../graphql/users/user-queries";


function GenericRedirect(props) {
  const { push } = useHistory();
  const { redirect_path } = useParams();


    const getInitialUserData = () => {
        const token = ls.get("access_token");
        const decodedToken = jwt(token).sub;
        axiosWithAuth()({
          url: `${process.env.REACT_APP_BASE_URL}/graphql`,
          method: "post",
          data: {
            query: print(USER_BY_EMAIL),
            variables: { input: { email: decodedToken } },
          },
        }).then((res) => {
          sessionStorage.setItem(
            "user",
            JSON.stringify(res.data.data.getUserByEmail)
          );
        });
    }

    const redirectOnLoginSuccess = async () => {
        await getInitialUserData();
        push(`/${redirect_path}`); 
    }

    const { push } = useHistory();
    const { redirect_path } = useParams();

    if(!ls.get('access_token')) { push(`/generic-redirect/${redirect_path}`); }
    else { redirectOnLoginSuccess(); }

    return null

}

export default GenericRedirect;
