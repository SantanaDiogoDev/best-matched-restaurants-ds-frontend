import { useEffect, useState } from "react";
import axios from 'axios';
// import './home.css';

function App(){

    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await axios.post('http://localhost:8080/restaurants/filter', {
                    params: {
                        name: 'yummy',
                        customerRating: '3',
                        distance: '15',
                        price: '35',
                        cuisine: ''
                    }
                });
                setRestaurants(response.data);
            } catch (error) {
                console.error('Error fetching restaurants: ', error);
            }
        };
        fetchRestaurants();
    }, []);

    return(
      <div>
        <h1>Teste</h1>
        <div>
          {restaurants.map(restaurant =>(
              <div key={restaurant.name}>
                  <h2>{restaurant.name}</h2>
                  <p>{restaurant.customerRating}</p>
              </div>
          ))}
        </div>
      </div>
    );
}

export default App;