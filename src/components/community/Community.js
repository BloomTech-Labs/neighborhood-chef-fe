import React from 'react';
import { cardStyles } from '../../styles';
import AuthHeader from '../shared/AuthHeader.js';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import food from '../../assets/food.jpg';

const Community = () => {
    const cardClass = cardStyles();

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
                                We invite you to engage with your local
                                communities with our new social media app. As we
                                are just starting, we have not placed
                                restrictions or boundaries for inviting others
                                to your culinary events. Those boundaries will
                                come later in our journey to help you only see
                                events from your neighborhood. We look forward
                                to making this journey with you!
                            </Typography>
                            <Typography>Bon appétit!</Typography>
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

export default Community;
