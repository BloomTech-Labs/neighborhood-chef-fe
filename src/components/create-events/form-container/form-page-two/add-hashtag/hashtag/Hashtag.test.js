import React from 'react';
import Hashtag from './Hashtag.js';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import '@testing-library/jest-dom/extend-expect';

describe('Test Hashtag component', () => {
  let HashtagComponent;
  beforeEach(() => {
    HashtagComponent = render(
      <BrowserRouter>
        <Hashtag hashtag={{ id: 1, title: '#hashtags' }} />
      </BrowserRouter>
    );
  });

  test('Hashtag component renders with text from props', () => {
    expect(HashtagComponent.getByText(/#hashtags/i));
  });
});
