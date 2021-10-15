import React from "react";
import RecipeList from "./recipe_feed/RecipeList/RecipeList";
import FoodDisplay from "./food_display";

export default function LandingPage() {
  return (
    <div className="landing_page">
      <RecipeList />
      <FoodDisplay />

    </div>
  );
}
