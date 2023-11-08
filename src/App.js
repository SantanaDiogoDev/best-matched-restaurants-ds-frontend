import { useState } from "react";
import axios from 'axios';
import './App.css';
import Form from './Form';
import Restaurants from './Restaurants';

const { API_URL } = require('./properties.js');

export default function App() {
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
      const response = await axios.get(API_URL, {
        params: form
      });
      setRestaurants(response.data);
    } catch (error) {
      console.error('Error fetching restaurants: ', error);
    }
  }

  return(
    <div className="form-container">
      <Form form={form} handleChange={handleChange} handleKeyDown={handleKeyDown} />
      <button className="filter-button" type="button" onClick={handleClick}>Filter</button>
      <Restaurants restaurants={restaurants} />
    </div>
  );
}