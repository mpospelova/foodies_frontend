import React from "react";

const GlobalContext = React.createContext({
  foodList: [],
  recipeList: [],
  update: (data) => {},
});

export default GlobalContext;
