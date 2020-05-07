import React from 'react';
import FormPageTwo from './FormPageTwo.js';
import { Formik, Form } from 'formik';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const handleChange = jest.fn();

describe('Test FormPageTwo component', () => {
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
