// src/components/RestaurantList.js
import React from 'react';
import './Pagina_Inicial.css';


// Exemplo de dados dos restaurantes
const restaurants = [
  {
    id: 1,
    name: 'Restaurante A',
    address: 'Rua Exemplo, 123',
    phone: '(11) 1234-5678',
    hours: 'Seg-Sex: 10:00 - 22:00, Sab-Dom: 11:00 - 23:00'
  },
  {
    id: 2,
    name: 'Restaurante B',
    address: 'Avenida Teste, 456',
    phone: '(11) 2345-6789',
    hours: 'Seg-Sex: 11:00 - 21:00, Sab-Dom: 12:00 - 22:00'
  },
  // Adicione mais restaurantes conforme necessário
];

const RestaurantList = () => {
  return (
    <div>
      <h1>Lista de Restaurantes</h1>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant.id} style={{ marginBottom: '20px' }}>
            <h2>{restaurant.name}</h2>
            <p><strong>Endereço:</strong> {restaurant.address}</p>
            <p><strong>Telefone:</strong> {restaurant.phone}</p>
            <p><strong>Horário:</strong> {restaurant.hours}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
