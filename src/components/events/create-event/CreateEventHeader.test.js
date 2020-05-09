import React from 'react';
import CreateEventHeader from './CreateEventHeader.js';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

describe('Test CreateEventHeader component', () => {
  let CreateEventHeaderComponent;
  beforeEach(() => {
    CreateEventHeaderComponent = render(<CreateEventHeader />);
  });

  test('CreateEventHeader renders', () => {
    expect(CreateEventHeaderComponent.getByText(/Create/i));
  });
});
