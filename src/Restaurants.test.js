import { render } from '@testing-library/react';
import Restaurants from './Restaurants';

test('renders restaurants correctly', () => {
  const restaurants = [
    {
      name: 'Yummy',
      customerRating: '5',
      distance: '10',
      price: '50',
      cuisine: { name: 'American' }
    },
    {
      name: 'Yumm',
      customerRating: '4',
      distance: '5',
      price: '30',
      cuisine: { name: 'Ital' }
    }
  ];

  const { getAllByText } = render(<Restaurants restaurants={restaurants} />);
  
  expect(getAllByText(/Yumm/).length).toBe(2);
});