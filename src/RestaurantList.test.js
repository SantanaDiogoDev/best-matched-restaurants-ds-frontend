import { render } from '@testing-library/react';
import RestaurantList from './RestaurantList';

test('renders restaurant correctly', () => {
  const restaurant = {
    name: 'Delic',
    customerRating: '5',
    distance: '10',
    price: '50',
    cuisine: { name: 'Kor' }
  };
  const { getByText } = render(<RestaurantList restaurant={restaurant} />);
  
  expect(getByText('Delic')).toBeInTheDocument();
  expect(getByText('Rating: 5/5')).toBeInTheDocument();
  expect(getByText('Distance: 10 miles')).toBeInTheDocument();
  expect(getByText('Price: \$50')).toBeInTheDocument();
  expect(getByText('Cuisine: Kor')).toBeInTheDocument();
});