<<<<<<< HEAD
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
=======
import React from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";

const FoodItem = ({ name, image, description, price, category, id }) => {
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-img" src={image} alt="" />
>>>>>>> ef6ae42d6e2e876c4ad2f20e4802d3342ecacf0d
      </div>
      <div className="food-item-infos">
        <div className="food-item-name-rating">
          <p>{name}</p>
<<<<<<< HEAD
        </div>
        <p className="food-item-desc">{description}</p>
        <img src={assets.rating_starts} alt="" />
        <p className="food-item-price">R${price},00</p>
=======
          <img src={assets} alt="" />
        </div>
>>>>>>> ef6ae42d6e2e876c4ad2f20e4802d3342ecacf0d
      </div>
    </div>
  );
};

export default FoodItem;
