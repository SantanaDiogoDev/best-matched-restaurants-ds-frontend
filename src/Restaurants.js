import Restaurant from './RestaurantList';

export default function Restaurants({ restaurants }) {
  return restaurants.map(restaurant => <Restaurant key={restaurant.name} restaurant={restaurant} />);
}