import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';

import Filters from '../index';

import rootReducer from '../../../reducers';
const store = createStore(rootReducer);

afterEach(cleanup);

test("Filter button text must be a number", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Filters match={{ params: { year: 2009 } }} />
    </Provider>
  )
  expect(getByTestId('filterBtn4')).toHaveTextContent(2009)
})

test("Launch Success should be there", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Filters match={{ params: { year: 2009 } }} />
    </Provider>
  )
  expect(getByTestId('launch-success')).toHaveTextContent("Successful Launch")
})

test("Landing Success should be there", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Filters match={{ params: { year: 2009 } }} />
    </Provider>
  )
  expect(getByTestId('land-success')).toHaveTextContent("Successful Land")
})