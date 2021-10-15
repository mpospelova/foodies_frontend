import React from "react";
import { SwiperSlide } from "swiper/react";
import styles from "./RecipeItem.module.css";

const RecipeItem = () => {
  return (
    <div className={styles.RecipeItem__container}>
      <h1>Chicken Curry</h1>
      <div className={styles.RecipeItem__summary}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
        excepturi quisquam labore pariatur voluptatibus? Delectus laborum nam ex
        quia soluta!
      </div>
    </div>
  );
};

export default RecipeItem;
