import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Pagamento.css";

const Pagamento = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { order } = location.state || {};

  const [formData, setFormData] = useState(order ? order.customerInfo : {});
  const [updatedOrder, setUpdatedOrder] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePayment = (e) => {
    e.preventDefault();

    if (!formData.metodoPagamento) {
      setError("Por favor, selecione um método de pagamento para prosseguir.");
      return;
    }
    setError("");

    const updatedOrderData = {
      ...order,
      customerInfo: formData,
    };

    setUpdatedOrder(updatedOrderData);
    setIsSubmitted(true);
  };

  return (
    <div className="payment">
      {!isSubmitted && (
        <h1 className="title">Confirme as informações para a entrega:</h1>
      )}

      {!isSubmitted && (
        <div className="person-info">
          <strong>
            Nome:
            <p>
              {formData.nome} {formData.sobrenome}
            </p>
          </strong>
          <br />
          <strong>
            Email: <p>{formData.email}</p>
          </strong>
          <br />
          <strong>
            Contato: <p>{formData.telefone}</p>
          </strong>
        </div>
      )}

      {!isSubmitted && <h2 className="subtitle">Endereço:</h2>}

      {!isSubmitted && (
        <div className="infos">
          <div>
            Cidade:
            <input
              type="text"
              placeholder="Cidade"
              name="cidade"
              value={formData.cidade}
              onChange={handleInputChange}
            />
          </div>
          <div>
            Estado:
            <input
              type="text"
              placeholder="Estado"
              name="estado"
              value={formData.estado}
              onChange={handleInputChange}
            />
          </div>
        </div>
      )}

      {!isSubmitted && (
        <div className="infos">
          <div>
            Rua:
            <input
              type="text"
              placeholder="Endereço"
              name="endereco"
              value={formData.endereco}
              onChange={handleInputChange}
            />
          </div>
          <div>
            Bairro:
            <input
              type="text"
              placeholder="Bairro"
              name="bairro"
              value={formData.bairro}
              onChange={handleInputChange}
            />
          </div>
          <div>
            Número:
            <input
              type="text"
              placeholder="Número"
              name="numero"
              value={formData.numero}
              onChange={handleInputChange}
            />
          </div>
          <div>
            CEP:
            <input
              type="text"
              placeholder="CEP"
              name="cep"
              value={formData.cep}
              onChange={handleInputChange}
            />
            Complemento:
            <input
              type="text"
              placeholder="Complemento"
              name="complemento"
              value={formData.complemento}
              onChange={handleInputChange}
            />
          </div>
        </div>
      )}

      {!isSubmitted && (
        <div className="payment-method">
          <h3 className="subtitle">Escolha o método de pagamento:</h3>
          <select
            name="metodoPagamento"
            value={formData.metodoPagamento || ""}
            onChange={handleInputChange}
          >
            <option value="">Selecione...</option>
            <option value="pix">Pix</option>
            <option value="debito">Débito</option>
            <option value="credito">Crédito</option>
          </select>
          {error && <p className="error-message">{error}</p>}{" "}
        </div>
      )}
      {!isSubmitted && (
        <button className="pay-button" onClick={handlePayment}>
          Finalizar Pedido
        </button>
      )}

      {isSubmitted && updatedOrder && (
        <div className="order-summary">
          <h2 className="order-submit">Pedido efetuado com sucesso!</h2>

          <h3 className="subtitle">Informações pessoais:</h3>
          <p>
            <strong>Nome:</strong> {updatedOrder.customerInfo.nome}{" "}
            {updatedOrder.customerInfo.sobrenome}
          </p>
          <p>
            <strong>Email:</strong> {updatedOrder.customerInfo.email}
          </p>
          <p>
            <strong>Telefone:</strong> {updatedOrder.customerInfo.telefone}
          </p>

          <h3 className="subtitle">Endereço de entrega:</h3>
          <p>
            <strong>Cidade:</strong> {updatedOrder.customerInfo.cidade}
          </p>
          <p>
            <strong>Estado:</strong> {updatedOrder.customerInfo.estado}
          </p>
          <p>
            <strong>Endereço:</strong> {updatedOrder.customerInfo.endereco}
          </p>
          <p>
            <strong>Bairro:</strong> {updatedOrder.customerInfo.bairro}
          </p>
          <p>
            <strong>Número:</strong> {updatedOrder.customerInfo.numero}
          </p>
          <p>
            <strong>CEP:</strong> {updatedOrder.customerInfo.cep}
          </p>
          <p>
            <strong>Complemento:</strong>
            {updatedOrder.customerInfo.complemento}
          </p>
        </div>
      )}
    </div>
  );
};

export default Pagamento;
