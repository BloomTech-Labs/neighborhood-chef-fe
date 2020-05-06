import React from 'react';
import FormPageThree from './FormPageThree.js';
import { Formik, Form } from 'formik';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import moment from 'moment';

const values = {
  Title: 'BBQ',
  Address: '123 ABC St.',
  Description: 'BBQ at my house!',
  Date: new Date(),
  Start_Time: '6:00pm',
  End_End: '9:00pm',
  category_id: 1,
};

const handleChange = jest.fn();

describe('Test FormPageThree component', () => {
  let FormPageThreeComponent;
  beforeEach(() => {
    FormPageThreeComponent = render(
      <Formik>
        <Form>
          <FormPageThree
            values={values}
            handleChange={handleChange}
            modifiers={{
              id: 1,
              title: '18+',
              icon: 'bottle icon',
              active: false,
            }}
            hashtags={{ id: 1, title: '#hashtag' }}
          />
        </Form>
      </Formik>
    );
  });

  test('FormPageThree component renders', () => {
    expect(FormPageThreeComponent).toBeDefined();
    expect(
      FormPageThreeComponent.getByText(
        /Double check if your event details are correct/i
      )
    );
  });
});
