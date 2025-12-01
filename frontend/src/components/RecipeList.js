import React from "react";
import RecipeCard from "./RecipeCard";

// PUBLIC_INTERFACE
/**
 * Shows the grid/list of recipes
 */
export default function RecipeList({ recipes }) {
  if (!recipes || !recipes.length) {
    return <div>No recipes found.</div>;
  }
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: 24,
      justifyContent: "flex-start"
    }}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
