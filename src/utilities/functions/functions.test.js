import {
  timeAgo,
  convertTime,
  convertTimeAndDate,
  isEventFavorite,
  restoreSavedModifiers,
} from "./index";

import { modifierData } from "../../components/events/create-event/FormPageTwo.js";

const favoriteEvents = [
  { id: 1, title: "BBQ" },
  { id: 2, title: "Pho Night" },
];

const eventTimes = {
  startTime: "1593217800000",
  endTime: "1593235800000",
};

const savedModifiers = [
  { id: 4, title: "18+ Event", active: true },
  { id: 3, title: "Alcohol Accepted", active: true },
];

describe("Test functions index.js file", () => {
  test("test future date", () => {
    //need to mock date data for it to work here
  });

  test("test isEventFavorite function", () => {
    expect(isEventFavorite(favoriteEvents, 1)).toBe(true);
    expect(isEventFavorite(favoriteEvents, 3)).toBe(false);
  });

  test("24 hour times will be converted to 12 hour times", () => {
    expect(convertTime("18:00:00")).toBe("6:00PM");
    expect(convertTime("03:30:00")).toBe("3:30AM");
    expect(convertTime("23:30:00")).toBe("11:30PM");
  });

  test("date/time strings will be converted to object with date, startTime, and endTime keys", () => {
    const convertedTimes = convertTimeAndDate(eventTimes);
    expect(convertedTimes.date).toBe("2020-06-26");
    expect(convertedTimes.startTime).toEqual("17:30:00");
    expect(convertedTimes.endTime).toEqual("22:30:00");
  });

  test("test if modifiers are restored with icon added back", () => {
    const restoredModifiers = restoreSavedModifiers(
      modifierData,
      savedModifiers,
      (arr) => arr
    );
    expect(restoredModifiers.length).toBe(2);
    expect(restoredModifiers[0].icon).toBeDefined();
  });
});
