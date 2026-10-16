/* ========================================
   TASTY KITCHEN — JAVASCRIPT
   ======================================== */

// 1. RECIPE DATA

const recipes = [
  {
    id: "jollof-rice",
    name: "Nigerian Jollof Rice",
    category: "Nigerian",
    description: "Smoky, rich, and flavorful West African party rice.",
    image: "https://kikifoodies.com/wp-content/uploads/2025/03/ET5B8958-4.jpeg",
    cookingTime: 45,
    servings: 4,
    ingredients: [
      "2 cups long-grain rice",
      "3 medium tomatoes, blended",
      "2 tablespoons tomato paste",
      "1 medium onion, chopped",
      "1 red bell pepper",
      "2 tablespoons vegetable oil",
      "2 cups stock or water",
      "Salt, thyme, curry, and seasoning to taste",
    ],
    instructions: [
      "Wash the rice thoroughly and set aside.",
      "Blend the tomatoes and red bell pepper until smooth.",
      "Heat the oil in a pot and sauté the chopped onion.",
      "Add the tomato paste and blended mixture. Cook until the sauce thickens.",
      "Add stock, seasoning, and washed rice. Stir gently.",
      "Cover and cook on low heat until the rice is tender, adding a little water if needed.",
      "Allow the rice to steam briefly, then fluff gently and serve.",
    ],
  },
  {
    id: "fried-rice",
    name: "Chicken Fried Rice",
    category: "Rice Dishes",
    description: "Colorful fried rice with vegetables and delicious seasoning.",
    image:
      "https://cicili.tv/wp-content/uploads/2024/08/Chicken-Fried-Rice-Small-2-1200x900.jpg",
    cookingTime: 35,
    servings: 4,
    ingredients: [
      "2 cups cooked rice, cooled",
      "1 cup cooked chicken, diced",
      "1 cup mixed vegetables",
      "2 eggs, beaten",
      "2 cloves garlic, minced",
      "2 tablespoons vegetable oil",
      "1 tablespoon soy sauce",
      "Salt and black pepper to taste",
    ],
    instructions: [
      "Cook the rice and let it cool. Leftover chilled rice works well.",
      "Heat oil in a large pan or wok.",
      "Scramble the eggs, then transfer them to a plate.",
      "Add garlic, chicken, and vegetables to the pan. Stir-fry until heated through.",
      "Add the rice and soy sauce. Toss everything together.",
      "Return the eggs to the pan and season to taste.",
      "Serve hot.",
    ],
  },
  {
    id: "spaghetti",
    name: "Spaghetti Bolognese",
    category: "Pasta",
    description: "Comforting spaghetti served with a rich tomato sauce.",
    image:
      "https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg",
    cookingTime: 35,
    servings: 4,
    ingredients: [
      "250 g spaghetti",
      "300 g minced beef",
      "3 medium tomatoes, chopped or blended",
      "1 small onion, chopped",
      "2 cloves garlic, minced",
      "2 tablespoons cooking oil",
      "1 teaspoon dried herbs",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Bring a pot of salted water to a boil.",
      "Cook the spaghetti according to its package instructions.",
      "Meanwhile, heat oil in a pan and sauté the onion and garlic.",
      "Add the minced beef and cook thoroughly until browned.",
      "Add the tomatoes and herbs. Simmer until the sauce thickens and the beef is cooked through.",
      "Season to taste and mix with the drained spaghetti.",
      "Serve warm.",
    ],
  },
  {
    id: "tomato-egg-rice",
    name: "Tomato Egg Rice",
    category: "Quick Meals",
    description: "A simple, comforting meal with rice, tomatoes, and eggs.",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85",
    cookingTime: 25,
    servings: 2,
    ingredients: [
      "2 cups cooked rice",
      "2 eggs",
      "2 ripe tomatoes, chopped",
      "1 small onion, chopped",
      "1 tablespoon vegetable oil",
      "Salt and pepper to taste",
    ],
    instructions: [
      "Prepare the rice and set aside.",
      "Heat the oil in a pan and sauté the onion.",
      "Add the chopped tomatoes and cook until softened.",
      "Beat the eggs and add them to the pan. Stir until thoroughly cooked.",
      "Add the cooked rice and mix everything together.",
      "Season to taste and serve hot.",
    ],
  },
  {
    id: "vegetable-pasta",
    name: "Vegetable Pasta",
    category: "Pasta",
    description: "Pasta tossed with colorful vegetables and savory seasoning.",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85",
    cookingTime: 25,
    servings: 2,
    ingredients: [
      "200 g pasta",
      "1 cup chopped bell peppers",
      "1 small onion, sliced",
      "2 tomatoes, chopped",
      "1 tablespoon vegetable oil",
      "1 clove garlic, minced",
      "Salt and herbs to taste",
    ],
    instructions: [
      "Cook the pasta according to its package instructions.",
      "Heat oil in a pan and sauté the onion and garlic.",
      "Add the bell peppers and tomatoes.",
      "Cook until the vegetables soften.",
      "Add the drained pasta and toss everything together.",
      "Season to taste and serve.",
    ],
  },
  {
    id: "pancakes",
    name: "Fluffy Pancakes",
    category: "Breakfast",
    description: "Soft, fluffy pancakes perfect for a relaxed breakfast.",
    image:
      "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=85",
    cookingTime: 20,
    servings: 3,
    ingredients: [
      "1 cup all-purpose flour",
      "1 egg",
      "3/4 cup milk",
      "1 tablespoon sugar",
      "1 teaspoon baking powder",
      "1 tablespoon melted butter",
      "A pinch of salt",
    ],
    instructions: [
      "Mix the flour, sugar, baking powder, and salt in a bowl.",
      "Whisk the egg, milk, and melted butter in a separate bowl.",
      "Combine the wet and dry ingredients until just mixed.",
      "Heat a lightly greased pan over medium heat.",
      "Pour small portions of batter into the pan.",
      "Flip when bubbles form and cook the other side until golden.",
      "Serve warm with your favorite toppings.",
    ],
  },
];

