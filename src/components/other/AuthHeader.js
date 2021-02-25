import React from 'react';
import chefIcon from '@iconify/icons-whh/chef';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { buttonStyles } from '../../styles';

const AuthHeader = () => {
    const location = useLocation();
    const url = location.pathname.split('/')[1];
    const buttonClass = buttonStyles();
    const { push } = useHistory();
    return (
        <div
            style={{
                background: '#FCFCFC',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: '0px 4px 50px rgba(0, 0, 0, 0.06)',
                height: '10vh',
                width: '100vw',
            }}
        >
            <div style={{ paddingLeft: '10px' }}>
                <Link to="/">
                    <div
                        className="left-side-header"
                        style={{ width: '200px' }}
                    >
                        <span style={{ color: '#58D473', marginRight: '5px' }}>
                            <Icon width="1.1em" icon={chefIcon} />
                        </span>
                        <span style={{ paddingLeft: '10px' }}>
                            Neighborhood Chef
                        </span>
                    </div>
                </Link>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    width: '100%',
                }}
            >
                <button
                    className={`${buttonClass.root} ${
                        url !== 'community' && buttonClass.notActive
                    }`}
                    onClick={() => push('/community')}
                >
                    <Typography>Community</Typography>
                </button>

                <button
                    className={`${buttonClass.root} ${
                        url !== 'about' && buttonClass.notActive
                    }`}
                    onClick={() => push('/about')}
                >
                    <Typography>About&nbsp;Us</Typography>
                </button>

                <div>&nbsp;</div>

                <div>&nbsp;</div>

                <div>&nbsp;</div>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '1.6rem',
                    marginRight: '3%',
                }}
            >
                {url !== 'login' && url !== '' && (
                    <button
                        className={`${buttonClass.root} ${buttonClass.single}`}
                        onClick={() => push('/')}
                    >
                        <Typography>Login</Typography>
                    </button>
                )}

                {url !== 'register' && (
                    <button
                        className={`${buttonClass.root} ${buttonClass.single}`}
                        onClick={() => push('/register')}
                    >
                        <Typography>Register</Typography>
                    </button>
                )}
            </div>
        </div>
    );
};

export default AuthHeader;
