import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Restaurante.css'; // Para estilizações adicionais personalizadas

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
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-sm" style={{ maxWidth: '600px', width: '100%' }}>
                <h2 className="card-title">{restaurant.name}</h2>
                <p className="card-text">{restaurant.description}</p>
                <p><strong>Endereço:</strong> {restaurant.address}</p>
                <p><strong>Horário de Funcionamento:</strong> {restaurant.openingHours}</p>
                <div className="mt-4">
                    <h3>Produtos</h3>
                    <div className="list-group">
                        {restaurant.products.map(product => (
                            <div key={product.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <h5 className="mb-1">{product.name}</h5>
                                    <p className="mb-1">Preço: R${product.price.toFixed(2)}</p>
                                </div>
                                <div>
                                    <button className="btn btn-info btn-sm me-2" onClick={() => handleProductClick(product)}>Ver Detalhes</button>
                                    <button className="btn btn-primary btn-sm">Adicionar</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {selectedProduct && (
                <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{selectedProduct.name}</h5>
                                <button type="button" className="btn-close" onClick={handleClosePopup}></button>
                            </div>
                            <div className="modal-body">
                                <p>Preço: R${selectedProduct.price.toFixed(2)}</p>
                                <p>{selectedProduct.description}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleClosePopup}>Fechar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RestaurantDetail;
