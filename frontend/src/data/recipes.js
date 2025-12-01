//
// Provides demo/mock recipes, and fetch helpers for API/live data switch
//

/**
 * Example recipe objects (replace with real API if env set)
 */
export const demoRecipes = [
  {
    id: "1",
    title: "Classic Margherita Pizza",
    image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&w=400",
    prepTime: 15,
    cookTime: 20,
    difficulty: "Easy",
    categories: ["Vegetarian", "Italian"],
    ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella", "Basil", "Olive oil", "Salt"],
    instructions: "1. Preheat oven to 450°F (230°C). 2. Spread dough, layer toppings. 3. Bake 15-20 min until golden.",
    summary: "Classic Neapolitan-style pizza with fresh-tasting mozzarella and basil."
  },
  {
    id: "2",
    title: "Thai Green Curry Chicken",
    image: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=400",
    prepTime: 10,
    cookTime: 30,
    difficulty: "Medium",
    categories: ["Asian", "Chicken", "Spicy"],
    ingredients: ["Chicken", "Green curry paste", "Coconut milk", "Eggplant", "Thai basil", "Fish sauce"],
    instructions: "1. Brown chicken. 2. Add paste & coconut milk. 3. Simmer with veggies, finish with basil.",
    summary: "Fragrant green curry with coconut and Thai herbs."
  },
  {
    id: "3",
    title: "Chocolate Lava Cake",
    image: "https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg?auto=compress&w=400",
    prepTime: 10,
    cookTime: 12,
    difficulty: "Easy",
    categories: ["Dessert", "Chocolate", "Baking"],
    ingredients: ["Chocolate", "Butter", "Sugar", "Eggs", "Flour", "Salt"],
    instructions: "1. Melt chocolate & butter. 2. Stir in sugar & eggs. 3. Fold in flour. 4. Bake until edges set.",
    summary: "Rich individual cakes with a gooey melted chocolate center."
  },
];

/**
 * PUBLIC_INTERFACE
 * Fetch all recipes (mock or API depending on env)
 */
export async function fetchRecipes() {
  if (process.env.REACT_APP_API_BASE) {
    const r = await fetch(process.env.REACT_APP_API_BASE + "/recipes");
    if (!r.ok) throw new Error("API error");
    return await r.json();
  } else {
    return demoRecipes;
  }
}

/**
 * PUBLIC_INTERFACE
 * Fetch a single recipe by ID
 */
export async function fetchRecipeById(id) {
  if (process.env.REACT_APP_API_BASE) {
    const r = await fetch(process.env.REACT_APP_API_BASE + `/recipes/${id}`);
    if (!r.ok) throw new Error("API error");
    return await r.json();
  } else {
    return demoRecipes.find((rec) => rec.id === id);
  }
}
