import React from 'react';
import CheckEmail from './CheckEmail';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

describe('Test CheckEmail static properties', () => {
    let CheckEmailComponent;

    beforeEach(() => {
        CheckEmailComponent = render(
            <BrowserRouter>
                <CheckEmail />
            </BrowserRouter>
        );
    });

    test('CheckEmail component renders', () => {
        expect(CheckEmailComponent.getByText(/check your email/i));
    });
});
