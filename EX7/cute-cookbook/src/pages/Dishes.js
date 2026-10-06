import React from "react";

const categories = [
  { name: "Breakfast", emoji: "🍳" },
  { name: "Desserts", emoji: "🍰" },
  { name: "Drinks", emoji: "🥤" },
  { name: "Salads", emoji: "🥗" },
  { name: "Snacks", emoji: "🍪" },
  { name: "Dinner", emoji: "🍝" },
];

function Dishes() {
  return (
    <div>
      <h1>Dish Categories 🍽️</h1>
      <p>Pick a category to explore yummy recipes!</p>
      <div className="card-grid">
        {categories.map((cat) => (
          <div className="card" key={cat.name}>
            <div className="card-emoji">{cat.emoji}</div>
            <div className="card-name">{cat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dishes;
