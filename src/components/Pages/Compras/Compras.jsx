<<<<<<< HEAD
/* eslint-disable react/jsx-key */
import { useContext, useState } from "react";
import "./Compras.css";
import { StoreContext } from "../../store/StoreContext";
import { Link, useNavigate } from "react-router-dom";

const Compras = () => {
  const { cartItems, food_list, removeFromCart, getTotalCart } =
    useContext(StoreContext);
  const [promoCode, setPromoCode] = useState("");
  const [discountedTotal, setDiscountedTotal] = useState(getTotalCart() + 2);
  const [errorMessage, setErrorMessage] = useState("");
  const [couponApplied, setPromoCodeOn] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");
  const navigate = useNavigate();

  const applyPromoCode = () => {
    const validCoupon = "DESCONTO10";
    const discountPercentage = 10;

    if (promoCode === validCoupon) {
      const discountAmount = (getTotalCart() * discountPercentage) / 100;
      setDiscountedTotal(getTotalCart() + 2 - discountAmount);
      setErrorMessage("");
      setPromoCodeOn(true);
    } else {
      setErrorMessage("Cupom inválido! Tente novamente.");
      setPromoCodeOn(false);
    }
  };

  const isCartEmpty = () => {
    return (
      Object.keys(cartItems).length === 0 ||
      food_list.every((item) => cartItems[item._id] === 0)
    );
  };

  const handleCheckout = () => {
    if (isCartEmpty()) {
      setCheckoutError(
        "Seu carrinho está vazio. Adicione itens antes de finalizar o checkout."
      );
    } else {
      setCheckoutError("");
      navigate("/checkout");
    }
  };

  return (
    <div className="cart">
      {isCartEmpty() ? (
        <div className="empty-cart-message">
          <h1>Seu carrinho está vazio!</h1>
          <h2>
            Volte para a{" "}
            <Link to="/">
              <a className="home-page">tela inicial</a>
            </Link>
            .
          </h2>
        </div>
      ) : (
        <>
          <div className="cart-items">
            <div className="cart-items-title">
              <p>Itens</p>
              <p>Título</p>
              <p>Preço</p>
              <p>Quantidade</p>
              <p>Valor total</p>
              <p>Remover</p>
            </div>
            <br />
            <hr />
            {food_list.map((item, index) => {
              if (cartItems[item._id] > 0) {
                return (
                  <div key={index}>
                    <div className="cart-items-title cart-items-item">
                      <img src={item.image} alt="" />
                      <p>{item.name}</p>
                      <p>R${item.price},00</p>
                      <p>{cartItems[item._id]}</p>
                      <p>R${item.price * cartItems[item._id]},00</p>
                      <p
                        onClick={() => removeFromCart(item._id)}
                        className="cross"
                      >
                        x
                      </p>
                    </div>
                    <hr />
                  </div>
                );
              }
            })}
          </div>
          <div className="cart-bottom">
            <div className="cart-total">
              <h2>Valor total</h2>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>R${getTotalCart()},00</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Taxa de entrega</p>
                <p>R${2},00</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>R${discountedTotal.toFixed(2)}</b>
              </div>
              {checkoutError && (
                <p className="error-message">{checkoutError}</p>
              )}
              <button onClick={handleCheckout}>Checkout</button>
            </div>
            <div className="cart-code">
              <div>
                <p>Possui cupom de desconto? Insira aqui! </p>
                <div className="cart-code-input">
                  <input
                    type="text"
                    placeholder="Cupom de desconto!"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <button onClick={applyPromoCode}>Aplicar</button>
                  <p className="valid-code">CUPOM: DESCONTO10</p>
                </div>
                <div className="code-on">
                  {errorMessage && (
                    <p className="error-message">{errorMessage}</p>
                  )}
                  {couponApplied && (
                    <p className="code-valid">Desconto aplicado com sucesso!</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
=======
import React from "react";
import "./Compras.css";

const Compras = () => {
  return <div></div>;
};
import "./Compras.css";
>>>>>>> ef6ae42d6e2e876c4ad2f20e4802d3342ecacf0d

export default Compras;
