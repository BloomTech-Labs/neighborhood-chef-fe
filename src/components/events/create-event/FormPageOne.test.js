import React from "react";
import FormPageOne from "./FormPageOne.js";
import { Formik } from "formik";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const values = {
  title: "BBQ",
  address: "123 ABC St.",
  description: "BBQ at my house!",
  date: "May, 20, 2020",
  startTime: "6:00pm",
  endTime: "9:00pm",
  category_id: 1,
};

const handleChange = jest.fn();

describe("Test FormPageOne component", () => {
  let FormPageOneComponent;
  beforeEach(() => {
    FormPageOneComponent = render(
      <Router>
        <Formik>
          <FormPageOne values={values} handleChange={handleChange} />
        </Formik>
      </Router>
    );
  });

  test("FormPageOne component renders", () => {
    expect(FormPageOneComponent).toBeDefined();
  });
});
