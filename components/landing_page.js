import React from "react";
import RecipeList from "./recipe_feed/RecipeList/RecipeList";
import FoodDisplay from "./food_display";

import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="landing_page">
      <RecipeList />
      <FoodDisplay />
      <Link href="/input">
        <button type="button" className="landing_page_toinput_btn">
          <b>+</b>
        </button>
      </Link>
    </div>
  );
}
