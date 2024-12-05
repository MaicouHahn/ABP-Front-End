import React, { createContext } from "react";
import { food_list } from "../../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const contextValue = {
    food_list,
  };

  return (
    <StoreContextProvider.Provider value={contextValue}>
      {props.children}
    </StoreContextProvider.Provider>
  );
};

export default StoreContextProvider;
