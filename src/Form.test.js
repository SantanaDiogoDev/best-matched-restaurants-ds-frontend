import { render, fireEvent } from '@testing-library/react';
import Form from './Form';

test('renders form correctly and handle change event', () => {
  const handleChange = jest.fn();

  const { getByLabelText } = render(<Form form={{ name: '', customerRating: '1', distance: '1', price: '10', cuisine: '' }} handleChange={handleChange} handleKeyDown={() => {}} />);
  
  fireEvent.change(getByLabelText(/Name:/), { target: { value: 'Test' } });
  
  expect(handleChange).toHaveBeenCalled();
});