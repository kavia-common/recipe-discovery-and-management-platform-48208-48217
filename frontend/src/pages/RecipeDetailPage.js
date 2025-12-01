import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipeById } from "../data/recipes";
import RecipeDetail from "../components/RecipeDetail";

// PUBLIC_INTERFACE
/**
 * Loads a recipe by route param id and shows RecipeDetail
 */
export default function RecipeDetailPage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetchRecipeById(id).then(setRecipe);
  }, [id]);

  return (
    <div style={{ padding: "1.6rem" }}>
      <RecipeDetail recipe={recipe} />
    </div>
  );
}
