import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Pagina_Inicial.css';

const RestaurantList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate(); // Hook para navegação

    const restaurants = [
        { id: 1, name: 'Pizzeria Napoli', address: '123 Main St', hours: '10:00 AM - 10:00 PM' },
        { id: 2, name: 'Sushi World', address: '456 Oak St', hours: '11:00 AM - 11:00 PM' },
        { id: 3, name: 'Burger Palace', address: '789 Pine St', hours: '09:00 AM - 09:00 PM' },
        // Adicione mais restaurantes aqui
    ];

    const filteredRestaurants = restaurants.filter(restaurant =>
        restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        restaurant.address.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleClick = (restaurantId) => {
        // Redireciona para a página de login
        navigate('/login');
    };

    return (
        <div className="restaurant-list-container">
            <input
                type="text"
                placeholder="Pesquisar restaurantes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar"
            />
            <div className="restaurants">
                {filteredRestaurants.length > 0 ? (
                    filteredRestaurants.map(restaurant => (
                        <div key={restaurant.id} className="restaurant-card">
                            <h2>{restaurant.name}</h2>
                            <p>{restaurant.address}</p>
                            <p>{restaurant.hours}</p>
                            <button onClick={() => handleClick(restaurant.id)}>
                                Ver detalhes
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="no-results">Nenhum restaurante encontrado.</p>
                )}
            </div>
        </div>
    );
};

export default RestaurantList;
