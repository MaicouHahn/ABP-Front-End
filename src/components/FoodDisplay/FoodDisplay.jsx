import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../Store/StoreContext";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Melhores opções perto de você!</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          return <FoodItem key={îndex} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image}  />;
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
