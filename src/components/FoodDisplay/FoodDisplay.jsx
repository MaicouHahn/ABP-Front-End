<<<<<<< HEAD
/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../Store/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
=======
import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../Store/StoreContext";
>>>>>>> ef6ae42d6e2e876c4ad2f20e4802d3342ecacf0d

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
<<<<<<< HEAD
      <h2>Melhores opções para você!</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category == "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                category={item.category}
                image={item.image}
              />
            );
          }
=======
      <h2>Melhores opções perto de você!</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          return <FoodItem key={îndex} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image}  />;
>>>>>>> ef6ae42d6e2e876c4ad2f20e4802d3342ecacf0d
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
