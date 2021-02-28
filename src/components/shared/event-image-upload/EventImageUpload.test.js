import React from 'react';
import EventImageUpload from './EventImageUpload';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import '@testing-library/jest-dom/extend-expect';

describe('Test EventImageUpload component', () => {
    let EventImageUploadComponent;
    beforeEach(() => {
        EventImageUploadComponent = render(
            <BrowserRouter>
                <EventImageUpload />
            </BrowserRouter>
        );
    });

    test('EventImageUpload component renders', () => {
        // expect(EventImageUploadComponent).toBeDefined();
        expect(EventImageUploadComponent.getByText(/Upload/i));
    });
});
