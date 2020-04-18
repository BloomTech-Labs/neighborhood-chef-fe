import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./utilities/reducers";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

test('renders learn react link', () => {
  const logger = createLogger();
  const store = createStore(rootReducer, applyMiddleware(logger, thunk));
  const { getByText } = render(<Provider store={store}><App /></Provider>);
  const linkElement = getByText(/increment/i);
  expect(linkElement).toBeInTheDocument();
});
