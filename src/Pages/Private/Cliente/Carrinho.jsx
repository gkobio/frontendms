import React, { useState } from 'react';
import './carrinho.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Pizza Margherita', quantity: 1, price: 20 },
        { id: 2, name: 'Sushi Roll', quantity: 2, price: 15 },
    ]);

    const [paymentMethod, setPaymentMethod] = useState('credit');
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
        <div style={{ height: '100vh', background: 'linear-gradient(to left, #ff9aa2, #ffb3b3)' }}>
        <div className="container mt-12" style={{ maxWidth: '100%' }}>
            <div className="row justify-content-center">
                <div className="col-12 col-md-20" style={{ maxWidth: '100%' }}>
                    <div className="card shadow">
                        <div className="card-header bg-primary text-white text-center">
                            <h2>Seu carrinho</h2>
                        </div>
                        <div className="card-body">
                            {cartItems.length > 0 ? (
                                <div className="list-group">
                                    {cartItems.map(item => (
                                        <div key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                            <div>
                                                <h5>{item.name}</h5>
                                                <p>Preço: R${item.price.toFixed(2)}</p>
                                                <div className="btn-group" role="group">
                                                    <button className="btn btn-secondary" onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                                                    <span className="mx-3">{item.quantity}</span>
                                                    <button className="btn btn-secondary" onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                                                </div>
                                            </div>
                                            <button className="btn btn-danger" onClick={() => handleRemoveItem(item.id)}>×</button>
                                        </div>
                                    ))}
                                </div>
                                
                            ) : (
                                
                                <p style={{textAlign:'center',}}><br/>Seu carrinho está vazio.</p>
                            )}
                        </div>
                        <br/>
                        <div className="card-footer">
                        <br/>

                            <h3 class="text-center">Total: R${totalAmount.toFixed(2)}</h3>
                            <br/>

                            <div className="mb-3">
                                <label className="form-label" ><h5><b>Método de Pagamento:</b> </h5></label>
                                <div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            id="credit"
                                            value="credit"
                                            checked={paymentMethod === 'credit'}
                                            onChange={handlePaymentMethodChange}
                                        />
                            
                                        <label className="form-check-label" htmlFor="credit">
                                            Cartão de Crédito
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            id="debit"
                                            value="debit"
                                            checked={paymentMethod === 'debit'}
                                            onChange={handlePaymentMethodChange}
                                        />
                                       
                                        <label className="form-check-label" htmlFor="debit">
                                            Cartão de Débito
                                        </label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            id="cash"
                                            value="cash"
                                            checked={paymentMethod === 'cash'}
                                            onChange={handlePaymentMethodChange}
                                        />
                                        <label className="form-check-label" htmlFor="cash">
                                            Dinheiro
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Endereço:</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    value={address}
                                    onChange={handleAddressChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Observação:</label>
                                <textarea
                                    className="form-control"
                                    value={note}
                                    onChange={handleNoteChange}
                                />
                            </div>
                           
                            <br/>
                            <div className="d-flex flex-column align-items-center">
    <button type="button" value="enviar" className="btn btn-success w-40 mb-2" style={{ width: '40%' }}>Finalizar Pedido</button>
    <button type="button" className="btn btn-danger w-40 mb-2" style={{ width: '40%' }}>Cancelar</button>
    <button type="button" value="limpar" className="btn btn-secondary w-40" style={{ width: '40%' }}>Limpar carrinho</button>
</div>
<br/>


                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Cart;