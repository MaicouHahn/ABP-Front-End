import { useContext } from "react";
import "./Checkout.css";
import { StoreContext } from "../Store/StoreContext";

const Checkout = () => {
  const { getTotalCart } = useContext(StoreContext);

  return (
    <form className="checkout">
      <div className="checkout-left">
        <p className="title">Informações de entrega</p>
        <div className="info-fields">
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Sobrenome" />
        </div>
        <input type="email" placeholder="Email" />
        <div className="info-fields">
          <input type="text" placeholder="Cidade" />
          <input type="text" placeholder="Estado" />
        </div>
        <div className="info-fields">
          <input type="text" placeholder="Endereço" />
          <input type="text" placeholder="Bairro" />
        </div>
        <div className="info-fields">
          <input type="text" placeholder="Número" />
          <input type="text" placeholder="CEP" />
        </div>
        <input type="text" placeholder="Complemento" />
        <input type="text" placeholder="Telefone" />
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
          <button onClick={() => Checkout("/checkout")}>Pagamento</button>
        </div>
      </div>
    </form>
  );
};

export default Checkout;
