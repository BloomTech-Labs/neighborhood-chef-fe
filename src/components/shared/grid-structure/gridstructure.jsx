import React, { useEffect, useState } from 'react';
import Header from './header/header';
import Sidebar from './sidebar/Sidebar';
import Logo from './logo/logo';
import ResponsiveMenu from './responsive-menu/ResponsiveMenu';
import VariableMainContent from './variable-main-content/variableMainContent';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//kyles imports
import ls from 'local-storage';
import jwt from 'jwt-decode';
import { USER_BY_EMAIL } from '../../../graphql/users/user-queries';
import { axiosWithAuth } from '../../../utilities/axiosWithAuth';
import { print } from 'graphql';
import { saveUser } from '../../../utilities/actions';

const styles = makeStyles((theme) => {
    return {
        'grid-container': {
            display: 'grid',
            'grid-template-columns': '2fr 8fr',
            'grid-template-rows': '1fr 9fr',
            gap: '1px 1px',
            'grid-template-areas': ' "Logo Header" "Sidebar Variable" ',
            height: '100vh',

            [theme.breakpoints.down('960')]: {
                height: '100%',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
            },
        },
        Variable: {
            gridArea: 'Variable',
        },
        Header: {
            gridArea: 'Header',
            height: '10vh',
        },
        Sidebar: {
            gridArea: 'Sidebar',
            paddingLeft: '5%',

            [theme.breakpoints.down('960')]: {
                display: 'none',
                visibility: 'none',
            },
        },
        Logo: {
            gridArea: 'Logo',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',

            '& *': {
                width: '100%',

                '&:first-child': {
                    width: '20%',
                },

                '&:last-child': {
                    width: '115%',
                },
            },

            [theme.breakpoints.down('960')]: {
                '&  a > div:first-child': {
                    paddingTop: '3%',
                    marginLeft: '25%',
                },
            },
            [theme.breakpoints.down('700')]: {
                display: 'none',
            },
        },
        'Drawer-Container': {
            'grid-area': '1 / 4 / 3 / 5',
            width: '25vw',
        },
        Drawer: {
            width: '25vw',
        },
        hamburgerMenu: {
            display: 'none',
            visibility: 'none',

            [theme.breakpoints.down('960')]: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100vw',
                position: 'sticky',
                bottom: '0',
                height: '10vh',
                'z-index': 2,
                background: 'white',
            },
        },
    };
});

function GridStructure(props) {
    const dispatch = useDispatch();
    const classes = styles();
    const location = useLocation();
    const [urlLocation, setUrlLocation] = useState(
        location.pathname.split('/')[1]
    );
    useEffect(() => {
        setUrlLocation(location.pathname.split('/')[1]);
    }, [location]);

    useEffect(() => {
        if (ls.get('access_token')) {
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
                })
                .catch((err) => {
                    console.log(err);
                    console.dir(err);
                });
        }
    }, [dispatch]);

    return (
        <div className={classes['grid-container']}>
            <div className={classes['Logo']}>
                <Logo />
            </div>
            <div className={classes['Header']}>
                <Header />
            </div>
            <div className={classes['Sidebar']}>
                <Sidebar active={urlLocation} />
            </div>
            <div className={classes['Variable']}>
                <VariableMainContent {...props} />
            </div>
            <div className={classes['hamburgerMenu']}>
                <ResponsiveMenu />
            </div>
        </div>
    );
}

export default GridStructure;