// 2. GET HTML ELEMENTS

const welcome = document.getElementById("welcome");
const themeBtn = document.getElementById("theme-btn");

const recipeContainer = document.getElementById("recipe-container");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const clearSearchBtn = document.getElementById("clear-search");

const favoritesFilterBtn = document.getElementById("favorites-filter");
const favoriteCount = document.getElementById("favorite-count");
const resultsCount = document.getElementById("results-count");

const emptyState = document.getElementById("empty-state");
const resetRecipesBtn = document.getElementById("reset-recipes");

const recipeDialog = document.getElementById("recipe-dialog");
const recipeDetails = document.getElementById("recipe-details");
const closeDialogBtn = document.getElementById("close-dialog");

const topBtn = document.getElementById("topBtn");
const currentYear = document.getElementById("current-year");

// 3. SAFE BROWSER STORAGE

function readStorage(key, fallback) {
  try {
    const savedValue = localStorage.getItem(key);

    return savedValue === null ? fallback : JSON.parse(savedValue);
  } catch (error) {
    return fallback;
  }
}

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn("Your browser could not save this preference.");
  }
}

// 4. WELCOME MESSAGE

function updateWelcomeMessage() {
  if (!welcome) return;

  const hour = new Date().getHours();

  if (hour < 12) {
    welcome.textContent = "🌞 Good morning! Welcome to Tasty Kitchen.";
  } else if (hour < 18) {
    welcome.textContent = "☀️ Good afternoon! Discover something delicious.";
  } else {
    welcome.textContent = "🌙 Good evening! Let's make something tasty.";
  }
}

updateWelcomeMessage();

// 5. DARK MODE

function applyTheme(theme) {
  const isDark = theme === "dark";

  document.body.classList.toggle("dark", isDark);

  if (themeBtn) {
    themeBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";

    themeBtn.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode",
    );
  }

  document.documentElement.style.colorScheme = isDark ? "dark" : "light";
}

const savedTheme = readStorage("tastyKitchenTheme", "light");

applyTheme(savedTheme === "dark" ? "dark" : "light");

themeBtn?.addEventListener("click", function () {
  const nextTheme = document.body.classList.contains("dark") ? "light" : "dark";

  applyTheme(nextTheme);
  saveStorage("tastyKitchenTheme", nextTheme);
});

// 6. FAVORITES

