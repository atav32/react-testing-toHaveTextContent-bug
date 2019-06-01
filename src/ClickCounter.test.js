import React from 'react';
import { render, fireEvent, cleanup, waitForElement, } from '@testing-library/react';
import ClickCounter from './ClickCounter';

afterEach(cleanup);

test('component updates count when clicked', () => {
  const { getByText, getByTestId, asFragment } = render(
    <ClickCounter />
  );
  fireEvent.click(getByText('Click Me'));
  // const countTextNode = getByText(/You click.*\d.*times/i);
  const countTextNode = getByTestId('click-counter-text');
  expect(countTextNode).toHaveTextContent('You clicked 1 times');
});
