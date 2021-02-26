import React from 'react';
import { buttonStyles, cardStyles } from '../../styles';
import ls from 'local-storage';
import { nanoid } from 'nanoid';
import AuthHeader from '../shared/AuthHeader.js';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import food from '../../assets/food.jpg';

const qs = require('querystring');
const crypto = require('crypto-browserify');

const Login = () => {
    const cardClass = cardStyles();
    const buttonClass = buttonStyles();

    const handleClick = (e) => {
        e.preventDefault();
        ls.set('code_verifier', nanoid(43));

        const hash = crypto
            .createHash('sha256')
            .update(ls.get('code_verifier'))
            .digest('base64')
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=/g, '');
        const query = {
            client_id: process.env.REACT_APP_CLIENT_ID,
            response_type: 'code',
            scope: 'openid',
            redirect_uri: `${process.env.REACT_APP_FRONT_END_BASE_URL}/login-redirect-url`,
            state: 'state-bsaWCD8F0dkd85REyU87',
            code_challenge_method: 'S256',
            code_challenge: hash,
        };

        const redirectURL = `https://dev-36383529.okta.com/oauth2/default/v1/authorize?${qs.stringify(
            query
        )}`;
        window.location.replace(`${redirectURL}`);
    };

    return (
        <>
            <AuthHeader />
            <div className="landing-page-container">
                <div className="landing-page-left">
                    <Card
                        className={`${cardClass.root} ${cardClass.landingPage}`}
                    >
                        <CardContent style={{ marginTop: '2%' }}>
                            <Typography variant="h3">
                                Login to Neighborhood Chef
                            </Typography>
                            <Typography
                                style={{ marginTop: '20px' }}
                                variant="caption"
                            >
                                <span style={{ opacity: '.6' }}>
                                    Choose to eat comfortably
                                </span>
                            </Typography>
                            <div
                                style={{ marginTop: '10%' }}
                                className={`${buttonClass.root} ${buttonClass.single}`}
                                onClick={handleClick}
                            >
                                <Typography variant="h5">
                                    Login Securely with Okta
                                </Typography>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div
                    className="landing-page-right"
                    style={{ overflow: 'hidden' }}
                >
                    <img src={food} alt="food community" height="100%" />
                </div>
            </div>
        </>
    );
};

export default Login;
