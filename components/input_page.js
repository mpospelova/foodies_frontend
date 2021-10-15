import FoodInputField from "../components/food_input";

import React, { useState } from "react";
import FoodTable from "./food_table";
import { v4 as uuidv4 } from "uuid";

import { useContext } from 'react'
import GlobalContext from '../utils/global-context'

export default function InputPage() {
  const global = useContext(GlobalContext)

  const [name, setName] = useState("");
  const [unit, setUnit] = useState();
  const [quantity, setQuantity] = useState("");
  const [foodList, setFoodList] = useState(global.foodList);

  const appendToFoodList = (newFood) => {
    setFoodList([...foodList, newFood]);
    global.update({
      foodList: [...global.foodList, newFood]
    })
  };

  const addNewTextField = () => {
    const currDate = new Date();
    const yymmdd = currDate.toISOString().split("T")[0];
    //We define random offset of current date to get expiration date. Offset is uniformly random of 20 days
    const random_offset = Math.round((Math.random() - 0.8) * 20 * 24 * 60 * 60 * 1000);
    const expir_date = new Date(currDate.getTime() + random_offset);
    const expir_date_yymmdd = expir_date.toISOString().split("T")[0];
    const newFood = {
      id: uuidv4(),
      name: name,
      unit: unit,
      quantity: quantity,
      time: yymmdd,
      expir_date: expir_date_yymmdd
    };

    setName("");
    setUnit("");
    setQuantity("");

    appendToFoodList(newFood);
    console.log(foodList);
  };

  return (
    <div className="input_page">
      <h2 className="input_page_title"> Enter your food!!!</h2>

      <div className="input_field_names">
        <div className="input_name">Name</div>
        <div className="input_quantity">Quantity</div>
        <div className="input_unit">Unit</div>
      </div>

      <div className="input_container">
        <FoodInputField
          name={name}
          setName={setName}
          quantity={quantity}
          setQuantity={setQuantity}
          unit={unit}
          setUnit={setUnit}
        />
      </div>

      <button className="input_button" onClick={addNewTextField}>
        +
      </button>
      <button className="submit_button">Submit</button>

      <h3 className="food_table_title"> Newly added food:</h3>
      <div className="food_table">
        <FoodTable foodList={foodList} />
      </div>
    </div>
  );
}
