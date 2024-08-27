import "./Pedido.css";
import { useState, useEffect } from "react";

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
        <>
            <div className="container">
                <div className="retangulo">
                    <h2>Status do Pedido</h2>
                    <div className="item">
                        <label>Valor Total do Pedido:</label>
                        <span>R$ 0.00</span> {/* Substitua pelo valor real se necessário */}
                    </div>
                    <div className="item">
                        <label>Quantidade de Itens no Carrinho:</label>
                        0 {/* Substitua pela quantidade real se necessário */}
                    </div>
                    <div className="item">
                        <label>Forma de Pagamento Realizada:</label>
                        Pagamento Realizado {/* Substitua pela forma de pagamento real */}
                    </div>
                    <div className="item">
                        <label>Endereço de Entrega:</label>
                        Endereço Exemplo {/* Substitua pelo endereço real */}
                    </div>
                    <div className="item">
                        <label>Pizzas Compradas:</label>
                        <ul>
                            <li>Pizza Exemplo</li> {/* Substitua pelas pizzas reais */}
                        </ul>
                    </div>
                    <div>
                        <label>Status Pedido:</label> {statusPedido}
                    </div>
                    <div>
                        <label>Telefone de contato:</label> 123456789 {/* Substitua pelo número real */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TelaStatusPedido;
