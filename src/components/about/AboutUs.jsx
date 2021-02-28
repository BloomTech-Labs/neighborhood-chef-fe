import React from 'react';
import {
    // buttonStyles,
    cardStyles,
} from '../../styles';
import AuthHeader from '../shared/AuthHeader';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import food from '../../assets/food.jpg';
import { landingPageStyles } from '../../styles';

const AboutUs = () => {
    const cardClass = cardStyles();
    const styles = landingPageStyles();
    // const buttonClass = buttonStyles();

    return (
        <>
            <AuthHeader />
            <div className={styles.landingPageContainer}>
                <div className={styles.landingPageLeft}>
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
                    className={styles.landingPageRight}
                    style={{ overflow: 'hidden' }}
                >
                    <img src={food} alt="food community" height="100%" />
                </div>
            </div>
        </>
    );
};

export default AboutUs;
