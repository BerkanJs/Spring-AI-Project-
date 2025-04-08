import React, { useState } from "react";

const RecipeGenerator = () => {
  const [ingredients, setIngredients] = useState("");
  const [cuisine, setCuisine] = useState("any");
  const [dietaryRestrictions, setDietaryRestrictions] = useState("");
  const [recipe, setRecipe] = useState("");

  const createRecipe = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/ask-ai-options?prompt=${ingredients}`
      );
      const data = await response.text();
      console.log(data);
      setRecipe(data);
    } catch (error) {
      console.log("Error generating recipe:", error );
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-lg space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800">Create a Recipe</h2>

      <div className="flex flex-col space-y-4">

        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Enter ingredients (comma separated)"
          className="px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

   
        <input
          type="text"
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          placeholder="Enter cuisine type (comma separated)"
          className="px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

  
        <input
          type="text"
          value={dietaryRestrictions}
          onChange={(e) => setDietaryRestrictions(e.target.value)}
          placeholder="Enter dietary restrictions (comma separated)"
          className="px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      
      <button
        onClick={createRecipe}
        className="w-full py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
      >
        Create Recipe
      </button>


      <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-700">Generated Recipe:</h3>
        <p className="text-gray-800">{recipe || "Waiting for recipe..."}</p>
      </div>
    </div>
  );
};

export default RecipeGenerator;
