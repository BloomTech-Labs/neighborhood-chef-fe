import React from "react";
import FormPageTwo from "./FormPageTwo.js";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { Formik, Form } from "formik";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const handleChange = jest.fn();

const mockStore = configureStore([]);

describe("Test FormPageTwo component", () => {
  let FormPageTwoComponent;
  let store;

  beforeEach(() => {
    store = mockStore({});
    FormPageTwoComponent = render(
      <Provider store={store}>
        <Formik>
          <Form>
            <FormPageTwo
              handleChange={handleChange}
              hashtags={[{ id: 1, title: "#hashtags" }]}
              allergenList={[]}
              dietWarnings={[]}
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
