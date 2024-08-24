import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [isClient, setIsClient] = useState(true);

    const handleCheckboxChange = () => {
        setIsClient(!isClient);
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                <div className="checkbox-container">
                    <input
                        type="radio"
                        id="client"
                        name="userType"
                        checked={isClient}
                        onChange={() => setIsClient(true)}
                    />
                    <label htmlFor="client">Cliente</label>
                    <input
                        type="radio"
                        id="restaurant"
                        name="userType"
                        checked={!isClient}
                        onChange={() => setIsClient(false)}
                    />
                    <label htmlFor="restaurant">Restaurante</label>
                </div>
                <input type="text" placeholder="Usuário" />
                <input type="password" placeholder="Senha" />
                <button className="login-button">
                    {isClient ? "Entrar como Cliente" : "Entrar como Restaurante"}
                </button>
            </div>
            <div className="login-image">
                <img
                    src="https://example.com/pizza.jpg" // Substitua com o URL da imagem desejada
                    alt="Comida"
                />
            </div>
        </div>
    );
};

export default Login;
