import FoodInputField from "../components/food_input";

import React, { useState } from "react";

export default function InputPage() {
  const [name, setName] = useState("");
  const [unit, setUnit] = useState();
  const [quantity, setQuantity] = useState("");
  const [foodList, setFoodList] = useState([]);

  const appendToFoodList = (newFood) => {
    setFoodList([...foodList, newFood]);
  };

  const addNewTextField = () => {
    const newFood = { name: name, unit: unit, quantity: quantity };

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
    </div>
  );
}
