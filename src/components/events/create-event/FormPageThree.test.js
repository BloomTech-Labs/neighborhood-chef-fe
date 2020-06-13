import React from "react";
import FormPageThree from "./FormPageThree.js";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { Formik, Form } from "formik";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const values = {
  title: "BBQ",
  address: "123 ABC St.",
  description: "BBQ at my house!",
  date: new Date(),
  startTime: "6:00pm",
  endEnd: "9:00pm",
  category_id: 1,
};

const handleChange = jest.fn();
const mockStore = configureStore([]);

describe("Test FormPageThree component", () => {
  let FormPageThreeComponent;
  let store;
  beforeEach(() => {
    store = mockStore({});
    FormPageThreeComponent = render(
      <Provider store={store}>
        <Formik>
          <Form>
            <FormPageThree
              values={values}
              handleChange={handleChange}
              modifiers={[
                {
                  id: 1,
                  title: "18+",
                  icon: "bottle icon",
                  active: false,
                },
              ]}
              hashtags={[{ id: 1, title: "#hashtag" }]}
              dietWarnings={[]}
              allergenList={[]}
              ingredientList={[]}
            />
          </Form>
        </Formik>
      </Provider>
    );
  });

  test("FormPageThree component renders", () => {
    expect(FormPageThreeComponent).toBeDefined();
    expect(
      FormPageThreeComponent.getByText(
        /Double check if your event details are correct/i
      )
    );
  });
});
