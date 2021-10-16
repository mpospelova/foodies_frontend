import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./RecipeList.module.css";

import RecipeItem from "../RecipeItem/RecipeItem";
const RecipeList = () => {
  const recipes = [
    {
      id: "0",
      name: "Curry",
      summary:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit soluta quaerat modi porro aperiam facilis, maxime quas tempore fugiat accusantium?",
      ingredients: [],
    },
    {
      id: "1",
      name: "Rendang",
      summary:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit soluta quaerat modi porro aperiam facilis, maxime quas tempore fugiat accusantium?",
      ingredients: [],
    },
    {
      id: "2",
      name: "Rendang",
      summary:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit soluta quaerat modi porro aperiam facilis, maxime quas tempore fugiat accusantium?",
      ingredients: [],
    },
    {
      id: "3",
      name: "Rendang",
      summary:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit soluta quaerat modi porro aperiam facilis, maxime quas tempore fugiat accusantium?",
      ingredients: [],
    },
  ];
  return (
    <div>
      <h2 className={styles.RecipeList__header}> Recipes </h2>
      <div className={styles.RecipeList__container}>
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
