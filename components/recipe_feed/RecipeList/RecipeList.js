import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./RecipeList.module.css";

import RecipeItem from "../RecipeItem/RecipeItem";
const RecipeList = () => {
  return (
    <div className={styles.RecipeList__container}>
      <Swiper slidesPerView={"auto"} spaceBetween={5}>
        <SwiperSlide className={styles.swiperSlide}>
          <RecipeItem />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <RecipeItem />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <RecipeItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default RecipeList;
