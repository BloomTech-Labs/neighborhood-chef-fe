import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

function ChangePassword() {
    const [passwordData, setPasswordData] = useState({});
    const [error, setError] = useState('');

    const { push } = useHistory();
    const { string } = useParams();

    const id = string.split('-')[0];
    const hash = string.split('-')[1];

    const handleChange = (e) => {
        e.preventDefault();
        setError('');
        setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (passwordData.password === passwordData.confirmPassword) {
            try {
                const body = {
                    hash,
                    id,
                    password: passwordData.password,
                };

                await axios.post(
                    `${process.env.REACT_APP_BASE_URL}/auth/initialChangePassword`,
                    body
                );
                push('/');
            } catch (err) {
                setError(
                    'Password does not meet requirements. Please ensure you have a capital letter and a special character.'
                );
                console.dir(err);
            }
        } else setError('Passwords do not match.');
    };

    return (
        <form
            style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '50px',
            }}
            onSubmit={handleSubmit}
        >
            <input
                type="password"
                name="password"
                placeholder=" Enter your new password"
                onChange={handleChange}
            ></input>
            <input
                type="password"
                name="confirmPassword"
                placeholder=" Confirm New Password"
                onChange={handleChange}
            ></input>
            <button>Change Password</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
}

export default ChangePassword;
