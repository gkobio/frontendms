import React, { useState } from 'react';
import './Carrinho.css'; // Não se esqueça de criar um arquivo CSS para estilizar o componente

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Pizza Margherita', quantity: 1, price: 20 },
        { id: 2, name: 'Sushi Roll', quantity: 2, price: 15 },
        // Adicione mais itens conforme necessário
    ]);
    
    const [paymentMethod, setPaymentMethod] = useState('credit'); // ou 'debit', 'cash'
    const [address, setAddress] = useState('');
    const [note, setNote] = useState('');

    const handleQuantityChange = (id, amount) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
        ));
    };

    const handleRemoveItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleNoteChange = (event) => {
        setNote(event.target.value);
    };

    const totalAmount = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

    return (
        <div className="cart-container">
            <h2>Carrinho de Compras</h2>
            {cartItems.length > 0 ? (
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <h3>{item.name}</h3>
                            <p>Preço: R${item.price.toFixed(2)}</p>
                            <div className="quantity-controls">
                                <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                            </div>
                            <button onClick={() => handleRemoveItem(item.id)}>Excluir</button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Seu carrinho está vazio.</p>
            )}
            <div className="cart-summary">
                <h3>Total: R${totalAmount.toFixed(2)}</h3>
                <div className="payment-method">
                    <label>
                        <input
                            type="radio"
                            value="credit"
                            checked={paymentMethod === 'credit'}
                            onChange={handlePaymentMethodChange}
                        />
                        Cartão de Crédito
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="debit"
                            checked={paymentMethod === 'debit'}
                            onChange={handlePaymentMethodChange}
                        />
                        Cartão de Débito
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="cash"
                            checked={paymentMethod === 'cash'}
                            onChange={handlePaymentMethodChange}
                        />
                        Dinheiro
                    </label>
                </div>
                <div className="address">
                    <label>
                        Endereço:
                        <input
                            type="text"
                            value={address}
                            onChange={handleAddressChange}
                        />
                    </label>
                </div>
                <div className="note">
                    <label>
                        Observação:
                        <textarea
                            value={note}
                            onChange={handleNoteChange}
                        />
                    </label>
                </div>
                <button className="checkout-button">Finalizar Pedido</button>
            </div>
        </div>
    );
};

export default Cart;
