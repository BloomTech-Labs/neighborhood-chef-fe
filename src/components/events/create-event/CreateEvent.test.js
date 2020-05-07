import React from 'react';
import CreateEvent from './CreateEvent.js';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import '@testing-library/jest-dom/extend-expect';

describe('Test create event static properties', () => {
  let CreateEventComponent;
  beforeEach(() => {
    CreateEventComponent = render(
      <BrowserRouter>
        <CreateEvent />
      </BrowserRouter>
    );
  });

  test('CreateEvent component renders', () => {
    expect(CreateEventComponent).toBeDefined();
  });
});
