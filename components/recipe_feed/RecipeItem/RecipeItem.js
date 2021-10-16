import React from "react";
import { SwiperSlide } from "swiper/react";
import styles from "./RecipeItem.module.css";

const RecipeItem = ({ name, summary }) => {
  return (
    <div className={styles.RecipeItem__container}>
      <text className={styles.RecipeItem__howToMakeText}>
        {"How to make ->"}
      </text>
      <h1 className={styles.RecipeItem__name}>{name}</h1>
      <div className={styles.RecipeItem__summary}>{summary}</div>
    </div>
  );
};

export default RecipeItem;
