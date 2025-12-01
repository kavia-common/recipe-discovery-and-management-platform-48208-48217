import React from "react";
import { Theme } from "../theme";

// PUBLIC_INTERFACE
/**
 * Shows recipe details (ingredients, steps, image)
 */
export default function RecipeDetail({ recipe }) {
  if (!recipe) return <div>Recipe not found.</div>;
  return (
    <div style={{
      background: "#fff",
      borderRadius: 16,
      boxShadow: "0 2px 20px 0 #2563EB14",
      padding: "2.2rem",
      maxWidth: 800,
      margin: "auto"
    }}>
      <h2 style={{marginTop:0, marginBottom:12}}>{recipe.title}</h2>
      <img
        src={recipe.image}
        alt={recipe.title}
        style={{
          width: "100%",
          maxHeight: 280,
          objectFit: "cover",
          borderRadius: 10,
          marginBottom: 16,
          boxShadow: "0 1px 6px #2563EB24"
        }}
      />
      <div style={{display: "flex", gap: 24, marginBottom: 16, flexWrap: "wrap"}}>
        <span>⏱️ Total: <b>{recipe.prepTime + recipe.cookTime}</b> min</span>
        <span>Difficulty: <b>{recipe.difficulty}</b></span>
        <span>
          {recipe.categories.map(cat => (
            <span key={cat} style={{
              background: Theme.gradient,
              padding: "3px 10px", marginLeft: 7, borderRadius: 7,
              color: Theme.primary, fontWeight: 500, fontSize: 12
            }}>{cat}</span>
          ))}
        </span>
      </div>
      <div style={{marginBottom:20}}>
        <h4>Ingredients</h4>
        <ul>
          {recipe.ingredients.map((item,i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
      <div>
        <h4>Instructions</h4>
        <p style={{whiteSpace: "pre-line"}}>{recipe.instructions}</p>
      </div>
    </div>
  );
}
