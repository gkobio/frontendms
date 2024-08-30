import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContaClient = () => {
    const [clientData, setClientData] = useState({
        name: 'João Silva',
        address: 'Rua das Flores, 123',
        email: 'joao.silva@example.com',
        phone: '(11) 98765-4321',
        cpf: '123.456.789-00'
    });

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(clientData);
    const [view, setView] = useState('home'); // Controla qual tela está sendo exibida

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleEdit = () => {
        setIsEditing(true);
        setView('edit');
    };

    const handleCancel = () => {
        setIsEditing(false);
        setFormData(clientData);
        setView('home');
    };

    const handleSave = () => {
        setClientData(formData);
        setIsEditing(false);
        setView('home');
    };

    const handleViewOrders = () => {
        setView('orders');
    };

    return (
        <div style={{ height: '100vh', background: 'linear-gradient(to left, #ff9aa2, #ffb3b3)' }}>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
                <div className="container">
                    {view === 'home' && (
                        <div className="row justify-content-center col-12 col-md-10 col-lg-8">
                            <div className="col-12 col-md-8">
                                <div className="card p-4 mb-4 shadow-sm">
                                    <h3>Informações do Cliente</h3>
                                    <p><strong>Nome:</strong> {clientData.name}</p>
                                    <p><strong>Endereço:</strong> {clientData.address}</p>
                                    <p><strong>Email:</strong> {clientData.email}</p>
                                    <p><strong>Telefone:</strong> {clientData.phone}</p>
                                    <p><strong>CPF:</strong> {clientData.cpf}</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <button onClick={handleEdit} className="btn btn-primary">Editar Informações</button>
                                    <button onClick={handleViewOrders} className="btn btn-secondary">Meus Pedidos</button>
                                </div>
                            </div>
                        </div>
                    )}
                    {view === 'edit' && (
                        <div className="row justify-content-center col-12 col-md-10 col-lg-8">
                            <div className="col-12 col-md-10 col-lg-8">
                                <div className="card p-4 shadow-sm">
                                    <h3>Editar Informações</h3>
                                    <div className="mb-3">
                                        <label className="form-label">Nome:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Endereço:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email:</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Telefone:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">CPF:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="cpf"
                                            value={formData.cpf}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <button onClick={handleSave} className="btn btn-success">Salvar</button>
                                        <button onClick={handleCancel} className="btn btn-danger">Cancelar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {view === 'orders' && (
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-8">
                                <div className="card p-4 shadow-sm">
                                    <h3>Meus Pedidos</h3>
                                    <ul className="list-group">
                                        <li className="list-group-item">Pedido #1 - Data: 20/08/2024 - Status: Entregue</li>
                                        <li className="list-group-item">Pedido #2 - Data: 15/08/2024 - Status: Em Andamento</li>
                                        <li className="list-group-item">Pedido #3 - Data: 10/08/2024 - Status: Cancelado</li>
                                        {/* Adicione mais pedidos conforme necessário */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContaClient;
