import 'bootstrap/dist/css/bootstrap.min.css';
import './Pedido.css'; // Importar o CSS com a classe personalizada
import { useState, useEffect } from 'react';

const TelaStatusPedido = () => {
    // Estado inicial do status do pedido e valor do contador
    const [statusPedido, setStatusPedido] = useState("Em Preparo");
    const [contadorStatus, setContadorStatus] = useState(0);
    
    // Lista de status
    const listaStatus = ["Em Preparo", "Pedido Enviado", "Pedido Entregue"];

    // UseEffect para atualizar o status a cada 5 segundos
    useEffect(() => {
        if (contadorStatus < listaStatus.length) {
            const timerStatus = setTimeout(() => {
                setStatusPedido(listaStatus[contadorStatus]);
                setContadorStatus(prev => prev + 1);
            }, 5000);

            // Cleanup the timer on component unmount
            return () => clearTimeout(timerStatus);
        }
    }, [contadorStatus, listaStatus]);

    return (
        <div className="gradient-background d-flex justify-content-center align-items-center">
            <div className="card p-4 shadow-sm" style={{ width: '100%',maxWidth: '800px', background: 'linear-gradient(to left, #ff9aa2, #ffb3b3)' }}>
                <h2 className="card-title mb-4">Status do Pedido</h2>
                <div className="mb-3">
                    <label className="form-label">Valor Total do Pedido:</label>
                    <div className="form-control">R$ 0.00</div> {/* Substitua pelo valor real se necessário */}
                </div>
                <div className="mb-3">
                    <label className="form-label">Quantidade de Itens no Carrinho:</label>
                    <div className="form-control">0</div> {/* Substitua pela quantidade real se necessário */}
                </div>
                <div className="mb-3">
                    <label className="form-label">Forma de Pagamento Realizada:</label>
                    <div className="form-control">Pagamento Realizado</div> {/* Substitua pela forma de pagamento real */}
                </div>
                <div className="mb-3">
                    <label className="form-label">Endereço de Entrega:</label>
                    <div className="form-control">Endereço Exemplo</div> {/* Substitua pelo endereço real */}
                </div>
                <div className="mb-3">
                    <label className="form-label">Pizzas Compradas:</label>
                    <ul className="list-group">
                        <li className="list-group-item">Pizza Exemplo</li> {/* Substitua pelas pizzas reais */}
                    </ul>
                </div>
                <div className="mb-3">
                    <label className="form-label">Status Pedido:</label>
                    <div className="form-control">{statusPedido}</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Telefone de contato:</label>
                    <div className="form-control">123456789</div> {/* Substitua pelo número real */}
                </div>
            </div>
        </div>
    );
};

export default TelaStatusPedido;
