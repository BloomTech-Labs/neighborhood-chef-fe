import React from 'react';
import FormPageTwo from './FormPageTwo.js';
import { Formik, Form } from 'formik';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const handleChange = jest.fn();

const modifierData = [
  { id: 1, title: 'BBQ', icon: 'icon 1', active: false },
  { id: 2, title: 'Kid-Friendly', icon: 'icon 2', active: false },
  { id: 3, title: 'Alcohol Accepted', icon: 'icon 3', active: false },
];

describe('Test FormContainer component', () => {
  let FormPageTwoComponent;
  beforeEach(() => {
    FormPageTwoComponent = render(
      <Formik>
        <Form>
          <FormPageTwo
            handleChange={handleChange}
            hashtags={[{ id: 1, title: '#hashtags' }]}
          />
        </Form>
      </Formik>
    );
  });

  test('FormPageTwo component renders', () => {
    expect(FormPageTwoComponent).toBeDefined();
    expect(FormPageTwoComponent.getByText(/#hashtags/i));
  });
});
