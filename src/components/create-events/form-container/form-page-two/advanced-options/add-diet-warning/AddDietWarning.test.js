import React from 'react';
import AddDietWarning from './AddDietWarning.js';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import '@testing-library/jest-dom/extend-expect';

const dietWarningArray = [
  { id: 1, title: 'Vegan' },
  { id: 2, title: 'Keto' },
];

describe('Test AddDietWarning component', () => {
  let AddDietWarningComponent;
  beforeEach(() => {
    AddDietWarningComponent = render(
      <BrowserRouter>
        <AddDietWarning dietWarnings={dietWarningArray} />
      </BrowserRouter>
    );
  });

  test('add dietary warning component renders with text from props', () => {
    expect(AddDietWarningComponent).toBeDefined();
    expect(AddDietWarningComponent.getByText(/Add dietary warnings/i));
    expect(AddDietWarningComponent.getByText(/Vegan/i));
    expect(AddDietWarningComponent.getByText(/Keto/i));
  });
});
