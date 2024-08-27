import React, { useState } from 'react';
import './ContaClient.css';

const ContaClient = () => {
    // Dados do cliente (inicialmente estáticos, mas poderiam vir de uma API)
    const [clientData, setClientData] = useState({
        name: 'João Silva',
        address: 'Rua das Flores, 123',
        email: 'joao.silva@example.com',
        phone: '(11) 98765-4321',
        cpf: '123.456.789-00'
    });

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(clientData);

    // Funções para manipular o estado do formulário
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setFormData(clientData); // Reverte as mudanças se o usuário cancelar
    };

    const handleSave = () => {
        setClientData(formData);
        setIsEditing(false);
        // Aqui você pode adicionar lógica para enviar os dados alterados para o servidor
    };

    return (
        <div className="profile-container">
            <h2>Perfil do Cliente</h2>
            <div className="profile-details">
                <div className="profile-field">
                    <label>Nome:</label>
                    {isEditing ? (
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    ) : (
                        <span>{clientData.name}</span>
                    )}
                </div>
                <div className="profile-field">
                    <label>Endereço:</label>
                    {isEditing ? (
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    ) : (
                        <span>{clientData.address}</span>
                    )}
                </div>
                <div className="profile-field">
                    <label>Email:</label>
                    {isEditing ? (
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    ) : (
                        <span>{clientData.email}</span>
                    )}
                </div>
                <div className="profile-field">
                    <label>Telefone:</label>
                    {isEditing ? (
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    ) : (
                        <span>{clientData.phone}</span>
                    )}
                </div>
                <div className="profile-field">
                    <label>CPF:</label>
                    {isEditing ? (
                        <input
                            type="text"
                            name="cpf"
                            value={formData.cpf}
                            onChange={handleChange}
                        />
                    ) : (
                        <span>{clientData.cpf}</span>
                    )}
                </div>
            </div>
            <div className="profile-actions">
                {isEditing ? (
                    <>
                        <button onClick={handleSave} className="save-button">Salvar</button>
                        <button onClick={handleCancel} className="cancel-button">Cancelar</button>
                    </>
                ) : (
                    <button onClick={handleEdit} className="edit-button">Editar</button>
                )}
            </div>
        </div>
    );
};

export default ContaClient;
