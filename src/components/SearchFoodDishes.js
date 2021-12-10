import React, { Fragment, useState } from "react";
import Grid from "@material-ui/core/Grid";
import AnyFoodDishes from "./AnyFoodDishes";
import PredefinedFoodDishes from "./PredefinedFoodDishes";
import FoodDishes from "./FoodDishes";
import { getApiUrl } from "./../constants";

const SearchFoodDishes = () => {
  const [hits, setHits] = useState();

  const getData = query => {
    
  }

  return <p>por trabajar</p>;
};

export default SearchFoodDishes;