import React from 'react';
import FormContainer from './FormContainer.js';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Test create event static properties', () => {
  let CreateEventFormComponent;
  beforeEach(() => {
    CreateEventFormComponent = render(<FormContainer />);
  });

  test('FormContainer component renders', () => {
    expect(CreateEventFormComponent).toBeDefined();
  });
});
