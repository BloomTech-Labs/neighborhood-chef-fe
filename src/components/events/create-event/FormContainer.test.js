import React from 'react';
import FormContainer from './FormContainer.js';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Test FormContainer component', () => {
  let FormContainerComponent;
  beforeEach(() => {
    FormContainerComponent = render(<FormContainer />);
  });

  test('FormContainer component renders', () => {
    expect(FormContainerComponent).toBeDefined();
  });
});
