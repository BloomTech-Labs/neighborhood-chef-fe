import React from "react";
import FormPageTwo from "./FormPageTwo.js";
import { Formik, Form } from "formik";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureStore([]);

const handleChange = jest.fn();

describe("Test FormPageTwo component", () => {
  let store;
  let FormPageTwoComponent;
  beforeEach(() => {
    store = mockStore({});
    FormPageTwoComponent = render(
      <Provider store={store}>
        <Formik>
          <Form>
            <FormPageTwo
              handleChange={handleChange}
              hashtags={[{ id: 1, title: "#hashtags" }]}
            />
          </Form>
        </Formik>
      </Provider>
    );
  });

  test("FormPageTwo component renders", () => {
    expect(FormPageTwoComponent).toBeDefined();
    expect(FormPageTwoComponent.getByText(/#hashtags/i));
  });
});
