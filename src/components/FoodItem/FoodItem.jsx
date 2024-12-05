import React from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";

const FoodItem = ({ name, image, description, price, category, id }) => {
  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-img" src={image} alt="" />
      </div>
      <div className="food-item-infos">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
