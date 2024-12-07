import { useContext, useState } from "react";
import "./Checkout.css";
import { StoreContext } from "../Store/StoreContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { getTotalCart } = useContext(StoreContext);
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    cidade: "",
    estado: "",
    endereco: "",
    bairro: "",
    numero: "",
    cep: "",
    complemento: "",
    telefone: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckout = (e) => {
    e.preventDefault();

    const order = {
      customerInfo: formData,
      totalAmount: getTotalCart() + (getTotalCart() === 0 ? 0 : 2),
      items: [],
    };

    console.log("Pedido criado:", order);

    navigate("/pagamento", { state: { order } });
  };

  return (
    <form className="checkout" onSubmit={handleCheckout}>
      <div className="checkout-left">
        <p className="title">Informações de entrega</p>
        <div className="info-fields">
          <input
            type="text"
            placeholder="Nome"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="Sobrenome"
            name="sobrenome"
            value={formData.sobrenome}
            onChange={handleInputChange}
            required
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <div className="info-fields">
          <input
            type="text"
            placeholder="Cidade"
            name="cidade"
            value={formData.cidade}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="Estado"
            name="estado"
            value={formData.estado}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="info-fields">
          <input
            type="text"
            placeholder="Endereço"
            name="endereco"
            value={formData.endereco}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="Bairro"
            name="bairro"
            value={formData.bairro}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="info-fields">
          <input
            type="text"
            placeholder="Número"
            name="numero"
            value={formData.numero}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="CEP"
            name="cep"
            value={formData.cep}
            onChange={handleInputChange}
            required
          />
        </div>
        <input
          type="text"
          placeholder="Complemento"
          name="complemento"
          value={formData.complemento}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Telefone"
          name="telefone"
          value={formData.telefone}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="checkout-right">
        <div className="cart-total">
          <h2>Valor total</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>R${getTotalCart()},00</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Taxa de entrega</p>
            <p>R${getTotalCart() === 0 ? 0 : 2},00</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>R${getTotalCart() === 0 ? 0 : getTotalCart() + 2},00</b>
          </div>
          <button type="submit">Pagamento</button>
        </div>
      </div>
    </form>
  );
};

export default Checkout;