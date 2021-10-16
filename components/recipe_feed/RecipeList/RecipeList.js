import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./RecipeList.module.css";

import RecipeItem from "../RecipeItem/RecipeItem";
const RecipeList = ({ recipes }) => {
  return (
    <div>
      <div className={styles.RecipeList__container}>
        <h2 className={styles.RecipeList__header}> Recipes </h2>
      </div>
      <div className={styles.RecipeList__swiperContainer}>
        <Swiper slidesPerView={"auto"} spaceBetween={5}>
          {recipes.map(({ id, name, summary }) => (
            <SwiperSlide key={id} className={styles.swiperSlide}>
              <RecipeItem name={name} summary={summary} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RecipeList;
