import {
    timeAgo,
    convertTime,
    convertTimeAndDate,
    isEventFavorite,
    restoreSavedModifiers,
    showOptions,
} from './index';

import { modifierData } from '../../components/create-events/form-container/form-page-two/FormPageTwo';


const favoriteEvents = [
    { id: 1, title: 'BBQ' },
    { id: 2, title: 'Pho Night' },
];

const eventTimes = {
    startTime: '1593217800000',
    endTime: '1593235800000',
};

const savedModifiers = [
    { id: 4, title: '18+ Event', active: true },
    { id: 3, title: 'Alcohol Accepted', active: true },
];

describe('Test functions index.js file', () => {
    test('test future date', () => {
        //need to mock date data for it to work here
    });

    test('test isEventFavorite function', () => {
        expect(isEventFavorite(favoriteEvents, 1)).toBe(true);
        expect(isEventFavorite(favoriteEvents, 3)).toBe(false);
    });

    test('24 hour time will be converted to 12 hour time', () => {
        expect(convertTime('18:00:00')).toBe('6:00PM');
        expect(convertTime('03:30:00')).toBe('3:30AM');
        expect(convertTime('23:30:00')).toBe('11:30PM');
    });

    test('test if modifiers are restored with icon added back', () => {
        const restoredModifiers = restoreSavedModifiers(
            modifierData,
            savedModifiers,
            (arr) => arr
        );
        expect(restoredModifiers.length).toBe(2);
        expect(restoredModifiers[0].icon).toBeDefined();
        expect(restoredModifiers[1].icon).toBeDefined();
    });

    test('show options returns true if either array has length greater than 0', () => {
        expect(showOptions([1, 2], [], [])).toBe(true);
        expect(showOptions([], [1, 2], [])).toBe(true);
        expect(showOptions([], [], [])).toBe(false);
    });
});
