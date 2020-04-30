/* 
This file is intended to show some basic examples using graphql with axios on the client side and can 
later be deleted altogether 
*/

// print is used to read the graphql object types we create
import { print } from "graphql";
import axios from "axios";

/* 
Import any queries or mutations into the file that we need to use. These are used to to tell the server
which query/mutation we are making, what variables need to be included with it, and what shape we want 
the data to be when it comes back. You generally need at ask for at least one data field.
*/

import { USER_BY_ID } from "./users/user-queries.js";
import { ALL_EVENTS } from "./events/event-queries.js";
import { UPDATE_EVENT } from "./events/event-mutations.js";

/* 
All graphql queries and mutations require sending data from the front-end to the back-end because at 
the minimum you need to tell the server what shape you want the data to look like, it is common practice 
to use post requests for everything.
*/

// Example 1: query without variables
const fetchWithoutVariables = () => {
    return axios.post("back-end-url", {
        query: print(ALL_EVENTS)
    })
};

// Example 2: query using id variable
const fetchWithIdVarible = () => {
    return axios.post("back-end-url", {
        query: print(USER_BY_ID),
        variables: { id: "userId" }
    })
};

// Example 3: update event that uses both id and input variables
const updateEvent = () => {
    return axios.post("back-end-url", {
        query: print(UPDATE_EVENT),
        variables: {
            id: "eventId",
            input: {
                Date: "September, 4 2020",
                Start_Time: "6:00pm",
                End_Time: "12:00am",
                Title: "updated title",
                Description: "updated description",
                category_id: 2,
                Address: "USA! USA! USA!",
                Latitude: 45.2234,
                Longitude: -2.2324
            }
        }
    })
};