const savedFavorites = readStorage("tastyKitchenFavorites", []);

const favorites = new Set(
  Array.isArray(savedFavorites)
    ? savedFavorites.filter((id) => recipes.some((recipe) => recipe.id === id))
    : [],
);

let showFavoritesOnly = false;

function saveFavorites() {
  saveStorage("tastyKitchenFavorites", [...favorites]);
}

function updateFavoriteCount() {
  if (favoriteCount) {
    favoriteCount.textContent = favorites.size;
  }

  if (favoritesFilterBtn) {
    favoritesFilterBtn.setAttribute("aria-pressed", String(showFavoritesOnly));

    favoritesFilterBtn.innerHTML = showFavoritesOnly
      ? '♥ Showing Favorites <span id="favorite-count">' +
        favorites.size +
        "</span>"
      : '♡ My Favorites <span id="favorite-count">' +
        favorites.size +
        "</span>";
  }
}

// 7. CREATE RECIPE CARDS

function createRecipeCard(recipe) {
  const isFavorite = favorites.has(recipe.id);

  const card = document.createElement("article");
  card.className = "card";

  const imageWrap = document.createElement("div");
  imageWrap.className = "card-image-wrap";

  const image = document.createElement("img");
  image.className = "card-image";
  image.src = recipe.image;
  image.alt = recipe.name;
  image.loading = "lazy";

  image.addEventListener("error", function () {
    image.alt = recipe.name + " image unavailable";
  });

  const favoriteBtn = document.createElement("button");
  favoriteBtn.type = "button";
  favoriteBtn.className = "favorite-btn" + (isFavorite ? " is-favorite" : "");

  favoriteBtn.textContent = isFavorite ? "♥" : "♡";
  favoriteBtn.setAttribute(
    "aria-label",
    isFavorite
      ? "Remove " + recipe.name + " from favorites"
      : "Add " + recipe.name + " to favorites",
  );
  favoriteBtn.setAttribute("aria-pressed", String(isFavorite));

  favoriteBtn.addEventListener("click", function () {
    toggleFavorite(recipe.id);
  });

  imageWrap.append(image, favoriteBtn);

  const content = document.createElement("div");
  content.className = "card-content";

  const category = document.createElement("span");
  category.className = "card-category";
  category.textContent = recipe.category;

  const title = document.createElement("h3");
  title.textContent = recipe.name;

  const description = document.createElement("p");
  description.className = "card-description";
  description.textContent = recipe.description;

  const meta = document.createElement("div");
  meta.className = "card-meta";

  const time = document.createElement("span");
  time.textContent = "◷ " + recipe.cookingTime + " mins";

  const servings = document.createElement("span");
  servings.textContent = "♧ Serves " + recipe.servings;

  meta.append(time, servings);

  const actions = document.createElement("div");
  actions.className = "card-actions";

  const viewBtn = document.createElement("button");
  viewBtn.type = "button";
  viewBtn.className = "primary-btn";
  viewBtn.textContent = "View Recipe →";
  viewBtn.addEventListener("click", function () {
    openRecipe(recipe.id);
  });

  const saveBtn = document.createElement("button");
  saveBtn.type = "button";
  saveBtn.className = "secondary-btn";
  saveBtn.textContent = isFavorite ? "♥ Saved" : "♡ Save";
  saveBtn.addEventListener("click", function () {
    toggleFavorite(recipe.id);
  });

  actions.append(viewBtn, saveBtn);

  content.append(category, title, description, meta, actions);
  card.append(imageWrap, content);

  return card;
}

// 8. DISPLAY AND SEARCH RECIPES

