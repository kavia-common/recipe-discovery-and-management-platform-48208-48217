import React from "react";

// PUBLIC_INTERFACE
/**
 * FiltersPanel with checkboxes and difficulty select
 */
export default function FiltersPanel({
  categories = [],
  selectedCategories = [],
  onCategoryChange,
  difficulties = [],
  selectedDifficulty,
  onDifficultyChange
}) {
  return (
    <aside style={{
      background: "#fff",
      borderRadius: 18,
      padding: "2rem 1.2rem",
      boxShadow: "0 1px 8px 0 #2563EB0a",
      border: "1px solid #f1f5fa",
      marginBottom: 24,
      minWidth: 170,
      maxWidth: 260
    }}>
      <h4 style={{marginTop:0}}>Filters</h4>
      <div style={{marginBottom:18}}>
        <strong style={{fontSize:13}}>Category</strong>
        <div>
          {categories.map(cat => (
            <label key={cat} style={{display:"block", fontSize:13, margin:"2px 0"}}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => onCategoryChange(cat)}
                style={{marginRight:6}}
              /> {cat}
            </label>
          ))}
        </div>
      </div>
      <div>
        <strong style={{fontSize:13}}>Difficulty</strong>
        <select
          value={selectedDifficulty || ""}
          onChange={e => onDifficultyChange(e.target.value)}
          style={{marginTop:4, width:"100%", borderRadius:8, padding:"6px 8px", border:"1px solid #e5e7eb", fontSize:14}}
        >
          <option value="">All</option>
          {difficulties.map(dif => <option key={dif} value={dif}>{dif}</option>)}
        </select>
      </div>
    </aside>
  );
}
