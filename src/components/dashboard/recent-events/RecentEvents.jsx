import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../../../utilities/axiosWithAuth';
import { useSelector } from 'react-redux';
import RecentCard from './recent-card/RecentCard';
import { print } from 'graphql';
import { RECENT_EVENTS } from '../../../graphql/users/user-queries';
import Typography from '@material-ui/core/Typography';

//icon imports
import CircularProgress from '@material-ui/core/CircularProgress';

const RecentEvents = () => {
    const me = useSelector((state) => state.user);
    const update = useSelector((state) => state.update);
    const [isFetching, setIsFetching] = useState(true);
    const [eventList, setEventList] = useState([]);
    const [favoriteEvents, setFavoriteEvents] = useState([]);

    const sortEvents = (events) =>
        events.sort((a, b) => b.createDateTime - a.createDateTime);

    useEffect(() => {
        if (me.id) {
            setIsFetching(true);
            axiosWithAuth()({
                url: `${process.env.REACT_APP_BASE_URL}/graphql`,
                method: 'post',
                data: {
                    query: print(RECENT_EVENTS),
                    variables: {
                        queryParams: {
                            id: me.id,
                        },
                    },
                },
            })
                .then((res) => {
                    const userEventLists = res.data.data.Users[0].UserEvents;
                    const allEvents = [
                        ...userEventLists.owned,
                        ...userEventLists.invited,
                        ...userEventLists.attending,
                    ];
                    setEventList(sortEvents(allEvents));
                    setFavoriteEvents(
                        userEventLists.favorited.map((obj) => obj.id)
                    );
                })
                .catch((err) => {
                    console.log(err.message);
                })
                .finally((res) => {
                    setIsFetching(false);
                });
        }
        // eslint-disable-next-line
    }, [update, me]);

    return (
        <div>
            <Typography
                variant="h4"
                //with minimal elements on dashboard, moving this to center for better styling. to be moved back once feed and other components are added back
                style={
                    { textAlign: 'center', marginBottom: '10px' } // {{ marginLeft: "12px", marginBottom: "5px" }}
                }
            >
                Recent Events
            </Typography>
            <div
                style={{
                    overflow: 'auto',
                    height: '80vh',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-evenly',
                        textAlign: 'left',
                    }}
                >
                    {isFetching ? (
                        <div style={{ textAlign: 'center' }}>
                            <CircularProgress style={{ color: '#58D573' }} />
                        </div>
                    ) : eventList.length > 0 ? (
                        eventList.map((ele) => (
                            <RecentCard
                                {...ele}
                                key={ele.id}
                                // favoriteEvents={favoriteEvents.includes(ele.id)}
                                favoriteEvents={favoriteEvents}
                                setFavoriteEvents={setFavoriteEvents}
                            />
                        ))
                    ) : (
                        <Typography style={{ marginTop: '20px' }}>
                            No recently created events.
                        </Typography>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RecentEvents;
