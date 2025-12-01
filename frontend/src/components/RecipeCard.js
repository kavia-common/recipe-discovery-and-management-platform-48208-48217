import React from "react";
import { Link } from "react-router-dom";
import { Theme } from "../theme";

// PUBLIC_INTERFACE
/**
 * Recipe card (for grid/list overview)
 */
export default function RecipeCard({ recipe }) {
  return (
    <div
      style={{
        background: Theme.surface,
        borderRadius: 16,
        margin: "0 0 1.2rem 0",
        boxShadow: "0 1px 10px 0 #2563EB10",
        display: "flex",
        flexDirection: "column",
        minWidth: 230,
        maxWidth: 310,
        minHeight: 220,
        border: `1px solid ${Theme.border}`,
        transition: "box-shadow .2s"
      }}
    >
      <Link to={`/recipe/${recipe.id}`} style={{textDecoration:"none", color: Theme.text}}>
        <img
          src={recipe.image}
          alt={recipe.title}
          style={{
            width: "100%",
            objectFit: "cover",
            minHeight: 110,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16
          }}
        />
        <div style={{ padding: "1rem" }}>
          <h3 style={{ margin: 0, fontSize: "1.1rem", fontWeight: 600, lineHeight: 1.2 }}>{recipe.title}</h3>
          <p style={{ margin: "0.6rem 0 0.3rem", color: "#555", fontSize: 13 }}>{recipe.summary}</p>
          <div style={{ fontSize: "0.95em", marginTop: 8, color: "#64748b" }}>
            <span role="img" aria-label="Timer">⏱️</span> {recipe.prepTime + recipe.cookTime} min&nbsp;|&nbsp;{recipe.difficulty}
          </div>
          <div style={{ marginTop: 6 }}>
            {recipe.categories?.map(cat=>(
              <span key={cat} style={{
                background: Theme.gradient,
                borderRadius: 7,
                color: Theme.primary,
                padding: "3px 9px",
                fontSize: 11,
                marginRight: 5,
                fontWeight: 500
              }}>{cat}</span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}
