import { useState } from "react";
import axios from 'axios';
import './App.css';

function App(){

    const [restaurants, setRestaurants] = useState([]);

    const [form, setForm] = useState({
      name: '',
      customerRating: '1',
      distance: '1',
      price: '10',
      cuisine: ''
    });

    const handleChange = (event) => {
      setForm({
        ...form,
        [event.target.name]: event.target.value
      });
    };

    const handleKeyDown = async (event) => {
      if(event.key === 'Enter'){
        event.preventDefault();
        await fetchRestaurants();
      }
    };

    const handleClick = async () => {
      await fetchRestaurants();
    };

    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('http://localhost:8080/restaurants/filter', {
          params: form
        });
        setRestaurants(response.data);
      } catch (error) {
        console.error('Error fetching restaurants: ', error);
      }
    }


    return(
      <div className="form-container">
        <form className="form-input" onKeyDown={handleKeyDown}>
          <label>
            Name: 
            <input type="text" name="name" value={form.name} onChange={handleChange} />
          </label>
          <label>
            Customer Rating:
            <input type="range" name="customerRating" value={form.customerRating} min="1" max="5" onChange={handleChange} />
            <span>{form.customerRating}</span>
          </label>
          <label>
            Distance:
            <input type="range" name="distance" value={form.distance} min="1" max="10" onChange={handleChange} />
            <span>{form.distance}</span>
          </label>
          <label>
            Price:
            <input type="range" name="price" value={form.price} min="10" max="50" onChange={handleChange} />
            <span>{form.distance}</span>
          </label>
          <label>
            Cuisine:
            <input type="text" name="cuisine" value={form.cuisine} onChange={handleChange} />
          </label>
        </form>
        <button className="filter-button" type="button" onClick={handleClick}>Filter</button>
        {restaurants.map(restaurant =>(
          <div className="restaurants" key={restaurant.name}>
              <h2>{restaurant.name}</h2>
              <p>Rating: {restaurant.customerRating}/5</p>
              <p>Distance: {restaurant.distance} miles</p>
              <p>Price: ${restaurant.price}</p>
              <p>Cuisine: {restaurant.cuisine.name}</p>
          </div>
        ))}
      </div>
    );
}

export default App;