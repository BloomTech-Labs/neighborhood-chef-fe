import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom/extend-expect";

import { EventCard } from "./EventCard.js";

const newEvent = {
  title: "BBQ",
  address: "123 ABC St.",
  description: "BBQ at my house!",
  date: new Date(),
  startTime: "6:00pm",
  endTime: "9:00pm",
  category_id: 1,
};

const mockStore = configureStore([]);

describe("Test EventCard component", () => {
  let EventCardComponent;
  let store = newEvent;

  beforeEach(() => {
    store = mockStore({});

    EventCardComponent = render(
      <Provider store={}>
        <EventCard />
      </Provider>
    );
  });

  test("EventCard component renders", () => {
    expect(EventCardComponent).toBeDefined();
  });
});
