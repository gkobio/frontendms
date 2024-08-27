import React, { useState } from 'react';
import './Restaurante.css';

const RestaurantDetail = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const restaurant = {
        name: "Pizzaria Gourmet",
        description: "A melhor pizzaria da cidade com uma variedade deliciosa de pizzas e acompanhamentos.",
        address: "Rua das Flores, 123 - Centro, Cidade",
        openingHours: "Segunda a Sábado, das 11h às 23h",
        products: [
            { id: 1, name: 'Pizza Margherita', price: 20, description: 'Pizza clássica com molho de tomate e queijo.' },
            { id: 2, name: 'Pizza Pepperoni', price: 25, description: 'Pizza com pepperoni e queijo derretido.' },
            { id: 3, name: 'Sushi Roll', price: 15, description: 'Rolos de sushi frescos com vegetais e peixe.' },
        ]
    };

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handleClosePopup = () => {
        setSelectedProduct(null);
    };

    return (
        <div className="restaurant-detail-container">
            <div className="restaurant-card">
                <h2>{restaurant.name}</h2>
                <p>{restaurant.description}</p>
                <p><strong>Endereço:</strong> {restaurant.address}</p>
                <p><strong>Horário de Funcionamento:</strong> {restaurant.openingHours}</p>
                <div className="product-list">
                    <h3>Produtos</h3>
                    {restaurant.products.map(product => (
                        <div key={product.id} className="product-item">
                            <h4>{product.name}</h4>
                            <p>Preço: R${product.price.toFixed(2)}</p>
                            <button onClick={() => handleProductClick(product)}>Ver Detalhes</button>
                            <button className="add-button">Adicionar</button>
                        </div>
                    ))}
                </div>
            </div>

            {selectedProduct && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close-btn" onClick={handleClosePopup}>&times;</span>
                        <h3>{selectedProduct.name}</h3>
                        <p>Preço: R${selectedProduct.price.toFixed(2)}</p>
                        <p>{selectedProduct.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RestaurantDetail;