function renderRecipes() {
  if (!recipeContainer) return;

  const query = searchInput ? searchInput.value.trim().toLowerCase() : "";

  const filteredRecipes = recipes.filter((recipe) => {
    const searchableText = [
      recipe.name,
      recipe.category,
      recipe.description,
      ...recipe.ingredients,
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch = searchableText.includes(query);
    const matchesFavorite = !showFavoritesOnly || favorites.has(recipe.id);

    return matchesSearch && matchesFavorite;
  });

  recipeContainer.replaceChildren();

  filteredRecipes.forEach((recipe) => {
    recipeContainer.appendChild(createRecipeCard(recipe));
  });

  if (resultsCount) {
    resultsCount.textContent =
      "Showing " +
      filteredRecipes.length +
      (filteredRecipes.length === 1 ? " recipe" : " recipes");
  }

  if (emptyState) {
    emptyState.hidden = filteredRecipes.length !== 0;
  }

  updateFavoriteCount();
}

function toggleFavorite(recipeId) {
  if (favorites.has(recipeId)) {
    favorites.delete(recipeId);
  } else {
    favorites.add(recipeId);
  }

  saveFavorites();
  renderRecipes();
}

searchForm?.addEventListener("submit", function (event) {
  event.preventDefault();
  renderRecipes();
});

searchInput?.addEventListener("input", renderRecipes);

clearSearchBtn?.addEventListener("click", function () {
  if (searchInput) {
    searchInput.value = "";
  }

  showFavoritesOnly = false;
  renderRecipes();
  searchInput?.focus();
});

favoritesFilterBtn?.addEventListener("click", function () {
  showFavoritesOnly = !showFavoritesOnly;
  renderRecipes();
});

resetRecipesBtn?.addEventListener("click", function () {
  if (searchInput) {
    searchInput.value = "";
  }

  showFavoritesOnly = false;
  renderRecipes();
});

// 9. RECIPE DETAILS

function openRecipe(recipeId) {
  const recipe = recipes.find((item) => item.id === recipeId);

  if (!recipe || !recipeDialog || !recipeDetails) return;

  recipeDetails.replaceChildren();

  const image = document.createElement("img");
  image.className = "dialog-recipe-image";
  image.src = recipe.image;
  image.alt = recipe.name;

  const title = document.createElement("h2");
  title.className = "dialog-recipe-title";
  title.textContent = recipe.name;

  const description = document.createElement("p");
  description.className = "dialog-description";
  description.textContent =
    recipe.description +
    " Cooking time: " +
    recipe.cookingTime +
    " minutes. Serves " +
    recipe.servings +
    ".";

  const ingredientsTitle = document.createElement("h3");
  ingredientsTitle.textContent = "Ingredients";

  const ingredientsList = document.createElement("ul");
  ingredientsList.className = "dialog-list";

  recipe.ingredients.forEach((ingredient) => {
    const item = document.createElement("li");
    item.textContent = ingredient;
    ingredientsList.appendChild(item);
  });

  const instructionsTitle = document.createElement("h3");
  instructionsTitle.textContent = "Preparation Steps";

  const instructionsList = document.createElement("ol");
  instructionsList.className = "dialog-list";

  recipe.instructions.forEach((instruction) => {
    const item = document.createElement("li");
    item.textContent = instruction;
    instructionsList.appendChild(item);
  });

  const favoriteBtn = document.createElement("button");
  favoriteBtn.type = "button";
  favoriteBtn.className = "primary-btn";
  favoriteBtn.textContent = favorites.has(recipe.id)
    ? "♥ Remove from Favorites"
    : "♡ Add to Favorites";

  favoriteBtn.addEventListener("click", function () {
    toggleFavorite(recipe.id);

    favoriteBtn.textContent = favorites.has(recipe.id)
      ? "♥ Remove from Favorites"
      : "♡ Add to Favorites";
  });

  recipeDetails.append(
    image,
    title,
    description,
    ingredientsTitle,
    ingredientsList,
    instructionsTitle,
    instructionsList,
    favoriteBtn,
  );

  if (!recipeDialog.open) {
    recipeDialog.showModal();
  }
}

closeDialogBtn?.addEventListener("click", function () {
  recipeDialog?.close();
});

recipeDialog?.addEventListener("click", function (event) {
  if (event.target === recipeDialog) {
    recipeDialog.close();
  }
});

recipeDialog?.addEventListener("close", function () {
  // The browser restores focus to the element that opened the dialog.
});

// 10. BACK TO TOP

function updateTopButton() {
  if (!topBtn) return;

  topBtn.classList.toggle("visible", window.scrollY > 300);
}

window.addEventListener("scroll", updateTopButton, {
  passive: true,
});

topBtn?.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

updateTopButton();

// 11. CURRENT YEAR

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

// 12. INITIALIZE WEBSITE

renderRecipes();
