/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets.js";
import { StoreContext } from "../Store/StoreContext.jsx";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          onClick={() => addToCart(id)}
          className="food-item-image"
          src={image}
          alt=""
        />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <>
            <div className="food-item-counter">
              <img
                onClick={() => removeFromCart(id)}
                src={assets.remove_icon_red}
                alt=""
              />
              <p>{cartItems[id]}</p>
              <img
                onClick={() => addToCart(id)}
                src={assets.add_icon_green}
                alt=""
              />
            </div>
          </>
        )}
      </div>
      <div className="food-item-infos">
        <div className="food-item-name-rating">
          <p>{name}</p>
        </div>
        <p className="food-item-desc">{description}</p>
        <img src={assets.rating_starts} alt="" />
        <p className="food-item-price">R${price},00</p>
      </div>
    </div>
  );
};

export default FoodItem;
