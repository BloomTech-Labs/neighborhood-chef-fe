import React from 'react';
import {
    // buttonStyles,
    cardStyles,
} from '../../styles';
import AuthHeader from '../shared/AuthHeader.js';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import food from '../../assets/food.jpg';

const AboutUs = () => {
    const cardClass = cardStyles();
    // const buttonClass = buttonStyles();

    return (
        <>
            <AuthHeader />
            <div className="landing-page-container">
                <div className="landing-page-left">
                    <Card
                        className={`${cardClass.root} ${cardClass.landingPage}`}
                    >
                        <CardContent style={{ marginTop: '2%' }}>
                            <Typography paragraph>
                                Welcome to Neighborhood Chef, a powerful new
                                tool to help you engage with your community,
                                make friends, learn new recipes, and, most
                                importantly, eat good food. Well, maybe not most
                                important. We'll let you decide that. :)
                            </Typography>
                            <Typography paragraph>
                                Built with love as a completely open source
                                project. Learn more and how to contribute{' '}
                                <a
                                    style={{
                                        color: 'gray',
                                        textDecoration: 'underline',
                                    }}
                                    href={
                                        'https://github.com/Lambda-School-Labs/neighborhood-chef-fe'
                                    }
                                    alt="github-neighborhood-chef"
                                >
                                    here
                                </a>
                            </Typography>
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

export default AboutUs;
