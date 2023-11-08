import { render, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

test('fetches restaurants when the filter button is clicked', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ data: [] }),
    })
  );

  const { getByText } = render(<App />);
  const button = getByText('Filter', { exact: false });

  fireEvent.click(button);

  await fetch();

  expect(fetch).toHaveBeenCalledTimes(1);
});

test('fetches restaurants when the Enter key is pressed', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ data: [] }),
    })
  );

  const { getByLabelText } = render(<App />);
  const input = getByLabelText('Name', { exact: false });

  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

  await fetch();

  expect(fetch).toHaveBeenCalledTimes(1);
});