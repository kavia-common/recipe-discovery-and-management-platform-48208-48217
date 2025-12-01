import React, { useEffect, useState } from "react";
import { fetchRecipes } from "../data/recipes";
import FiltersPanel from "../components/FiltersPanel";
import RecipeList from "../components/RecipeList";
import SearchBar from "../components/SearchBar";

// PUBLIC_INTERFACE
/**
 * Main browse/search/filters view (sidebar + list)
 */
export default function BrowsePage() {
  const [allRecipes, setAllRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [categoryFilters, setCategoryFilters] = useState([]);
  const [difficulty, setDifficulty] = useState("");
  const [loading, setLoading] = useState(true);

  // Load demo or API recipes
  useEffect(() => {
    setLoading(true);
    fetchRecipes().then(recipes => {
      setAllRecipes(recipes);
      setLoading(false);
    });
  }, []);

  // All categories/difficulties from demo data or API
  const categories = Array.from(
    new Set(allRecipes.flatMap(r => r.categories))
  );
  const difficulties = Array.from(
    new Set(allRecipes.map(r => r.difficulty))
  );

  // Filter logic
  let filtered = allRecipes;
  if (search)
    filtered = filtered.filter(r =>
      r.title.toLowerCase().includes(search.toLowerCase())
    );
  if (categoryFilters.length)
    filtered = filtered.filter(r =>
      r.categories.some(cat => categoryFilters.includes(cat))
    );
  if (difficulty)
    filtered = filtered.filter(r => r.difficulty === difficulty);

  function handleCategory(cat) {
    setCategoryFilters(arr =>
      arr.includes(cat)
        ? arr.filter(c => c !== cat)
        : [...arr, cat]
    );
  }

  return (
    <div style={{
      display: "flex",
      alignItems: "flex-start"
    }}>
      {/* Sidebar */}
      <div style={{
        minWidth: 230,
        marginRight: 30
      }}>
        <SearchBar value={search} onChange={setSearch} onSubmit={()=>{}} />
        <FiltersPanel
          categories={categories}
          selectedCategories={categoryFilters}
          onCategoryChange={handleCategory}
          difficulties={difficulties}
          selectedDifficulty={difficulty}
          onDifficultyChange={setDifficulty}
        />
      </div>
      {/* Main recipe list */}
      <main style={{
        flex: 1,
        minHeight: 380
      }}>
        {loading ? <div>Loading recipes…</div>
          : <RecipeList recipes={filtered} />}
      </main>
    </div>
  );
}
