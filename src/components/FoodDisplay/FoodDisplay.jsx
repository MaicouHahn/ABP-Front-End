/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../Store/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
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
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
