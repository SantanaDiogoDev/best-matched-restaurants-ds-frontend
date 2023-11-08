export default function RestaurantList({ restaurant }) {
    return (
      <div className="restaurants" key={restaurant.name}>
        <h2>{restaurant.name}</h2>
        <p>Rating: {restaurant.customerRating}/5</p>
        <p>Distance: {restaurant.distance} miles</p>
        <p>Price: ${restaurant.price}</p>
        <p>Cuisine: {restaurant.cuisine.name}</p>
      </div>
    );
  }