import React from 'react';
import FormPageOne from './FormPageOne.js';
import { Formik, Form } from 'formik';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const values = {
  Title: 'BBQ',
  Address: '123 ABC St.',
  Description: 'BBQ at my house!',
  Date: 'May, 20, 2020',
  Start_Time: '6:00pm',
  End_End: '9:00pm',
  category_id: 1,
};

const handleChange = jest.fn();

describe('Test FormPageOne component', () => {
  let FormPageOneComponent;
  beforeEach(() => {
    FormPageOneComponent = render(
      <Formik>
        <Form>
          <FormPageOne values={values} handleChange={handleChange} />
        </Form>
      </Formik>
    );
  });

  test('FormPageOne component renders', () => {
    expect(FormPageOneComponent).toBeDefined();
  });
});
